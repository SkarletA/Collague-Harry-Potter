import React from "react";
import { connect} from "react-redux";
import { setFavorite } from "../../actions";
import { deleteFavorite, getFavorite, postFavorite } from "../../api/requestFavorite";
import { updateFavorite } from "../../api/requestCharacters";

import '../../styles/styles.scss';



const CardCharacters = (
    {
      name,
      house,
      image,
      hogwartsStaff,
      alive,
      favorite,
      id,
      character,
      refreshData,
      setRefreshData,
      gender,
      eyeColour,
      hairColour,
      dateOfBirth
    }) => {
      const refresh = () => setRefreshData(!refreshData);
    const handleOnFavorite = async () => {
      setFavorite({ ...character, favorite:true });
      console.log(setFavorite({ character }));
      const data = {
        favorite: favorite ? false : true
      }
      console.log(character);
      const favoriteList = await getFavorite();
      console.log(favoriteList, favorite);
      if (favorite) {
        await deleteFavorite(id);
        await updateFavorite(data, id);
        refresh();
      } else {
        if (favoriteList.length < 5) {
          await postFavorite(character);
          await updateFavorite(data, id);
          refresh();
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
    const live = alive ? 'cardCharacters' : 'cardCharactersDead'
    return (
    <section className={live}>
      <div className={`defaultColor ${houseColor[house]}`}>
        <img className="image_character" src={image} alt="" />
      </div>
      { alive
        ?
          (<p className="cardCharacters__name_character">{name}</p>)
        :
          (<p className="cardCharactersDead__name_character__finado">+ {name}</p>)
      }
      <div className="info_characters">
        <div className="info">
          <div className="info__general">
            <span>Cumpleaños: {dateOfBirth} </span>
            <span>Género: {gender} </span>
            <span>Color de ojos: {eyeColour} </span>
            <span>Color de pelo: {hairColour} </span>
          </div>
          <div className={`info_characters__general__${alive ? "VIVO": "FINADO"}`}>
            <p className="info_characters__live_status">{alive ? "VIVO": "FINADO"}</p>
            <span className="split">/</span>
            {hogwartsStaff ?
              (<p className="info_characters__grado">STAFF</p>)
              :
              (<p className="info_students__grado">ESTUDIANTE</p>)
            }
          </div>
        </div>
        <button className={`btn_favorite_characters__${live}`} onClick={handleOnFavorite}>
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
export default connect(null, mapDispatchToProps)(CardCharacters);
//export default CardCharacters;