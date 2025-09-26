import { createSlice } from "@reduxjs/toolkit";

// Creating a slice for Patient state
const PatientSlice = createSlice({
  name: "Patient",
  // Initial state of the slice
  initialState: {
    patients: [],
  },
  reducers: {
    // Set entire patients array
    setPatients: (state, action) => {
      state.patients = action.payload;
    },
    // Add one new patient
    addNewPatient: (state, action) => {
      state.patients.push(action.payload);
    },
  },
});
// Exporting actions to be used inside components
export const { setPatients, addNewPatient } = PatientSlice.actions;

// Exporting reducer to be added in store.js
export default PatientSlice.reducer;
