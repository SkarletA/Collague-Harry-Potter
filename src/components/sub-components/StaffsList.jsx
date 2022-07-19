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
    fetch("http://localhost:3001/staffs", requestOption)
      .then((response) => response.json())
      .then((data) => setStaffs(data));
  }, [refreshData]);
  return (
    <div className="StaffsList">
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