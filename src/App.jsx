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
import AddPatient from "./Pages/AddPatient";

// Main App component
function App() {
  let dispatch = useDispatch(); // Redux dispatch function

  // useEffect to initialize the Redux state with mock patient data
  useEffect(() => {
    dispatch(setPatients(patientData)); // Load initial patient data into Redux store
  }, [dispatch]);

  return (
    <>
      {/* Navbar displayed on all pages */}
      <Navbar />
      {/* Define all routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/add" element={<AddPatient />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* Footer displayed on all pages */}
      <Footer />
    </>
  );
}

export default App;
