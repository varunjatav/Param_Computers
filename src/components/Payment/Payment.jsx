import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";


const Payment = () => {
  const [orderId, setOrderId] = useState("");
  const [orderAmount, setOrderAmount] = useState("");
  const [customerDetails, setCustomerDetails] = useState({
    customer_id: "",
    customer_email: "",
    customer_phone: "",
  });

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/create-order", {
        order_id: orderId,
        order_amount: orderAmount,
        order_currency: "INR",
        customer_details: customerDetails,
      });

      const { payment_link } = response.data;
      console.log(response.data);
      if (payment_link) {
        window.location.href = payment_link;
      } else {
        console.error('No payment link received:', response.data);
      }
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };

  return (
   
    <section className="grid grid-cols-2">
      <section className="p-10 border-r">
        <h2 className="font-bold text-lg uppercase">
          Choose the payment method
        </h2>
        <div className="flex flex-wrap py-4 justify-between">
          <Link
            to="paypal"
            className="active:border-b-2 active:border-blue-500 focus:border-b-2 focus:border-blue-500"
          >
            <img
              src="https://cdn.freelogovectors.net/wp-content/uploads/2023/08/paypallogo-freelogovectors.net_-180x133.png"
              alt="paypal"
              width={"100px"}
              height={"100px"}
              loading="lazy"
            />
          </Link>
          <Link
            to="googlepay"
            className="active:border-b-2 active:border-blue-500 focus:border-b-2 focus:border-blue-500"
          >
            <img
              src="https://download.logo.wine/logo/Google_Pay/Google_Pay-Logo.wine.png"
              alt="googlepay"
              width={"100px"}
              height={"100px"}
              loading="lazy"
            />
          </Link>
          <Link
            to="phonepe"
            className="active:border-b-2 active:border-blue-500 focus:border-b-2 focus:border-blue-500"
          >
            <img
              src="https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png"
              alt="phonepe"
              width={"100px"}
              height={"100px"}
              loading="lazy"
            />
          </Link>
          <Link
            to="paytm"
            className="active:border-b-2 active:border-blue-500 focus:border-b-2 focus:border-blue-500"
          >
            <img
              src="https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png"
              alt="paytm"
              width={"100px"}
              height={"100px"}
            />
          </Link>
        </div>
        <div>
          <h2 className="font-bold text-lg uppercase">Your Information</h2>
          <form action="" className="p-2 flex flex-col gap-5">
            <input
              type="text"
              placeholder="OrderId"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="w-full rounded-xl p-2 border-2 border-black"
            />

            <input
              type="text"
              placeholder="Order Amount"
              value={orderAmount}
              onChange={(e) => setOrderAmount(e.target.value)}
              className="w-full rounded-xl p-2 border-2 border-black"
            />
            <input
              type="text"
              placeholder="Customer ID"
              value={customerDetails.customer_id}
              onChange={(e) =>
                setCustomerDetails({
                  ...customerDetails,
                  customer_id: e.target.value,
                })
              }
              className="w-full rounded-xl p-2 border-2 border-black"
            />
            <input
              type="email"
              placeholder="Customer Email"
              value={customerDetails.customer_email}
              onChange={(e) =>
                setCustomerDetails({
                  ...customerDetails,
                  customer_email: e.target.value,
                })
              }
              className="w-full rounded-xl p-2 border-2 border-black"
            />
            <input
              type="text"
              placeholder="Customer Phone"
              value={customerDetails.customer_phone}
              onChange={(e) =>
                setCustomerDetails({
                  ...customerDetails,
                  customer_phone: e.target.value,
                })
              }
              className="w-full rounded-xl p-2 border-2 border-black"
            />
            <button onClick={handlePayment}>Pay Now</button>
          </form>
        </div>
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
