import React from "react";
import ButtonAdd from "./sub-components/ButtonAdd";
import ButtonFavorite from "./sub-components/ButtonFavorite";


const NavBar = () => {
  return (
    <nav className="navbar_container">
      <ButtonFavorite />
      <ButtonAdd />
    </nav>
  );
}

export default NavBar;