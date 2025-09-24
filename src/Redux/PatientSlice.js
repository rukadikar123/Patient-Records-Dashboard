import { createSlice } from "@reduxjs/toolkit";

const PatientSlice=createSlice({
    name:"Patient",
    initialState:{
        patients:[]
    },
    reducers:{
        setPatients:(state,actions)=>{
            state.patients(actions.payload)
        }
    }
})

export const {setPatients} =PatientSlice.actions

export default PatientSlice.reducer