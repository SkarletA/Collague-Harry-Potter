import React from "react";
import { useNavigate } from "react-router-dom";


const ButtonStaffs = () => {
  const navigate = useNavigate();
  const handleClickStaffs = () => {
    return (navigate('/staffs'));
  }
  return(
    <section className="btn_staffs_container">
      <button onClick={handleClickStaffs} className="btn_staffs" type="submit">STAFF</button>
    </section>
  );
}

export default ButtonStaffs;