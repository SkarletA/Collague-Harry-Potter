import React from "react";
import { connect} from "react-redux";
import { deleteFavorite, getFavorite, postFavorite } from "../../api/requestFavorite";
import { setFavorite } from "../../actions";
import '../../styles/styles.scss';
import { updateStaffs } from "../../api/requestStaffs";

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
    setRefreshData
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
      await updateStaffs(data, id);
      refresh();
    } else {
      if (favoriteList.length < 5) {
        await postFavorite(staff);
        await updateStaffs(data, id);
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