import React, {useState} from "react";
import { deleteFavorite, getFavorite } from "../../api/requestFavorite";
//import { updateStaffs } from "../../api/requestStaffs";

import { updateFavorite } from "../../api/requestCharacters";
//import { setFavorite } from "../../actions";
// import { useNavigate } from "react-router-dom";
//import IconFavorite from "https://svgshare.com/i/jAg.svg";


const ButtonFavorite = ({ refreshData, setRefreshData }) => {
  const [menu, setMenu] = useState(false);
  const [listFavorite, setListFavorite] = useState([]);

  const refresh = () => setRefreshData(!refreshData);

  const handleClickFavorite = async () => {
    setMenu(!menu);
    const getListFavorite = await getFavorite();
    setListFavorite(getListFavorite);
    refresh();
    console.log(getListFavorite);
  }

  const handleClickDelete = async(id, data) => {
    await deleteFavorite(id);
    await updateFavorite(data, id);
    refresh();
    // if (data.hogwartsStaff) {
    //   await updateFavorite(data, id);
    //   refresh();
    // } else {
    //   await updateFavorite(data, id);
    //   refresh();
    // }
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
          {listFavorite.map((personFavorite) => {
          return (
            <ul key={personFavorite.id}>
                <li >
                  <div><img className="img_person" src={personFavorite.image} alt="img_person" />
                    <span>{personFavorite.name}</span>
                    <button className="btn_delete" type="submit" onClick={() => handleClickDelete(personFavorite.id, personFavorite)}>
                      <img src="https://svgshare.com/i/jC8.svg" alt="icon_delete" />
                    </button>
                  </div>
                </li>
            </ul>
        )
      })}
      </nav>
    </div>

  );
}

export default ButtonFavorite;