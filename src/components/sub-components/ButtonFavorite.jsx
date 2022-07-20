import React, {useState} from "react";
import { getFavorite } from "../../api/requestFavorite";
//import { updateStaffs } from "../../api/requestStaffs";

//import { updateFavorite } from "../../api/requestCharacters";
import { ModalDelete } from "./ModalDelete";
//import { setFavorite } from "../../actions";
// import { useNavigate } from "react-router-dom";
//import IconFavorite from "https://svgshare.com/i/jAg.svg";


const ButtonFavorite = ({ refreshData, setRefreshData }) => {
  const [menu, setMenu] = useState(false);
  const [listFavorite, setListFavorite] = useState([]);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [current, setCurrent] = useState('');

  const refresh = () => setRefreshData(!refreshData);

  const handleClickFavorite = async () => {
    setMenu(!menu);
    const getListFavorite = await getFavorite();
    setListFavorite(getListFavorite);
    refresh();
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
                    <button className="btn_delete" type="submit" onClick={() => {
                      setCurrent(personFavorite);
                      setOpenModalDelete(!openModalDelete);
                    }}>
                      <img src="https://svgshare.com/i/jC8.svg" alt="icon_delete" />
                    </button>
                  </div>
                </li>
            </ul>
        )
      })}
      </nav>
      <ModalDelete
        openModalDelete={openModalDelete}
        closeModalDelete={() => setOpenModalDelete(false)}
        current={current}
        refresh={refreshData}
        setRefresh={setRefreshData}
      />
    </div>

  );
}

export default ButtonFavorite;