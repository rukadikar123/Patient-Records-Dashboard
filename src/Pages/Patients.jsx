import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";
import PatientCard from "../Components/PatientCard";
import DetailsModal from "../Components/DetailsModal";

function Patients() {
  const { patients } = useSelector((state) => state?.Patient); // Get patients array from Redux store (state.Patient)
  const [isModalOpen, setIsModalOpen] = useState({ isOpen: false, data: null }); // State for moda
  const [searchQuery, setsearchQuery] = useState(""); // State for search input

  // Filter patients list based on search query
  const filteredList = patients?.filter((patient) =>
    patient?.name?.toLowerCase().includes(searchQuery?.toLowerCase())
  );
  const onViewDetails = (p) => {
    setIsModalOpen({ isOpen: true, data: p }); // open modal and pass patient data
  };
  const onClose = () => {
    setIsModalOpen({ isOpen: false, data: null }); // reset modal state
  };

  return (
    <>
      <div className="min-h-screen">
        {/* Search input */}
        <div className=" flex items-start justify-center py-6">
          <div className="flex items-center gap-2   p-3 rounded-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setsearchQuery(e.target.value)}
              placeholder="Search by name..."
              className="px-2 py-1 w-full rounded-md outline-none border border-gray-300"
            />
            <IoSearch size={25} className="cursor-pointer" />
          </div>
        </div>
        {/* Grid of patient cards */}
        <div className="p-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredList?.length === 0 ? (
            <div className="col-span-full flex justify-center items-center h-96">
              <p className="text-xl text-gray-500">No patients found</p>
            </div>
          ) : (
            filteredList?.map((patient) => (
              <PatientCard
                key={patient?.id}
                patient={patient}
                onViewDetails={onViewDetails}
              />
            ))
          )}
        </div>
      </div>
      {/* Show modal only when isModalOpen.isOpen = true */}
      {isModalOpen?.isOpen && (
        <DetailsModal data={isModalOpen?.data} onClose={onClose} />
      )}
    </>
  );
}

export default Patients;
