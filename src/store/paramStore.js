import { configureStore } from "@reduxjs/toolkit";
import registrationSlice from "./registrationSlice";
import ToggleSlice from "./sideBarToggleSlice";
const paramStore = configureStore({
    reducer:{
        registration: registrationSlice,
        sideBarToggle: ToggleSlice
    }
});

export default paramStore;