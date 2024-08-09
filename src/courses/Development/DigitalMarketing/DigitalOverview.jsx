import React from "react";
import { TiTick } from "react-icons/ti";

const DigitalOverview = () => {
  return (
    <div className="px-4 py-10">
      <h1 className="font-bold text-2xl lg:text-3xl mb-5">Description</h1>
      <p>
        In today's digital age, understanding digital marketing is essential for
        professionals across all industries. This comprehensive course will
        equip you with the necessary skills and knowledge to navigate the
        ever-evolving digital landscape successfully.
      </p>
      <h1 className="font-bold text-2xl lg:text-3xl my-5">What you will learn</h1>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Understand the fundamentals of digital marketing
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Develop effective digital marketing strategies
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Implement various digital marketing techniques
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Analyze and optimize digital marketing campaigns
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Stay ahead of the competition in the digital realm
        </li>
      </ul>
      <h1 className="font-bold text-2xl lg:text-3xl my-5">What you will master</h1>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Strategic thinking in digital marketing
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Social media marketing proficiency
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Search engine optimization (SEO) knowledge
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Content marketing expertise
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Digital analytics understanding
        </li>
      </ul>
    </div>
  );
};

export default DigitalOverview;
