import React from "react";
import { connect} from "react-redux";
import { setFavorite } from "../../actions";
import '../../styles/styles.scss';

const CardStaffs = (
  {
    name,
    house,
    image,
    hogwartsStaff,
    alive,
    favorite,
    id,
    staff
  }) => {
  const handleOnFavorite = () => {
    setFavorite({ ...staff, favorite:true });
    console.log(setFavorite({ staff }));
    const data = {
      favorite: true
    }
    console.log(data);
    const requestOption = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }
    fetch(`http://localhost:3001/staffs/${id}`, requestOption)
      .then((response) => response.json())
      .catch((err) => console.log(err));

  }
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
    <div className={`defaultColor ${houseColor[house]}`}>
      <img className="image_staffs" src={image} alt="" />
    </div>
    { alive
      ?
        (<p className="cardStaffs__name_staffs">{name}</p>)
      :
        (<p className="cardStaffs__name_staffs">+ {name}</p>)
    }
    <div className="info_staffs">
      <div className="info">
        <p className="info_staffs__live_status">{alive ? "VIVO": "FINADO"}</p>
        {hogwartsStaff ? <p className="info_staffs__grado">STAFF</p>: ''}
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