import React from "react";
import { TiTick } from "react-icons/ti";

const JavaOverview = () => {
  return (
    <div className="px-4 py-10">
      <h1 className="font-bold text-2xl md:text-3xl mb-5">Description</h1>
      <p>
        Embark on a journey of innovation and mastery with Java at Param
        Computers. Whether you're a novice or seasoned coder, our institution
        offers a dynamic learning environment tailored to your needs. Dive into
        the world of Java programming, where creativity meets problem-solving,
        and possibilities are limitless. Gain expertise in Java, unlocking doors
        to lucrative career opportunities in tech. Our comprehensive courses,
        led by industry experts, ensure you develop the skills demanded by
        today's digital landscape. Join us online or offline and become part of
        a vibrant community dedicated to shaping the future through code. Enroll
        now and ignite your passion for Java programming at Param Computers!
      </p>
      <h1 className="font-bold text-2xl md:text-3xl my-5">What you will master</h1>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Understanding the fundamentals of Core Java programming
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Implementing object-oriented concepts effectively
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Developing applications using Core Java
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Troubleshooting and debugging Java code
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Applying best practices in Java programming
        </li> 
      </ul>
    </div>
  );
};

export default JavaOverview;
