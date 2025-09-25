import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";
import PatientCard from "../Components/PatientCard";
import DetailsModal from "../Components/DetailsModal";

function Patients() {
  const { patients } = useSelector((state) => state?.Patient);
    const [isModalOpen,setIsModalOpen]=useState({isOpen:false,data:null})
  const [searchQuery, setsearchQuery] = useState("");

  const filteredList = patients?.filter((patient) =>
    patient?.name?.toLowerCase().includes(searchQuery?.toLowerCase())
  );
  const onViewDetails=(p)=>{
    setIsModalOpen({isOpen:true, data:p})
  }
  const onClose=()=>{
    setIsModalOpen({isOpen:false, data:null})
  }

  return (
    <>
      <div className="min-h-screen">
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
        <div className="p-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredList?.length === 0 ? (
            <div className="col-span-full flex justify-center items-center h-96">
              <p className="text-xl text-gray-500">No patients found</p>
            </div>
          ) : (
            filteredList?.map((patient) => (
              <PatientCard key={patient?.id} patient={patient}  onViewDetails={onViewDetails} />
            ))
          )}
        </div>
      </div>
      {
        isModalOpen?.isOpen && (
          <DetailsModal data={isModalOpen?.data} onClose={onClose} />
        )
      }
    </>
  );
}

export default Patients;
