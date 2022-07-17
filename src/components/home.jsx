
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
    <section className="App">
      <div className="App__image-principal">
        <img src='https://svgshare.com/i/jAf.svg' alt='title-harry-potter' />
        <p className="App__select-filter">Selecciona tu filtro</p>
      </div>
      <section className="App__btns">
        <ButtonStudents />
        <ButtonStaffs />
      </section>
      <Outlet />
      <NavBar />
    </section>
  );
}

export default Home;