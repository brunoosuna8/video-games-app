import React from "react";
import "./Home.css";
import Card from "../Card/Card";
const Home = ({ data }) => {
  return (
    <main>
      {console.log(data)}
      <h1>VideoGames Plataform</h1>
      <section className="game-list">
        {data.results &&
          data.results.map((game) => (
            <Card
              name={game.name}
              img={game.background_image}
              rating={game.rating}
              metacritic={game.metacritic}
              plataforms={game.parent_plataforms}
              id={game.id}
            />
          ))}
      </section>
    </main>
  );
};

export default Home;
