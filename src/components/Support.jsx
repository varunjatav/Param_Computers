import React from "react";
import { GrMapLocation } from "react-icons/gr";
import { MdAddIcCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import SlideInFromLeft from "./SlideInFromLeft";
import SlideInFromRight from "./SlideInFromRight";
const Support = () => {
  return (
    <section className="py-20 px-12">
      <SlideInFromLeft>
      <h2 className="font-semibold text-3xl mb-5">Quick Support</h2>
      </SlideInFromLeft>
      <SlideInFromLeft>
      <p className="text-xl font-thin">You can get all contact information here</p>
      </SlideInFromLeft>
      <div className="flex flex-row flex-wrap gap-4 justify-between items-center py-5">
        <SlideInFromRight>
        <div className="border-2 border-teal-400 w-72 p-5 h-48 rounded-2xl flex flex-col gap-2 items-left justify-center">
          <GrMapLocation className="text-5xl text-teal-400" />
          <h3 className="font-semibold text-xl text-teal-400">Visit Us</h3>
          <p className="text-lg text-gray-500">
            Maharaja Pratap Nagar, Jhansi
          </p>
        </div>
        </SlideInFromRight>
        <SlideInFromRight>
        <div className="border-2 border-teal-400 w-72 p-5 h-48 rounded-2xl flex flex-col gap-2 items-left justify-center">
          <MdAddIcCall className="text-5xl text-teal-400" />
          <h3 className="font-semibold text-xl text-teal-400">Call Us</h3>
          <p className="text-lg text-gray-500">+91 6386283480</p>
        </div>
        </SlideInFromRight>
        <SlideInFromRight>
        <div className="border-2 border-teal-400 w-72 p-5 h-48 rounded-2xl flex flex-col gap-2 items-left justify-center">
          <MdEmail className="text-5xl text-teal-400" />
          <h3 className="font-semibold text-xl text-teal-400">Mail Us</h3>
          <p className="text-lg text-gray-500">
          info@paramcomputers.co.in
          </p>
        </div>
        </SlideInFromRight>
      </div>
    </section>
  );
};

export default Support;
