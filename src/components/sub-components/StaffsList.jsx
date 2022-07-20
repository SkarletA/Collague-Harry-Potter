import { useEffect, useState } from "react";
import CardStaffs from "./CardStaffs";

const StaffsList = () => {
  const [Staffs, setStaffs] = useState([]);
  const [refreshData, setRefreshData] = useState(false);
  useEffect(() => {
    const requestOption = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }
    fetch("https://62d7a78b2d20e504f385950a--melodious-hamster-29bc02.netlify.app/characters?hogwartsStaff=true", requestOption)
      .then((response) => response.json())
      .then((data) => setStaffs(data));
  }, [refreshData]);
  return (
    <div className="staffsList">
      {Staffs.map((staff) => {
        return (
          <CardStaffs
            name={staff.name}
            key={staff.name}
            image={staff.image}
            house={staff.house}
            alive={staff.alive}
            hogwartsStaff={staff.hogwartsStaff}
            staff={staff}
            favorite={staff.favorite}
            id={staff.id}
            refreshData={refreshData}
            setRefreshData={setRefreshData}
            gender={staff.gender}
            eyeColour={staff.eyeColour}
            hairColour={staff.hairColour}
            dateOfBirth={staff.dateOfBirth}
          />
        )
      })}
    </div>
  )

};
StaffsList.defaultProps = {
  pokemons: Array(10).fill(''),
}
export default StaffsList;