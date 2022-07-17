/* eslint-disable jsx-a11y/img-redundant-alt */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import StaffsList from "./components/sub-components/StaffsList";
import StudentsList from "./components/sub-components/StudentsList";
import './styles/styles.scss';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/*" element={<Home />} />
        <Route path="students" element={<StudentsList />} />
        <Route path="staffs" element={<StaffsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
