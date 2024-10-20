import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../features/search/slice";
import filtersSlice from "../features/filters/redux/slice";
import bookingSlice from "../features/booking/slice";
import tripsSlice from "../features/trips/redux/slice";

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    filters: filtersSlice.reducer,
    booking: bookingSlice.reducer,
    trips: tripsSlice.reducer,
  },
});

export default store;
