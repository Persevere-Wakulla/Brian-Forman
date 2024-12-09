import { useEffect, useState } from "react";
import Card from "./Cards";

const CardContainer = ({ random, clickFunc }) => {
  return (
    <div onClick={clickFunc} className="game-card-container">
      {random.map((pic) => (
        <Card image={pic} key={pic.id} />
      ))}
    </div>
  );
};
export default CardContainer;
