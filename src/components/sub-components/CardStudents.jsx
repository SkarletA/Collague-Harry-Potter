import React from "react";
import { connect} from "react-redux";
import { setFavorite } from "../../actions";
import { deleteFavorite, getFavorite, postFavorite } from "../../api/requestFavorite";
import { updateFavorite } from "../../api/requestCharacters";
import '../../styles/styles.scss';

const CardStudents = ({
  name,
  house,
  image,
  hogwartsStudent,
  alive,
  favorite,
  id,
  student,
  refresh,
  setRefresh,
  gender,
  eyeColour,
  hairColour,
  dateOfBirth
}) => {

  const refreshData = () => setRefresh(!refresh);

  const handleOnFavorite = async () => {

    setFavorite({ ...student, favorite:true });
    console.log(setFavorite({ student }));
    const data = {
      favorite: favorite ? false : true
    }
    const favoriteList = await getFavorite();
    console.log(favoriteList, favorite);


    if (favorite) {
      await deleteFavorite(id);
      await updateFavorite(data, id);
      refreshData();

    } else {
      if (favoriteList.length < 5) {
        await postFavorite(student);
        await updateFavorite(data, id);
        refreshData();
      } else {
        window.alert("Lista llena, borre una de la lista");
      }
    }
  }

  const houseColor = {
    'Gryffindor': 'gryCssColor',
    'Slytherin': 'slyCssColor',
    'Ravenclaw': 'ravCssColor',
    'Hufflepuff': 'hufCssColor',
    '' : 'noneCssColor',
  }
  const live = alive ? 'cardStudents' : 'cardStudentsDead';

  const imageDefault = {
    "female": "https://pottertar.framiq.com/assets/examples/pottertar01.png",
    "male": "https://cdn-icons-png.flaticon.com/512/1600/1600953.png"
  }


  return (
  <section className={live}>
    <div className={`defaultColor ${houseColor[house]}`}>
      {image ?
      <img className="image_students" src={image} alt="character" />
      : <img className="image_students" src={imageDefault[gender]} alt="default" /> }
    </div>
    { alive
      ?
        (<p className="cardStudents__name_students">{name}</p>)
      :
        (<p className="cardStudentsDead__name_students__finado">+ {name}</p>)
    }
    <div className="info_students">
      <div className="info">
        <div className="info__general">
          <span>Cumpleaños: {dateOfBirth} </span>
          <span>Género: {gender} </span>
          <span>Color de ojos: {eyeColour} </span>
          <span>Color de pelo: {hairColour} </span>
        </div>
        <div className={`info_students__general__${alive ? "VIVO": "FINADO"}`}>
          <p className="info_students__live_status">{alive ? "VIVO": "FINADO"}</p>
          <span className="split">/</span>
          {hogwartsStudent ? <p className="info_students__grado">ESTUDIANTE</p>: ''}
        </div>
      </div>
      <button className={`btn_favorite_students__${live}`} onClick={handleOnFavorite}>
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
//export default CardStudents;
export default connect(null, mapDispatchToProps)(CardStudents);