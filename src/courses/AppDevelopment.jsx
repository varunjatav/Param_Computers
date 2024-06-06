import React from "react";
import { MdOutlineLiveTv } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";
import { TbCertificate } from "react-icons/tb";
const AppDevelopment = () => {
  return (
    <section id="app_developement">
      <div className="rounded-[40px] h-80 bg-[url('./mobile_app_development.jpg')] bg-cover bg-no-repeat bg-top mx-10"></div>
      <div className="flex gap-10 ml-10 mt-10">
      <aside className="rounded-[20px] border-2 w-80 h-96  p-10">
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
        <p className="font-bold text-2xl text-blue-700 pb-5">
          &#8377; 14000
        </p>
        <button
          type="button"
          class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Register Now
        </button>
      </aside>

      <section>
        <div className="flex justify-between items-center text-gray-500 border-2 h-10 py-3 px-10 rounded-xl w-[1000px]">
          <h4>
            Overview
          </h4>
          <h4>
            Syllabus
          </h4>
          <h4>
            Instructor
          </h4>
        </div>
      </section>
      </div>
    
    </section>
  );
};

export default AppDevelopment;
