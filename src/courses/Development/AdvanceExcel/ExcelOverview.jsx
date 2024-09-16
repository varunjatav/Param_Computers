import React from "react";
import { TiTick } from "react-icons/ti";

const ExcelOverview = () => {
  return (
    <div className="px-4 pt-10">
      <h1 className="font-bold text-2xl lg:text-3xl mb-5">Description</h1>
      <p>
        Master the art of data analysis and optimization with Advanced Excel
        courses at Param Computers. Dive deep into the powerful functionalities
        of Excel, unlocking its full potential to streamline workflows, analyze
        data trends, and make informed business decisions. Our comprehensive
        curriculum covers advanced features such as macros, pivot tables, data
        visualization, and more, empowering you to become an Excel expert.
        Whether you're a business professional seeking to enhance productivity
        or a data enthusiast eager to sharpen your analytical skills, our online
        or offline courses cater to learners of all levels. Led by experienced
        instructors, our hands-on training ensures practical proficiency in
        Excel, giving you a competitive edge in today's data-driven world. Join
        us at Param Computers and take the first step towards mastering Excel
        for greater efficiency and success in your professional endeavors.
        Enroll now and unlock the limitless possibilities of Advanced Excel.
      </p>
      <h1 className="font-bold text-2xl lg:text-3xl my-5">
        What you will master
      </h1>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Microsoft Excel
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Data Analysis using Excel
        </li>
      </ul>
    </div>
  );
};

export default ExcelOverview;
