import { configureStore } from "@reduxjs/toolkit";
import PatientReducer from "./PatientSlice";

// Create the Redux store
const store = configureStore({
  reducer: {
    Patient: PatientReducer, // This key will be used in useSelector to access state.Patient
  },
});

// Export the store to provide it to the React app
export default store;
