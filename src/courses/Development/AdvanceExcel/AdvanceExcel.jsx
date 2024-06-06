import React from "react";
import { MdOutlineLiveTv } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";
import { TbCertificate } from "react-icons/tb";
import { Link, Outlet } from "react-router-dom";
const AdvanceExcel = () => {
  return (
    <section id="advance_excel">
      <div className="rounded-[40px]  bg-[url('./Excel.webp')] bg-cover bg-no-repeat bg-center mx-10 h-80 "></div>
      <div className="flex flex-col  justify-center lg:flex-row gap-10 mx-2 lg:ml-10 mt-10">
      <aside className="flex-initial m-auto lg:m-0 w-80 rounded-[20px] border-2 h-96 p-10">
        <h2 className="font-bold text-xl mb-2">Course Content</h2>
        <p className="text-gray-500 flex gap-3 items-center mb-1">
          <MdOutlineLiveTv /> 4 months live classes
        </p>
        <p className="text-gray-500 flex gap-3 items-center mb-1">
          <FaLaptopCode /> hands on training
        </p>
        <p className="text-gray-500 flex gap-3 items-center mb-1">
          <GoProjectSymlink /> live projects
        </p>
        <p className="text-gray-500 flex gap-3 items-center mb-1">
          <TbCertificate /> certificate of completion
        </p>
        <hr className="my-8" />
        <p className="font-bold text-2xl text-emerald-700 pb-5">
          &#8377; 14000
        </p>
        <button
          type="button"
          class="text-white w-full bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
        >
          Register Now
        </button>
      </aside>

      <section className="flex-initial w-full lg:w-[800px]">
        <div className="flex justify-between items-center text-gray-500 border-2 h-10 py-3 px-10 rounded-xl">
          <Link to="">
            Overview
          </Link>
          <Link to="syllabus">
            Syllabus
          </Link>
          <Link to="instructor">
            Instructor
          </Link>
        </div>
        <Outlet/>
      </section>
      </div>
    
    </section>
  );
};

export default AdvanceExcel;
