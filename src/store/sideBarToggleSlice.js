import { createSlice } from "@reduxjs/toolkit";

const ToggleSlice = createSlice({
    name: "ToggleSlice",
    initialState: false,
    reducers: {
       setToggleSlice: (state, action) => {
        return !state;
       }
    }
});


export default ToggleSlice.reducer;
export const ToggleSliceActions = ToggleSlice.actions;