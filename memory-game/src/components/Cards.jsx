const Card = ({image }) => {
    const {imagePic,id} = image
  return (
    <div className="card-container">
      <img
      id={id} 
      className="cards"
      src={imagePic} 
      alt="card" />
    </div>
  );
};
export default Card;
