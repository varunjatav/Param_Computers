import { configureStore } from "@reduxjs/toolkit";
import registrationSlice from "./registrationSlice";

const paramStore = configureStore({
    reducer:{
        registration: registrationSlice,
    }
});

export default paramStore;