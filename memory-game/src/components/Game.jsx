import {useState, useEffect} from 'react'
import CardContainer from "./CardContainer";
import images from "./images";

const MemoryGame = () => {
  const [score, setScore] = useState(0)
  const [random, setRandom] = useState([])
  const [clicked, setClicked] = useState([])
  const [highScore, setHighScore]= useState(0)
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    const shuffleCards = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    };
    setRandom([...shuffleCards(images)]);
  }, [clicked]);

  useEffect(()=> {
    if(score > JSON.parse(localStorage.getItem('highScore'))){
      setHighScore(score)
    }

    if(score === 0){
       localStorage.setItem("highScore", JSON.stringify(highScore))
    }
  },[score])

  const handleClick = (e)=> {
    if (!clicked.includes(e.target.src)){
      setClicked([...clicked, e.target.src])
      setScore(prev => prev+1)
    }else{
      // setScore(0)
      setGameOver(prev => !prev)
    }
  }

  const newGame =()=> {
    setGameOver (prev => !prev)
    setClicked([])
    setScore(0)
  }

  return (
    <div>
        <div className="game-container">
      <div>
        <h1>Amphibia Memory Game</h1>
        <p>
          Get points by clicking on an image but don't click on any more than
          once
        </p>
      </div>
      <div>
        <p>Score: {score}</p>
        <p>Best Score: {JSON.parse(localStorage.getItem("highScore"))}</p>
      </div>
      </div>
      <div>
        {!gameOver ? <CardContainer random={random} clickFunc={handleClick} /> : <h2 id='glow1' onClick={newGame}>Click Here To Start Over</h2>}
      </div>
    </div>
  );
};
export default MemoryGame;
