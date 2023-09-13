import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src="./console-controller.svg" alt="logo" />
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink>About Us</NavLink>
        </li>
        <li>
          <NavLink to={"/login"}>Log in</NavLink>
        </li>
        <li>
          <NavLink to={"shopping-cart"}>Shopping Cart</NavLink>
        </li>
        <li>My Account</li>
      </ul>
      <img
        id="menu-mobile-logo"
        src={
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_108564673_hamburger-menu-web-icon-white-icon-with-shadow-on-transparent-background.html&psig=AOvVaw28lScWemfMgD2R52kPzWA6&ust=1693954910755000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMCCtveHkoEDFQAAAAAdAAAAABAE"
        }
        alt="menu-mobile-logo"
      />
    </header>
  );
};

export default Header;
