import React from 'react';
import './App.css';

const FlipCard = ({ frontContent, backContent }) => {
  return (
    <div className="cardContainer">
      <div className="card">
        <div className="front">
          {frontContent}
          
        </div>
        <div className="back">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
