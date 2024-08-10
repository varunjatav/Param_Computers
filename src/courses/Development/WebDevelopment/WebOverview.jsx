import React from "react";
import { TiTick } from "react-icons/ti";

const WebOverview = () => {
  return (
    <div className="px-4 pt-10">
      <h1 className="font-bold text-2xl lg:text-3xl mb-5">Description</h1>
      <p>
        Full Stack Web Development is an essential skill in today's digital era,
        bridging the gap between front-end user experiences and back-end server
        functionality. As organizations increasingly rely on web-based
        solutions, understanding both sides of the development spectrum becomes
        crucial. This course is designed for professionals seeking to advance
        their careers in technology by gaining comprehensive knowledge and
        practical experience in building and deploying fullfledged web
        applications.
      </p>
      <p>
        In this course, you will explore the concepts and technologies necessary
        to develop responsive and functional web applications from scratch. The
        course emphasizes hands-on experience, ensuring that participants not
        only learn theoretical aspects but also apply their knowledge in
        real-world scenarios.
      </p>
      <h1 className="font-bold text-2xl lg:text-3xl my-5">
        What you will master
      </h1>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Fundamentals of web development including HTML, CSS, and JavaScript
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Key frameworks for front-end development (like React or Angular).
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Essentials of back-end development using Node.js, Express, and databases.
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Techniques for integrating APIs and handling data exchange.
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Deployment processes for hosting web applications.
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick />Best practices in web security and performance optimization.
        </li>
      </ul>
    </div>
  );
};

export default WebOverview;
