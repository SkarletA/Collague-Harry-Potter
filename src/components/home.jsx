
//import { useSelector, useDispatch } from "react-redux";
//import { setStudents } from "./actions";
//import { getStudents } from "./api";
import ButtonStaffs from "./ButtonStaffs";
import ButtonStudents from "./ButtonStudents";
import NavBar from "./NavBar";
import '../styles/styles.scss';
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <section className="app">
      <NavBar />
      <div className="app__image-principal">
        <img src='https://svgshare.com/i/jAf.svg' alt='title-harry-potter' />
        <p className="app__select-filter">Selecciona tu filtro</p>
      </div>
      <section className="app__btns">
        <ButtonStudents />
        <ButtonStaffs />
      </section>
      <Outlet />
    </section>
  );
}

export default Home;