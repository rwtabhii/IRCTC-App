import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authReducer.jsx";
import trainReducer from "./train/trainReducer.jsx";
import bookingSlice from "../redux/booking/bookingReducer.jsx";

const store = configureStore({
  reducer: {
    auth: authReducer,
    trains: trainReducer,
    bookings: bookingSlice,
  },
});

export default store;