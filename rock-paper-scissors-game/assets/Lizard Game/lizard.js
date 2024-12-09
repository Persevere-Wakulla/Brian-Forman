const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const spock = document.getElementById('spock');
const lizard = document.getElementById('lizard')
const selectionBoard = document.getElementById('selection-board');
const playingBoard = document.getElementById('playing-board');
const userSelectedElem = document.getElementById('user-selection');
const computerSelectedElem = document.getElementById('computer-selection');
const playAgain = document.getElementById('play_again');
const playerPick = document.getElementById('player_pick');
const computerPick = document.getElementById('computer_pick');
const yw = document.getElementById('yw');
const yl = document.getElementById('yl');
const pentagon = document.getElementById('bg-pentagon')
const score = document.getElementById('score');
let numOne = 0;
score.textContent = numOne;

const selectionPieces = {
    rock: {
        borderColor: 'red',
        class: 'rock',
        src: './images/icon-rock.svg'
    },
    paper: {
        src: './images/icon-paper.svg',
        borderColor: 'blue',
        class: 'paper'

    },
    scissors: {
        src: './images/icon-scissors.svg',
        class: 'scissors',
        borderColor: 'orange'
    },
    spock: {
        class: 'spock',
        borderColor: 'cyan',
        src: './images/icon-spock.svg'
    },
    lizard: {
        class: 'lizard',
        borderColor: 'purple',
        src: './images/icon-lizard.svg'
    }

}

const selectionImages = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
const gamePieces = document.getElementsByClassName('game-piece');
const retrieveComputerSelection = () => {
    const randomNum = Math.floor(Math.random() * 5);

    return selectionImages[randomNum];
}


    for (let i = 0; i < gamePieces.length; i++) {
        gamePieces[i].addEventListener('click', (ev) => {
        const userSelection = gamePieces[i].id;
        selectionBoard.style.display = 'none';
        playingBoard.style.display = 'flex';
        userSelectedElem.firstElementChild.src = selectionPieces[userSelection].src;
        userSelectedElem.classList.add(selectionPieces[userSelection].class);

        //Play Again
            const playAgain = document.getElementById('play_again');
            playAgain.addEventListener('click', () => {
            playingBoard.style.display = 'none';
            selectionBoard.style.display = 'block';
            userSelectedElem.classList.remove('rock', 'paper', 'scissors', 'spock', 'lizard');
            document.getElementById('winning-status').style.visibility = 'hidden';

        })

        const computerSelection = retrieveComputerSelection()
        computerSelectedElem.firstElementChild.src = selectionPieces[computerSelection].src;
        computerSelectedElem.style.borderColor = selectionPieces[computerSelection].borderColor;
        computerSelectedElem.classList.remove('rock', 'paper', 'scissors', 'spock', 'lizard');
        computerSelectedElem.classList.add(selectionPieces[computerSelection].class);

        whoTheWinner();
    })
}

function generateStatusText(msg) {
    document.getElementById('winning-status').style.visibility = 'visible';
    document.getElementById('winning-status').textContent = msg;
}

function whoTheWinner() {
    if (userSelectedElem.classList[1] === 'paper' && computerSelectedElem.classList[1] === 'rock') {
        generateStatusText('Winner');
        numOne++;
        score.textContent = numOne;
        return;
    } else if (userSelectedElem.classList[1] === 'rock' && computerSelectedElem.classList[1] === 'scissors') {
        generateStatusText('Winner');
        numOne++;
        score.textContent = numOne;
        return;
    } else if (userSelectedElem.classList[1] === 'scissors' && computerSelectedElem.classList[1] === 'paper') {
        generateStatusText('Winner');
        numOne++;
        score.textContent = numOne;
        return;
    } else if (userSelectedElem.classList[1] === 'lizard' && computerSelectedElem.classList[1] === 'spock'){
        generateStatusText('Winner');
        numOne++;
        score.textContent = numOne;
        return
    } else if (userSelectedElem.classList[1] === 'spock' && computerSelectedElem.classList[1] === 'scissors'){
        generateStatusText('Winner');
        numOne++;
        score.textContent = numOne;
        return
    } else if (userSelectedElem.classList[1] === 'rock' && computerSelectedElem.classList[1] === 'lizard'){
        generateStatusText('Winner');
        numOne++;
        score.textContent = numOne;
        return
    } else if (userSelectedElem.classList[1] === 'paper' && computerSelectedElem.classList[1] === 'spock'){
        generateStatusText('Winner');
        numOne++;
        score.textContent = numOne;
        return
    } else if (userSelectedElem.classList[1] === 'scissors' && computerSelectedElem.classList[1] === 'lizard'){
        generateStatusText('Winner');
        numOne++
        score.textContent = numOne;
        return
    } else if (userSelectedElem.classList[1] === 'spock' && computerSelectedElem.classList[1] === 'rock'){
        generateStatusText('Winner');
        numOne++;
        score.textContent = numOne;
        return;
    } else if (userSelectedElem.classList[1] === 'lizard' && computerSelectedElem.classList[1] === 'paper'){
        generateStatusText('Winner');
        numOne++;
        score.textContent = numOne;
        return
    } else if (computerSelectedElem.classList[1] === 'rock' && userSelectedElem.classList[1] === 'scissors') {
        generateStatusText('Loser');
        numOne = 0;
        score.textContent = numOne;
        return;
    } else if (computerSelectedElem.classList[1] === 'scissors' && userSelectedElem.classList[1] === 'paper') {
        generateStatusText('Loser');
        numOne = 0;
        score.textContent = numOne;
        return;
    } else if (computerSelectedElem.classList[1] === 'paper' && userSelectedElem.classList[1] === 'rock') {
        generateStatusText('Loser');
        numOne = 0;
        score.textContent = numOne;
        return;
    } else if (computerSelectedElem.classList[1] === 'lizard' && userSelectedElem.classList[1] === 'paper') {
        generateStatusText('Loser');
        numOne = 0;
        score.textContent = numOne;
        return;
    } else if (computerSelectedElem.classList[1] === 'spock' && userSelectedElem.classList[1] === 'rock'){
        generateStatusText('Loser');
        numOne = 0;
        score.textContent = numOne;
        return;
    } else if (computerSelectedElem.classList[1] === 'scissors' && userSelectedElem.classList[1] === 'lizard'){
        generateStatusText('Loser');
        numOne = 0;
        score.textContent = numOne;
        return;
    } else if (computerSelectedElem.classList[1] === 'paper' && userSelectedElem.classList[1] === 'spock'){
        generateStatusText('Loser');
        numOne = 0;
        score.textContent = numOne;
        return;
    } else if (computerSelectedElem.classList[1] === 'rock' && userSelectedElem.classList[1] === 'lizard'){
        generateStatusText('Loser');
        numOne = 0;
        score.textContent = numOne;
        return;
    } else if (computerSelectedElem.classList[1] === 'spock' && userSelectedElem.classList[1] === 'scissors'){
        generateStatusText('Loser');
        numOne = 0;
        score.textContent = numOne;
        return;
    } else if (computerSelectedElem.classList[1] === 'lizard' && userSelectedElem.classList[1] === 'spock'){
        generateStatusText('Loser');
        numOne = 0;
        score.textContent = numOne;
        return;
    }
    else {
        generateStatusText('Its a tie');
    }


}