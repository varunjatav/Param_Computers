import { configureStore } from "@reduxjs/toolkit";
import registrationSlice from "./registrationSlice";
import ToggleSlice from "./sideBarToggleSlice";
import courseToggleSlice from "./courseToggleSlice";
import querySlice from "./querySlice";
const paramStore = configureStore({
    reducer:{
        registration: registrationSlice,
        sideBarToggle: ToggleSlice,
        courseToggle: courseToggleSlice,
        query: querySlice,
    }
});

export default paramStore;