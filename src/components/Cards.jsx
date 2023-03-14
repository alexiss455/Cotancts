import React from "react";
import "../index.css";

function Cards(props) {
  return (
    <div className="cards">
      <div className="cardName">
        <h1>{props.name}</h1>
      </div>
      <div className="cardsImg">
        <img className="pic_contacts" src={props.img} alt="logo" />
      </div>
      <div className="cardInfo">
        <p className="cardInfo_number">{props.number}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
}

export default Cards;
