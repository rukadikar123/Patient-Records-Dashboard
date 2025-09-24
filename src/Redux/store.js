import { configureStore } from "@reduxjs/toolkit";
import PatientReducer from "./PatientSlice"

 const store=configureStore({
    reducer:{
        Patient:PatientReducer
    }
})

export default store