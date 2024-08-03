import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const registration = createAsyncThunk("registration",

async(values, thunkAPI) => {
  const cashfree = Cashfree({
    mode: "sandbox", //or production
  });

  let options = {
    values: {
      upiId: "testsuccess@gocash",
    },
  };
  let component = cashfree.create("upiCollect", options);
console.log(values);
  component.mount("#my-div");
    try {
      const response = await axios.post("http://localhost:3001/registration", {
        name: values.name,
        email: values.email,
        phoneNo: values.phoneNo,
        course: values.course
      });
      console.log(response.data);
      // if (response.status === 201) {
      //   cashfree.checkout({
      //     paymentSessionId:
      //       "session_tRErUdtZlfLeOJn8Yyr2SqkOcMP05yyOAGabiK6ViSTwaaecrtNct8TStZPo7d1B_JpZuvZhqiAbnTQ8Z8dL93aYsBsTYuVYabPMiVnDNTLB",
      //   });
      // }
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
      },
    ],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registration.fulfilled, (state, { payload }) => {
        state.entities.push(payload);
      });
  }
});

export default registrationSlice.reducer;
export const registrationAction = registrationSlice.actions;