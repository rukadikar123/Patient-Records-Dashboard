import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewPatient } from "../Redux/PatientSlice";
import { useNavigate } from "react-router-dom";

function AddPatient() {
  // Local state for form inputs
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    contact: "",
    address: "",
  });

  let navigate = useNavigate(); // Hook to programmatically navigate to another route
  let dispatch = useDispatch(); // Hook to dispatch Redux actions

  // Handles input changes for all fields
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default page reload on form submit
    dispatch(addNewPatient({ ...formData, id: Date.now() })); // Dispatch the action to add a new patient, adding a unique id
    // Reset the form fields after submission
    setFormData({
      name: "",
      age: "",
      contact: "",
      address: "",
    });
    navigate("/patients"); // Navigate to /patients page after adding
  };

  return (
    <>
      {/* Centered form container */}
      <div className="min-h-screen flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="max-w-md w-full mx-auto  bg-white p-6 rounded-xl shadow-md space-y-4"
        >
          <h2 className="text-xl text-center font-semibold text-gray-800">
            Add New Patient
          </h2>
          {/* Input for patient name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-3 py-2 border rounded-md outline-none"
            required
          />
          {/* Input for patient age */}
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
            className="w-full px-3 py-2 border rounded-md outline-none"
            required
          />
          {/* Input for patient contact */}
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Contact"
            className="w-full px-3 py-2 border rounded-md outline-none"
            required
          />
          {/* Input for patient address */}
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full px-3 py-2 border rounded-md outline-none"
          />
          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md cursor-pointer hover:bg-blue-600"
          >
            Add Patient
          </button>
        </form>
      </div>
    </>
  );
}

export default AddPatient;
