import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const query = createAsyncThunk("query", async (values, thunk) => {
  try {
    const response = await axios.post("https://param-backend.onrender.com/api/query",{
        name: values.name,
        email: values.email,
        phoneNo: values.phoneNo,
        message: values.message,
    });

    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

const querySlice = createSlice({
  name: "query",
  initialState: {
    entities: {
      name: "",
      email: "",
      phoneNo: "",
      message: "",
    },
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(query.fulfilled, (state, { payload }) => {
      state.entities.push(payload);
    });
  },
});

export default querySlice;
export const queryActions = querySlice.actions;