import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Patients from "./Pages/Patients";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPatients } from "./Redux/PatientSlice";
import { patientData } from "./MockData";

function App() {

let dispatch=useDispatch()

  useEffect(()=>{
      dispatch(setPatients(patientData))
  },[dispatch])

  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer/>
    </>
  );
}

export default App;
