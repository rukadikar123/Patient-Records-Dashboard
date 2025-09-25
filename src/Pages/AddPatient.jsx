import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewPatient } from "../Redux/PatientSlice";
import { useNavigate } from "react-router-dom";

function AddPatient() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    contact: "",
    address: "",
  });

  let navigate=useNavigate()
  let dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewPatient({...formData,id:Date.now()}));
    setFormData({
      name: "",
      age: "",
      contact: "",
      address: "",
    });
    navigate('/patients')

  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="max-w-md w-full mx-auto  bg-white p-6 rounded-xl shadow-md space-y-4"
        >
          <h2 className="text-xl text-center font-semibold text-gray-800">
            Add New Patient
          </h2>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-3 py-2 border rounded-md outline-none"
            required
          />

          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
            className="w-full px-3 py-2 border rounded-md outline-none"
            required
          />

          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Contact"
            className="w-full px-3 py-2 border rounded-md outline-none"
            required
          />

          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full px-3 py-2 border rounded-md outline-none"
          />

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
