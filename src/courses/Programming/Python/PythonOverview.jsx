import React from "react";
import { TiTick } from "react-icons/ti";

const PythonOverview = () => {
  return (
    <div className="px-4 py-10">
      <h1 className="font-bold text-2xl md:text-3xl mb-5">Description</h1>
      <p>
        Embark on a journey of innovation and mastery with Python at Param
        Computers. Whether you're a novice or seasoned coder, our institution
        offers a dynamic learning environment tailored to your needs. Dive into
        the world of Python programming, where simplicity meets powerful
        problem-solving, and opportunities are boundless. Gain expertise in
        Python, unlocking doors to lucrative career opportunities in tech. Our
        comprehensive courses, led by industry experts, ensure you develop the
        versatile skills demanded by today's digital landscape. Join us online
        or offline and become part of a vibrant community dedicated to shaping
        the future through code. Enroll now and ignite your passion for Python
        programming at Param Computers!
      </p>
      <h1 className="font-bold text-2xl md:text-3xl my-5">What you will master</h1>
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
