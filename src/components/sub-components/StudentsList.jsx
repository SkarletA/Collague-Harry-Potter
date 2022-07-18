import { useEffect, useState } from "react";
import CardStudents from "./CardStudents";

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const requestOption = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }
    fetch("http://localhost:3001/students", requestOption)
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);
  return (
    <div className="StudentsList">
      {students.map((student) => {
        return (
          <CardStudents
            name={student.name}
            key={student.name}
            image={student.image}
            house={student.house}
            alive={student.alive}
            hogwartsStudent={student.hogwartsStudent}
          />
        )
      })}
    </div>
  )

};
StudentsList.defaultProps = {
  pokemons: Array(10).fill(''),
}
export default StudentsList;