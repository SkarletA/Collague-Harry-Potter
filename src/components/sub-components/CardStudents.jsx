import React from "react";
import { useDispatch } from "react-redux";
import { setFavorite } from "../../actions";
import '../../styles/styles.scss';

const CardStudents = ({
  name,
  house,
  image,
  hogwartsStudent,
  alive,
  favorite,
  id
}) => {
  const dispatch = useDispatch();
  const handleOnFavorite = () => {
    dispatch(setFavorite({studentId: id}));
    const data = {
      favorite: true,
    }
    console.log(data);
    const requestOption = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }
    fetch(`http://localhost:3001/students/${id}`, requestOption)
      .then((response) => response.json())
      .catch((err) => console.log(err));


  }
  const houseColor = {
    'Gryffindor': 'gryCssColor',
    'Slytherin': 'slyCssColor',
    'Ravenclaw': 'ravCssColor',
    'Hufflepuff': 'hufCssColor',
    '' : 'noneCssColor',
  }
  const live = alive ? 'cardStudents' : 'cardStudentsDead';

  console.log(favorite);

  return (
  <section className={live}>
    <div className={`defaultColor ${houseColor[house]}`}>
      <img className="image_students" src={image} alt="" />
    </div>
    <p className="cardStudents__name_students">{name}</p>
    <div className="info_students">
      <div className="info">
        <p className="info_students__live_status">{alive ? "VIVO": "FINADO"}</p>
        {hogwartsStudent ? <p className="info_students__grado">ESTUDIANTE</p>: ''}
      </div>
      <button className="btn_favorite_students" onClick={handleOnFavorite}>
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
export default CardStudents;