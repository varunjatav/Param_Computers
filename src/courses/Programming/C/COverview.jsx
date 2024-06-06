import React from "react";
import { TiTick } from "react-icons/ti";

const COverview = () => {
  return (
    <div className="py-10">
      <h1 className="font-bold text-3xl mb-5">Description</h1>
      <p>
        Embark on a journey of innovation and mastery with C at Param Computers.
        Whether you're a novice or seasoned coder, our institution offers a
        dynamic learning environment tailored to your needs. Dive into the world
        of C programming, where precision meets problem-solving, and
        opportunities are boundless. Gain expertise in C, unlocking doors to
        lucrative career prospects in tech. Our comprehensive courses, led by
        industry experts, ensure you develop the foundational skills demanded by
        today's digital landscape. Join us online or offline and become part of
        a vibrant community dedicated to shaping the future through code. Enroll
        now and ignite your passion for C programming at Param Computers!
      </p>
      <h1 className="font-bold text-3xl my-5">What you will master</h1>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Proficiency in C language syntax and semantics
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Ability to develop C programs from scratch
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Debugging and troubleshooting skills for C programs
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Problem-solving and logical thinking capabilities
        </li>
      </ul>
    </div>
  );
};

export default COverview;
