import React from "react";
import { useLocation } from "react-router-dom";
import "./singleGame.css";
const SingleGame = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const name = queryParams.get("name");
  const img = queryParams.get("img");
  const rating = queryParams.get("rating");
  const metacritic = queryParams.get("metacritic");

  return (
    <div key={id} className="single-game-container">
      <img src={img ? img : ""} alt="game-logo" className="single-game-image" />
      <div className="single-game-info">
        <h1>Name: {name}</h1>
        <h3>Rating: {rating}</h3>
        <h3>Metacritic: {metacritic}</h3>
      </div>
    </div>
  );
};

export default SingleGame;
