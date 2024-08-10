import React from 'react';
import { TiTick } from "react-icons/ti";

const WebSyllabus = () => {
  return (
    <div className="px-4 pt-10"> 
      <h1 className="font-bold text-2xl lg:text-3xl my-5">
      Detailed Course Outline
      </h1>
      <h2 className="font-bold text-xl lg:text-2xl my-5">
        Development
      </h2>
      <h2 className="font-bold text-xl lg:text-2xl my-5">
      Module 1: Introduction to Web Development
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick />Overview of web development landscape
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Difference between front-end and back-end development.
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Introduction to the tools and technologies used in the course.
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Code Editors for Development (VS Code)
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Importance of Version Control Sytem like Git and Github.
        </li>
      </ul>
      <h2 className="font-bold text-xl lg:text-2xl my-5">
      Module 2: Front-End Development Basics
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> HTML and CSS 
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Responsive Design with CSS
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Working with CSS frameworks like Bootstrap.
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Design Your First Website
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> How to Deploy your Website on live server like Netlify.
        </li>
      </ul>
      <h2 className="font-bold text-xl lg:text-2xl my-5">
         Module 3: Basics of JavaScript
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Data Types and Variables.
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Operators and Conditional Statements.
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Loops and Funtions.
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Strings and Array.
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Higher Order Functions.
        </li>
      </ul>
      <h2 className="font-bold text-xl lg:text-2xl my-5">
         Module 4: Advanced JavaScript
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Document Object Module
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> JavaScript Events.
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Projects.
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Classes and Objects.
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Application Programming Interface (APIs).
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Callback Promises and Async Await.
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Event Loop.
        </li>
      </ul>
      <h2 className="font-bold text-xl lg:text-2xl my-5">
      Module 5: Introduction to React and Redux-Toolkit
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Introduction to React and React DevTools.
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Component Based Architecture.
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> State Mangement with Hooks.
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Form Handling in React.
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick />Differnce between Redux and Redux Toolkit.
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick />State Mangement with Redux Toolkit.
        </li>
      </ul>
      <h2 className="font-bold text-xl lg:text-2xl my-5">
           Module 5: Backend With Node and Express.js
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Introduction to React and React DevTools.
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick />Component Based Architecture.
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> State Mangement with Hooks
        </li>
      
      </ul>
    </div>
  )
}

export default WebSyllabus