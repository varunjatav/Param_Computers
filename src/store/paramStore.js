import { configureStore } from "@reduxjs/toolkit";
import registrationSlice from "./registrationSlice";
import ToggleSlice from "./sideBarToggleSlice";
import courseToggleSlice from "./courseToggleSlice";
const paramStore = configureStore({
    reducer:{
        registration: registrationSlice,
        sideBarToggle: ToggleSlice,
        courseToggle: courseToggleSlice,
    }
});

export default paramStore;