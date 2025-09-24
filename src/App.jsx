import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Patients from "./Pages/Patients"
import About from "./Pages/About"

function App() {

  return (
    <>
       <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/patients" element={<Patients/>}  />
        <Route path="/about" element={<About/>}  />

        </Routes>   
    </>
  )
}

export default App
