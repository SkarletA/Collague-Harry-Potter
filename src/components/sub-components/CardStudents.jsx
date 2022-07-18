import React, {useState} from "react";
import { connect} from "react-redux";
import { setFavorite } from "../../actions";
//import { getFavorite } from "../../api/requestFavorite";
import '../../styles/styles.scss';

const CardStudents = ({
  name,
  house,
  image,
  hogwartsStudent,
  alive,
  favorite,
  id,
  student
}) => {

  // const [tableFavorite, setTableFavorite]= useState([]);

  const handleOnFavorite = async () => {

    setFavorite({ ...student, favorite:true });
    console.log(setFavorite({ student }));
    const data = {
      favorite: favorite ? false : true
    }


    const getFavorite = () => {
      const request = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }
      const test = fetch("http://localhost:3001/favorites", request)
        .then((response) => response.json())
        .then(data => data)
        .catch((err) => console.log(err));
      return test;
    };
    const favoriteList = await getFavorite();
    console.log(favoriteList, favorite);

    if (favorite) {
      const deleteRequest = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      }
      fetch(`http://localhost:3001/favorites/${id}`, deleteRequest)
        .then((response) => response.json())
        .catch((err) => console.log(err));

        const requestOption = {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
        fetch(`http://localhost:3001/students/${id}`, requestOption)
          .then((response) => response.json())
          .catch((err) => console.log(err));

    } else {
      if (favoriteList.length < 5) {
        const postRequest= {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(student),
        }
        fetch("http://localhost:3001/favorites", postRequest)
          .then((response) => response.json())
          .catch((err) => console.log(err));

        const requestOption = {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
        fetch(`http://localhost:3001/students/${id}`, requestOption)
          .then((response) => response.json())
          .catch((err) => console.log(err));
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

  console.log(favorite);

  return (
  <section className={live}>
    <div className={`defaultColor ${houseColor[house]}`}>
      <img className="image_students" src={image} alt="" />
    </div>
    { alive
      ?
        (<p className="cardStudents__name_students">{name}</p>)
      :
        (<p className="cardStudents__name_students">+ {name}</p>)
    }
    <div className="info_students">
      <div className="info">
        <p className="info_students__live_status">{alive ? "VIVO": "FINADO"}</p>
        {hogwartsStudent ? <p className="info_students__grado">ESTUDIANTE</p>: ''}
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