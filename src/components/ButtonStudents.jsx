import React from "react";
import { useNavigate } from "react-router-dom";
//import StudentsList from "./sub-components/StudentsList";

const ButtonStudents = ({ isActive, setIsActive }) => {
  const navigate = useNavigate();

  const handleClickStudents = () => {
    navigate('/students')

    if (isActive.activeStudent) {
      setIsActive(isActive.activeStudent = false);
    } else {
      setIsActive(isActive = {
        activeStaff: false,
        activeStudent: true
      })
    }
    ;
  };

  return(
    <section className="btn_students_container">
      <button onClick={handleClickStudents} className="btn_students" type="submit">ESTUDIANTES</button>
    </section>
  );
}

export default ButtonStudents;