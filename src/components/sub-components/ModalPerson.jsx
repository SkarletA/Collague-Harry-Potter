import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const ModalPerson = ({ openModalPerson, closeModalPerson }) => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [refreshData, setRefreshData] = useState(false);

  const refresh = () => setRefreshData(!refreshData);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === 'ocupation' ) {
      if (value === 'staff' ) {
        name = 'hogwartsStaff';
        value = true;
      } else {
        name = 'hogwartsStudent';
        value = true
      }
    }
    setData((preState) => ({
      ...preState,
      [name]: value,
    }));
  }
  const saveDataPerson = (localData) => {

    const aux = {...localData, id: uuidv4(), alive: true};
    if (Object.keys(aux).includes('hogwartsStaff')) {
      aux.hogwartsStudent = false
    } else {
      aux.hogwartsStaff = false
    }
    const requestOption = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify(aux),
    }
    if (localData.hogwartsStudent === true) {
      fetch("http://localhost:3001/students", requestOption)
        .then((response) => {
          response.json();
          refresh();
        })
        .then(() => navigate("/students"))
        .catch((err) => console.log(err));
    } else {
      fetch("http://localhost:3001/staffs", requestOption)
        .then((response) => {
          response.json();
          refresh();
        })
        .then(() => navigate("/staffs"))
        .catch((err) => console.log(err));
      }
    };
    console.log(data);

  const handleClick = async (e) => {
    e.preventDefault();
    saveDataPerson(data);
    closeModalPerson();
  }

  if (!openModalPerson) return null;
  return (
    <section className="container_overlay">
      <div className="popup">
        <button
          type="button"
          className={"popup__btnClose"}
          onClick={closeModalPerson}
        >
          X
        </button>
        <form className="formAddPerson">
          <p>Agrega un Personaje</p>
          <div className="formAddPerson__container">
            <div>
              <label>NOMBRE</label>
              <input
                className="formAddPerson__name"
                type="text"
                name="name"
                onChange={handleChange}
              />
            </div>
            <div>
              <label>CUMPLEAÑOS</label>
              <input
                className="formAddPerson__date"
                type="text"
                name="yearOfBirth"
                onChange={handleChange}
              />
            </div>
            <div>
              <label>COLOR DE OJOS</label>
              <input
                className="formAddPerson__eyeColor"
                type="text"
                name="eyeColour"
                onChange={handleChange}
              />
            </div>
            <div>
              <label>COLOR DE PIEL</label>
              <input
                className="formAddPerson__skinColor"
                type="text"
                name="hairColour"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="info_general">
            <div>
              <label>GÉNERO</label>
              <div className="input__genero">
                <input
                  className="input__genero__female"
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                />
                <label>Mujer</label>
                <input
                  className="input__genero__man"
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                />
                <label>Hombre</label>
              </div>
            </div>
            <div>
              <label>POSICIÓN</label>
              <div className="input__position">
                <input
                  className="input__genero__students"
                  type="radio"
                  name="ocupation"
                  value="student"
                  onChange={handleChange}
                />
                <label>Estudiante</label>
                <input
                  className="input__genero__staff"
                  type="radio"
                  name="ocupation"
                  value="staff"
                  onChange={handleChange}
                />
                <label>Staff</label>
              </div>
            </div>
          </div>
          <label>FOTOGRAFIA</label>
          <input type="file" name="image" onChange={handleChange}/>
        </form>
        <button className="save" type="submit" onClick={handleClick}>GUARDAR</button>
      </div>
    </section>
  );
};

export default ModalPerson;