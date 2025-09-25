import { createSlice } from "@reduxjs/toolkit";

const PatientSlice=createSlice({
    name:"Patient",
    initialState:{
        patients:[]
    },
    reducers:{
        setPatients:(state,action)=>{
            state.patients=action.payload
        },
        addNewPatient:(state,action)=>{
        state.patients.push(action.payload)
        }
    }
})

export const {setPatients,addNewPatient} =PatientSlice.actions

export default PatientSlice.reducer