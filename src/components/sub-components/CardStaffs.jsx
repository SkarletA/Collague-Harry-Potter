import React from "react";
import { connect} from "react-redux";
import { deleteFavorite, getFavorite, postFavorite } from "../../api/requestFavorite";
import { setFavorite } from "../../actions";
import '../../styles/styles.scss';
import { updateFavorite } from "../../api/requestCharacters";

const CardStaffs = (
  {
    name,
    house,
    image,
    hogwartsStaff,
    alive,
    favorite,
    id,
    staff,
    refreshData,
    setRefreshData,
    gender,
    eyeColour,
    hairColour,
    dateOfBirth
  }) => {

    const refresh = () => setRefreshData(!refreshData);

  const handleOnFavorite = async () => {
    setFavorite({ ...staff, favorite:true });
    console.log(setFavorite({ staff }));
    const data = {
      favorite: favorite ? false : true
    }

    console.log(staff);
    const favoriteList = await getFavorite();
    console.log(favoriteList, favorite);


    if (favorite) {
      await deleteFavorite(id);
      await updateFavorite(data, id);
      refresh();
    } else {
      if (favoriteList.length < 5) {
        await postFavorite(staff);
        await updateFavorite(data, id);
        refresh();
      } else {
        window.alert("Lista llena, por favor elimine un personaje de la lista de favoritos!!");
      }
    }

  }
  const houseColor = {
    'Gryffindor': 'gryCssColor',
    'Slytherin': 'slyCssColor',
    'Ravenclaw': 'ravCssColor',
    'Hufflepuff': 'hufCssColor',
    '': 'noneCssColor',
  }
  const live = alive ? 'cardStaffs' : 'cardStaffsDead';
  const imageDefault = {
    "female": "https://pottertar.framiq.com/assets/examples/pottertar01.png",
    "male": "https://cdn-icons-png.flaticon.com/512/1600/1600953.png"
  }

  return (
  <section className={live}>
    <div className={`defaultColor ${houseColor[house]}`}>
      {image ?
        <img className="image_staffs" src={image} alt="character" />
      : <img className="image_staffs" src={imageDefault[gender]} alt="character" />
      }
    </div>
    { alive
      ?
        (<p className="cardStaffs__name_staffs">{name}</p>)
      :
        (<p className="cardStaffsDead__name_staffs__finado">+ {name}</p>)
    }
    <div className="info_staffs">
      <div className="info">
        <div className="info__general">
          <span>Cumplea??os: {dateOfBirth} </span>
          <span>G??nero: {gender} </span>
          <span>Color de ojos: {eyeColour} </span>
          <span>Color de pelo: {hairColour} </span>
        </div>
        <div className={`info_staffs__general__${alive ? "VIVO": "FINADO"}`}>
          <p className="info_staffs__live_status">{alive ? "VIVO": "FINADO"}</p>
          <span className="split">/</span>
          {hogwartsStaff ? <p className="info_staffs__grado">STAFF</p>: ''}
        </div>
      </div>
      <button className={`btn_favorite_staffs__${live}`} onClick={handleOnFavorite}>
        { favorite
          ?
            (<img className="icon_favorite" src="https://svgshare.com/i/jBj.svg" alt="icon-favorito-transparent" />)
          :
            (<img className="icon_favorite" src="https://svgshare.com/i/jBa.svg" alt="icon-favorito-transparent" />)
        }
      </button>
    </div>
  </section>
)};

const mapDispatchToProps = {
  setFavorite,
}

export default connect(null, mapDispatchToProps)(CardStaffs);
//export default CardStaffs;