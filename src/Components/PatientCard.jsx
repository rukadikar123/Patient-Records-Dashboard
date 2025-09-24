import React from "react";

function PatientCard({ patient, onViewDetails }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col gap-2 hover:shadow-lg transition">
      <h2 className="text-lg font-semibold text-gray-800">{patient?.name}</h2>
      <p className="text-sm text-gray-600">Age: {patient?.age}</p>
      <p className="text-sm text-gray-600">Contact: {patient?.contact}</p>
      <button
        onClick={()=>onViewDetails(patient)}
        className="mt-2  bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600"
      >
        View Details
      </button>
    </div>
  );
}

export default PatientCard;
