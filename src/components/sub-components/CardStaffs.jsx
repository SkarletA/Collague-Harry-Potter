import React from "react";
import '../../styles/styles.scss';

const CardStaffs = ({ name, house, image, hogwartsStaff, alive }) => {
  const houseColor = {
    'Gryffindor': 'gryCssColor',
    'Slytherin': 'slyCssColor',
    'Ravenclaw': 'ravCssColor',
    'Hufflepuff': 'hufCssColor',
    '': 'noneCssColor',
  }
  const live = alive ? 'cardStaffs' : 'cardStaffsDead'

  return (
  <section className={live}>
    <div className={houseColor[house]}>
      <img className="image_staffs" src={image} alt="" />
    </div>
    <p className="cardStaffs__name_staffs">{name}</p>
    <div className="info_staffs">
      <div className="info">
        <p className="info_staffs__live_status">{alive ? "VIVO": "FINADO"}</p>
        {hogwartsStaff ? <p className="info_staffs__grado">STAFF</p>: ''}
      </div>
      <img className="icon_favorite" src="https://svgshare.com/i/jBa.svg" alt="icon-favorito-transparent" />
    </div>
  </section>
)};
export default CardStaffs;