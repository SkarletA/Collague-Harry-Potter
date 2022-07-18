import React from "react";
import '../../styles/styles.scss';

const CardStudents = ({ name, house, image, hogwartsStudent, alive }) => {
  const houseColor = {
    'Gryffindor': 'gryCssColor',
    'Slytherin': 'slyCssColor',
    'Ravenclaw': 'ravCssColor',
    'Hufflepuff': 'hufCssColor',
  }
  const live = alive ? 'cardStudents' : 'cardStudentsDead'

  return (
  <section className={live}>
    <div className={houseColor[house]}>
      <img className="image_students" src={image} alt="" />
    </div>
    <p className="cardStudents__name_students">{name}</p>
    <div className="info_students">
      <div className="info">
        <p className="info_students__live_status">{alive ? "VIVO": "FINADO"}</p>
        {hogwartsStudent ? <p className="info_students__grado">ESTUDIANTE</p>: ''}
      </div>
      <img className="icon_favorite" src="https://svgshare.com/i/jBa.svg" alt="icon-favorito-transparent" />
    </div>
  </section>
)};
export default CardStudents;