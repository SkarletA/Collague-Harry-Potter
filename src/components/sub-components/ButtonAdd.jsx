import React, { useState } from "react";
import ModalPerson from "./ModalPerson";
//import IconAdd from "https://svgshare.com/i/jAV.svg";


const ButtonAdd = () => {
  const [openModalPerson, setOpenModalPerson] = useState(false);

  const handleClick = () => {
    setOpenModalPerson(!openModalPerson);
  }
  return (
    <section className="btn_add_container">
      <button className="btn_add" type="submit" onClick={handleClick}>
        <img className="btn_add__iconAdd" src="https://svgshare.com/i/jAV.svg" alt="icon-add"/>
        <p>Agregar</p>
      </button>
      <ModalPerson
        openModalPerson={openModalPerson}
        closeModalPerson={() => setOpenModalPerson(!openModalPerson)}
      />
    </section>
  );
}

export default ButtonAdd;