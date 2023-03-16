import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Cards(props) {
  return (
    <div className="cards">
      <div className="cardName">
        <h1>{props.name}</h1>
      </div>

      <div className="cardsImg">
      <Avatar 
        imgAvatarFunction = {props.img}
      />
      </div>
      <div className="cardInfo">
        <Details 
          numberDetails = {props.number}
          emailDatails = {props.email}
        />
      </div>

    </div>
  );
}

export default Cards;
