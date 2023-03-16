import React from "react";

export default function Details(props) {
  return (
    <div>
      <p className="cardInfo_number">{props.numberDetails}</p>
      <p>{props.emailDatails}</p>
    </div>
  );
}
