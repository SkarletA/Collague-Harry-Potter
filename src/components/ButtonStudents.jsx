import React from "react";
import StudentsList from "./sub-components/StudentsList";



const ButtonStudents = ({ students }) => {

  const handleClick = () => {
    return (<StudentsList students={students} />);
  };

  return(
    <section className="btn_students_container">
      <button onClick={handleClick} className="btn_students" type="submit">ESTUDIANTES</button>
    </section>
  );
}

export default ButtonStudents;