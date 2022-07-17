import React from "react";
//import IconFavorite from "https://svgshare.com/i/jAg.svg";


const ButtonFavorite = () => {
  return (
    <button className="btn_favorite" type="submit">
      Favorito
      <img className="btn_favorite__icon" src="https://svgshare.com/i/jAg.svg" alt="icon-favorite" />
    </button>
  );
}

export default ButtonFavorite;