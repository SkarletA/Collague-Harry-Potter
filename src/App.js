/* eslint-disable jsx-a11y/img-redundant-alt */
import ButtonStaffs from "./components/ButtonStaffs";
import ButtonStudents from "./components/ButtonStudents";
import NavBar from "./components/NavBar";
import './styles/styles.scss';


function App() {
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
      <NavBar />
    </section>
  );
}

export default App;
