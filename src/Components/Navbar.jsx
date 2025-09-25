import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
   <header className="bg-blue-900 text-white">
        <nav className="container mx-auto flex justify-between items-center px-6 py-4">
          <div className="text-xl font-bold ">Jarurat Care</div>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-blue-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/patients" className="hover:text-blue-300">
                Patients
              </Link>
            </li>
            <li>
              <Link to="/add" className="hover:text-blue-300">
                Add Patient
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-300">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>
  );
}

export default Navbar;
