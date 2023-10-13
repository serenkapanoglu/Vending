import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Chips.css";

function Chips() {
  const [bagsEaten, setBagsEaten] = useState(0);

  const eatBag = () => {
    setBagsEaten(bagsEaten + 1);
  };

  const generateImages = () => {
    const images = [];
    for (let i = 0; i < bagsEaten; i++) {
      images.push(
        <div key={i} className="background-image">
          <img
            src="https://media.giphy.com/media/pJhT0A3nsQRU3XgMhB/giphy.gif" 
            alt={`Background ${i}`}
            
          />
        </div>
      );
    }
    return images;
  };

  return (
    <div className="chips-container">
      <h3>BAGS EATEN: {bagsEaten}</h3>
      <button onClick={eatBag}>NOM NOM NOM</button>
      <div className="center2">
        <Link to="/">GO BACK</Link>
      </div>
      {generateImages()}
    </div>
  );
}

export default Chips;
