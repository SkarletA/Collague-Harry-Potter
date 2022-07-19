import React, {useState} from "react";
import ButtonAdd from "./sub-components/ButtonAdd";
import ButtonFavorite from "./sub-components/ButtonFavorite";


const NavBar = () => {
  const [refreshData, setRefreshData] = useState(false);

  return (
    <nav className="navbar_container">
      <ButtonFavorite
        refreshData={refreshData}
        setRefreshData={setRefreshData}
      />
      <ButtonAdd />
    </nav>
  );
}

export default NavBar;