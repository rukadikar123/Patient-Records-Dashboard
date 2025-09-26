import React from "react";

function DetailsModal({ data, onClose }) {
  return (
    // Overlay background to dim the screen when modal is open
    <div className="fixed inset-0 bg-black/75 bg-opacity-50 flex items-center justify-center z-50">
      {/* Main modal container */}
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative py-10">
        {/* Close button in the top-right corner */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600   hover:text-gray-900 text-xl cursor-pointer"
        >
          ✕
        </button>
        {/* Modal Title */}
        <h1 className="text-4xl font-bold text-blue-800 mb-14 text-center ">
          Patient Details
        </h1>
        {/* Patient Information */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{data?.name}</h2>
        <p className="text-gray-700 mb-2">Age:{data?.age}</p>
        <p className="text-gray-700 mb-2">Contact: {data?.contact}</p>
        <p className="text-gray-700 mb-2">Address: {data?.address}</p>
      </div>
    </div>
  );
}

export default DetailsModal;
