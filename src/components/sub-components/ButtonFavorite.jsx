import React, {useState} from "react";
// import { useNavigate } from "react-router-dom";
//import IconFavorite from "https://svgshare.com/i/jAg.svg";


const ButtonFavorite = () => {
  const [menu, setMenu] = useState(false);

  const handleClickFavorite = () => {
    setMenu(!menu);
  }

  return (
    <div className="container_favorite">
      <button className="btn_favorite" onClick={handleClickFavorite} type="submit">
        <img className="btn_favorite__icon" src="https://svgshare.com/i/jAg.svg" alt="icon-favorite" />
        <p>Favorito</p>
      </button>
      <nav
        className={`listFavorite ${menu ? "isActive": ""}`}
      >
        <ul>
          <li><img src="" alt="img_person" /></li>
          <li>Harry Potter</li>
          <li>
            <button type="submit">
              <img src="https://svgshare.com/i/jC8.svg" alt="icon_delete" />
            </button>
          </li>
        </ul>
      </nav>
    </div>

  );
}

export default ButtonFavorite;