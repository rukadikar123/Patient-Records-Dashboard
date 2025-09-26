import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

// Navbar component to show navigation links
function Navbar() {
  // State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-blue-900 text-white">
      {/* Main navigation bar */}
      <nav className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Brand / Logo */}
        <div className="text-xl font-bold ">Jarurat Care</div>
        {/* Desktop navigation links (hidden on small screens) */}
        <ul className="md:flex hidden space-x-6">
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
        {/* Mobile menu toggle button (hidden on medium+ screens) */}
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden block"
        >
          {" "}
          <IoMdMenu size={25} />
        </div>
      </nav>
      {/* Mobile navigation menu, only visible if isMenuOpen = true */}
      {isMenuOpen && (
        <ul className="flex flex-col absolute bg-white p-2 rounded-md text-black top-12 right-6 gap-1">
          <li>
            <Link to="/" className="hover:text-black/55 text-sm font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/patients"
              className="hover:text-black/55 text-sm font-medium"
            >
              Patients
            </Link>
          </li>
          <li>
            <Link to="/add" className="hover:text-black/55 text-sm font-medium">
              Add Patient
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-black/55 text-sm font-medium"
            >
              About
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Navbar;
