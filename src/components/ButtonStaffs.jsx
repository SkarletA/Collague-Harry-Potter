import React from "react";
import { useNavigate } from "react-router-dom";


const ButtonStaffs = ({ isActive, setIsActive }) => {
  const navigate = useNavigate();
  const handleClickStaffs = () => {
    navigate('/staffs');
    if (isActive.activeStaff) {
      setIsActive(isActive.activeStaff = false);
    } else {
      setIsActive(
        isActive = {
          activeStaff: true,
          activeStudent: false
        }
      );
    }
  }
  return(
    <section className="btn_staffs_container">
      <button onClick={handleClickStaffs} className="btn_staffs" type="submit">STAFF</button>
    </section>
  );
}

export default ButtonStaffs;