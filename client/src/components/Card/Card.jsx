import React, { useEffect } from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";
const Card = ({ name, img, rating, id, metacritic, plataforms }) => {
  // const plataformsString = plataforms.map((e) => e.paltaform.name).joing(" ");
  // useEffect(() => {
  //   console.log(plataforms);
  // }, [plataforms]);
  return (
    <div className="card" key={id}>
      <NavLink
        to={`/single-game?id=${id}&name=${name}&img=${img}&rating=${rating}&metacritic=${metacritic}`}
      >
        <h3>{name}</h3>
        <img src={img} alt="game" />
        <h4>Rating: {rating}</h4>
        <h4>Metacritic: {metacritic}</h4>

        <h4>Plataforms: {}</h4>
      </NavLink>
    </div>
  );
};

export default Card;
