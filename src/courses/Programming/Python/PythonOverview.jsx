import React from "react";
import { TiTick } from "react-icons/ti";

const PythonOverview = () => {
  return (
    <div className="px-4 py-10">
      <h1 className="font-bold text-2xl md:text-3xl mb-5">Description</h1>
      <p>
        Explore the world of programming with Python, a beginner-friendly
        language widely used in various fields. This course is designed for
        school students looking to grasp the fundamentals of coding and gain a
        valuable skill for the future. Learning Python opens doors to problem
        solving, automation, and creativity in today's digital age.
      </p>
      <h1 className="font-bold text-2xl md:text-3xl my-5">
        What you will master
      </h1>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Understand the basics of Python programming language
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Create simple programs and scripts
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Apply programming concepts to solve real-world problems
        </li>
      </ul>
    </div>
  );
};

export default PythonOverview;
