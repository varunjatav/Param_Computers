import React from "react";
import { GrMapLocation } from "react-icons/gr";
import { MdAddIcCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
const Support = () => {
  return (
    <section className="p-14">
      <h2 className="font-semibold text-3xl mb-5">Quick Support</h2>
      <p className="text-xl font-thin">You can get all contact information here</p>
      <div className="flex flex-row justify-between items-center p-5">
        <div className="border-2 border-teal-400 w-72 p-5 h-48 rounded-2xl flex flex-col gap-2 items-left justify-center">
          <GrMapLocation className="text-5xl text-teal-400" />
          <h3 className="font-semibold text-xl text-teal-400">Visit Us</h3>
          <p className="text-lg text-gray-500">
            Maharaja Pratap Nagar, Jhansi
          </p>
        </div>
        <div className="border-2 border-teal-400 w-72 p-5 h-48 rounded-2xl flex flex-col gap-2 items-left justify-center">
          <MdAddIcCall className="text-5xl text-teal-400" />
          <h3 className="font-semibold text-xl text-teal-400">Call Us</h3>
          <p className="text-lg text-gray-500">+91 6386283480</p>
        </div>
        <div className="border-2 border-teal-400 w-72 p-5 h-48 rounded-2xl flex flex-col gap-2 items-left justify-center">
          <MdEmail className="text-5xl text-teal-400" />
          <h3 className="font-semibold text-xl text-teal-400">Mail Us</h3>
          <p className="text-lg text-gray-500">
          info@paramcomputers.co.in
          </p>
        </div>
      </div>
    </section>
  );
};

export default Support;
