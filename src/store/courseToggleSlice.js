import { createSlice } from "@reduxjs/toolkit";

const courseToggleSlice = createSlice({
    name: "courseToggleSlice",
    initialState: false,
    reducers: {
       setTrue: (state, action) => {
        return state = true;
       },
       setFalse: (state, action) => {
        return state = false;
       }
    }
});


export default courseToggleSlice.reducer;
export const courseToggleSliceActions = courseToggleSlice.actions;