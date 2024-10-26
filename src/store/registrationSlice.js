import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const registration = createAsyncThunk("registration",

async(values, thunkAPI) => {
  
  // const cashfree = Cashfree({
  //   mode: "sandbox", //or production
  // });

  // let options = {
  //   values: {
  //     upiId: "testsuccess@gocash",
  //   },
  // };
  // let component = cashfree.create("upiCollect", options);
console.log(values);
  // component.mount("#my-div");
    try {
      const response = await axios.post("https://param-backend.onrender.com/api/registration", {
        name: values.name,
        email: values.email,
        phoneNo: values.phoneNo,
        mode: values.mode,
        course: values.course,
        section: values.section,
        payment: values.payment,
      });
      
        // if (response.status === 201 && response.data.paymentSessionId) {
        //   cashfree.checkout({
        //     paymentSessionId: response.data.paymentSessionId,
        //   });
        // }
        // console.log(response)
    } catch (error) {
      console.error("Payment failed:", error);
    }
})


const registrationSlice = createSlice({
  name: "registration",
  initialState: {
    entities: [
      {
        name: "",
        email: "",
        phoneNo: "",
        mode:"",
        course:"",
        section:"",
        payment:""
      },
    ],
    error: null,
    isLoading: false,
  },
  // reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registration.fulfilled, (state, { payload }) => {
        state.entities.push(payload);
    });
    builder.addCase(registration.pending, (state, {payload}) => {
      state.isLoading = true;
    });
    builder.addCase(registration.rejected, (state,{payload}) => {
      state.error = payload;
    })
  }
});

export default registrationSlice.reducer;
export const registrationAction = registrationSlice.actions;