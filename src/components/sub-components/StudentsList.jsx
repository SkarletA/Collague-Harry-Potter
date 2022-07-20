import { useEffect, useState } from "react";
import CardStudents from "./CardStudents";

const StudentsList = () => {
  const [students, setStudents] = useState([]);

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const requestOption = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }
    fetch("http://localhost:3001/students", requestOption)
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, [refresh]);

  return (
    <div className="studentsList">
      {students.map((student) => {
        return (
          <CardStudents
            name={student.name}
            key={student.name}
            image={student.image}
            house={student.house}
            alive={student.alive}
            hogwartsStudent={student.hogwartsStudent}
            id={student.id}
            favorite={student.favorite}
            refresh={refresh}
            setRefresh={setRefresh}
            student={student}
            gender={student.gender}
            eyeColour={student.eyeColour}
            hairColour={student.hairColour}
            dateOfBirth={student.dateOfBirth}
          />
        )
      })}
    </div>
  )

};
StudentsList.defaultProps = {
  students: Array(10).fill(''),
}
export default StudentsList;