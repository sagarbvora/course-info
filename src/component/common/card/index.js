import React from "react";

const Cards = ({ details }) => {
  return (
    <div class="card">
      <img class="card-img-top" src={details?.imageUrl} alt="Card image cap" />
      <div class="card-body">
        <h3 class="card-text">{details?.name}</h3>
        <p>{details?.info}</p>
      </div>
    </div>
  );
};

export default Cards;
