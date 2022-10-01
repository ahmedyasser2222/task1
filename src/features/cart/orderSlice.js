import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  date: {},
  location: {},
  coach: {},
  equipment: [],
  horse: {},
};
const orderSlice = createSlice({
  name: "scanner",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setCoach: (state, action) => {
      state.coach = action.payload;
    },
    setEquipment: (state, action) => {
      state.equipment = action.payload;
    },
    setHorse: (state, action) => {
      state.horse = action.payload;
    },
  },
});

export const {
  setId,
  setDate,
  setLocation,
  setCoach,
  setEquipment,
  setHorse,
} = orderSlice.actions;
export default orderSlice.reducer;
