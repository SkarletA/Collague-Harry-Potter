
//import { useSelector, useDispatch } from "react-redux";
//import { setStudents } from "./actions";
//import { getStudents } from "./api";
import ButtonStaffs from "./ButtonStaffs";
import ButtonStudents from "./ButtonStudents";
import NavBar from "./NavBar";
import '../styles/styles.scss';
import { Outlet } from "react-router-dom";
import CharactersList from "./CharacterList";
import React, { useState } from "react";

const Home = () => {
  const [ isActive, setIsActive] = useState(
    {
      activeStaff: false, activeStudent: false
    });
  return (
    <section className="app">
      <NavBar />
      <div className="app__image-principal">
        <img src='https://svgshare.com/i/jAf.svg' alt='title-harry-potter' />
        <p className="app__select-filter">Selecciona tu filtro</p>
      </div>
      <section className="app__btns">
        <ButtonStudents isActive={isActive} setIsActive={setIsActive} />
        <ButtonStaffs isActive={isActive} setIsActive={setIsActive} />
      </section>
      {
      isActive.activeStaff ===false && isActive.activeStudent === false ?
        <CharactersList />
      :
        <Outlet />}
    </section>
  );
}

export default Home;