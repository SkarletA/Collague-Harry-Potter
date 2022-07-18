import React from "react";
import { useNavigate } from "react-router-dom";
//import StudentsList from "./sub-components/StudentsList";

const ButtonStudents = () => {
  const navigate = useNavigate();

  const handleClickStudents = () => {
    return (navigate('/students'));
  };

  return(
    <section className="btn_students_container">
      <button onClick={handleClickStudents} className="btn_students" type="submit">ESTUDIANTES</button>
    </section>
  );
}

export default ButtonStudents;