import React from "react";
import { Link, Outlet } from "react-router-dom";

const Payment = () => {
  return (
    <section className="grid grid-cols-2">
      <section className="p-10 border-r">
        <h2 className="font-bold text-lg uppercase">
          Choose the payment method
        </h2>
        <div className="flex flex-wrap py-4 justify-between">
          <Link to="paypal" className="active:border-b-2 active:border-blue-500 focus:border-b-2 focus:border-blue-500">
            <img
              src="https://cdn.freelogovectors.net/wp-content/uploads/2023/08/paypallogo-freelogovectors.net_-180x133.png"
              alt="paypal"
              width={"100px"}
              height={"100px"}
              loading="lazy"
            />
          </Link>
          <Link to="googlepay" className="active:border-b-2 active:border-blue-500 focus:border-b-2 focus:border-blue-500">
            <img
              src="https://download.logo.wine/logo/Google_Pay/Google_Pay-Logo.wine.png"
              alt="googlepay"
              width={"100px"}
              height={"100px"}
              loading="lazy"
            />
          </Link>
          <Link to="phonepe" className="active:border-b-2 active:border-blue-500 focus:border-b-2 focus:border-blue-500">
            <img
              src="https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png"
              alt="phonepe"
              width={"100px"}
              height={"100px"}
              loading="lazy"
            />
          </Link>
          <Link to="paytm" className="active:border-b-2 active:border-blue-500 focus:border-b-2 focus:border-blue-500">
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
          <form action="" className="p-2">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl p-2 border-2 border-black"
            />
            <div className="grid grid-cols-2 gap-2 mt-5">
              <input
                type="text"
                placeholder="First Name"
                className="w-full rounded-xl p-2 border-2 border-black"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full rounded-xl p-2 border-2 border-black"
              />
            </div>
          </form>
        </div>
        <div>
           <Outlet/>
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
