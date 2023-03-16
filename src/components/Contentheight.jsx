import React from "react";
import "../index.css";
import Cards from "./Cards";
import Cotancts from "../contacts";
import Avatar from "./Avatar";

function createdCards(contactsCard) {
  return(

    <Cards 
    key={contactsCard.id}
    name={contactsCard.name}
    img={contactsCard.img}
    number={contactsCard.number}
    email={contactsCard.email}
     />

  );
}

export default function contentHeight() {
  const contactCardsArray = Cotancts.map(createdCards);
  console.log(contactCardsArray);
  return (
    <div className="responsive_with">
      <div className="container_cards">
        <h1>Contacts</h1>
        <div className="avatar">
          <Avatar imgAvatarFunction="https://www.looper.com/img/gallery/50-best-episodes-of-one-piece-ranked/intro-1666286836.jpg" />
        </div>

        {contactCardsArray}

      </div>
    </div>
  );  
  
}
