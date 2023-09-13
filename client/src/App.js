import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/footer/Footer";
import Filter from "./components/Filter/Filter";
import Login from "./components/Login/Login";
import LogginStatus from "./components/Login/LogginStatus";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import SingleGame from "./components/SingleGame/SingleGame";
function App() {
  const [data, setData] = useState([]);
  async function fetchGames() {
    const games = await fetch("http://localhost:5000/");
    const gamesData = await games.json();
    setData(gamesData);
  }
  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home data={data} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route exact path={"/single-game"} element={<SingleGame />} />
        <Route extact path={"/login/status"} element={<LogginStatus />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
