import React from "react";
import { connect} from "react-redux";
import { setFavorite } from "../../actions";
import { deleteFavorite, getFavorite, postFavorite } from "../../api/requestFavorite";
import { updateStudents } from "../../api/requestStudents";
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
  setRefresh
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
      await updateStudents(data, id);
      refreshData();

    } else {
      if (favoriteList.length < 5) {
        await postFavorite(student);
        await updateStudents(data, id);
        refreshData();
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