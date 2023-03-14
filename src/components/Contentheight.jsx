import React from "react";
import "../index.css";
import Cards from "./Cards";
import Cotancts from "../contacts"



export default function contentHeight() {
    console.log(Cotancts)
  return (
    <div>
      <div className="responsive_with">
        <div className="container_cards">
          <h1>Contacts</h1>
          <Cards
            name = {Cotancts[0].name}
            img = {Cotancts[0].img}
            number = {Cotancts[0].number}
            email = {Cotancts[0].email}
          />
          <Cards
            name = {Cotancts[1].name}
            img = {Cotancts[1].img}
            number = {Cotancts[1].number}
            email = {Cotancts[1].email}
          />
          <Cards
            name = {Cotancts[2].name}
            img = {Cotancts[2].img}
            number = {Cotancts[2].number}
            email = {Cotancts[2].email}
          />
        </div>
      </div>
    </div>
  );
}
