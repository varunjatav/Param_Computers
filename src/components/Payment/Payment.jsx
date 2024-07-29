import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { load } from "@cashfreepayments/cashfree-js";

const Payment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  console.log(name);
  console.log(email);
  console.log(phoneNo);
  const cashfree = Cashfree({
    mode: "sandbox", //or production
  });

  let options = {
    values: {
      upiId: "testsuccess@gocash",
    },
  };
  let component = cashfree.create("upiCollect", options);

  component.mount("#my-div");

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/register", {
        name: name,
        email: email,
        phoneNo: phoneNo,
      });
      console.log(response);
      if (response.status === 200) {
        cashfree.checkout({
          paymentSessionId:
            "session_tRErUdtZlfLeOJn8Yyr2SqkOcMP05yyOAGabiK6ViSTwaaecrtNct8TStZPo7d1B_JpZuvZhqiAbnTQ8Z8dL93aYsBsTYuVYabPMiVnDNTLB",
        });
      }
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "name") setName(e.target.value);
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "phoneNo") setPhoneNo(e.target.value);
  };
  return (
    <section className="grid grid-cols-2">
      <section className="p-10 border-r">
        <form action="" className="flex flex-col gap-3">
          <label htmlFor="Name" className="font-bold">
            Name :
          </label>
          <input
            name="name"
            type="text"
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="w-full border-2 border-black rounded-md p-2"
          />
          <label htmlFor="Email" className="font-bold">
            Email Address :
          </label>
          <input
            name="email"
            type="email"
            onChange={handleChange}
            placeholder="Enter Your Email"
            className="w-full border-2 border-black rounded-md p-2"
          />
          <label htmlFor="Mobile" className="font-bold">
            Mobile No:
          </label>
          <input
            name="phoneNo"
            type="text"
            onChange={handleChange}
            placeholder="Enter Your Mobile Number"
            className="w-full border-2 border-black rounded-md p-2"
          />
          <input
            type="submit"
            value="Pay"
            onClick={handlePayment}
            className=" bg-green-400 text-white py-2 px-4 rounded-md cursor-pointer"
          />
        </form>
      </section>
      <section className="p-10">
        <img
          src="https://payment.page/wp-content/uploads/2022/02/ot-placeholder.jpg"
          alt="payment_hero_img"
          className="h-72 w-full rounded-ss-[100px] rounded-ee-[100px]"
        />
        <div className="p-2">
          <h2 className="font-semibold text-5xl font-serif leading-normal">
            Discover new <span className="text-green-500"> learning</span>{" "}
            possibilities.
          </h2>
          <p className="font-serif pt-4">
            We can’t stop you from worrying about your child. But our expert
            tutors can help their grades and confidence soar – and help you
            worry a little less.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Payment;
