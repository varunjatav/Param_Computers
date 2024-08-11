import React from "react";
import { TiTick } from "react-icons/ti";

const JavaSyllabus = () => {
  return (
    <div className="px-4 pt-10">
      <h1 className="font-bold text-2xl lg:text-3xl my-5">
        Detailed Course Outline
      </h1>
      <h2 className="font-bold text-xl lg:text-2xl my-5">
        Module 1: Introduction to Java
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Overview of Java history and its importance
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Setting up Java Development Environment
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Basic syntax and data types in Java
        </li>
      </ul>
      <h2 className="font-bold text-xl lg:text-2xl my-5">
        Module 2: Object-Oriented Programming in Java
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Understanding classes and objects
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Inheritance and Polymorphism
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Encapsulation and Abstraction
        </li>
      </ul>
      <h2 className="font-bold text-xl lg:text-2xl my-5">
        Module 3: Control Flow and Looping
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Conditional statements in Java.
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Iterative structures like for, while, and do-while loops.
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Switch-case statements.
        </li>
      </ul>
      <h2 className="font-bold text-xl lg:text-2xl my-5">
        Module 4: Arrays and Collections
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Working with arrays in Java
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Introduction to Java Collections Framework
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick />
          List, Set, and Map interfaces
        </li>
      </ul>
      <h2 className="font-bold text-xl lg:text-2xl my-5">
        Module 5: Exception Handling
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Handling errors and exceptions in Java.
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Try-catch blocks and throw keyword.
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Custom exceptions.
        </li>
      </ul>
      <h2 className="font-bold text-xl lg:text-2xl my-5">
        Module 6: File Handling
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Reading and writing files in Java.
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Handling text and binary files.
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Serialization and Deserialization
        </li>
      </ul>
      <h2 className="font-bold text-xl lg:text-2xl my-5">
        Module 7: Introduction to GUI Programming
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Basics of Graphical User Interface (GUI).
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick />
          Creating simple GUI applications
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Event handling in Java
        </li>
      </ul>
      <h2 className="font-bold text-xl lg:text-2xl my-5">
        Module 8: Java Application Development
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Applying all learned concepts in a final project.
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick />
          Developing a Java application from scratch
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Presenting and sharing the project with peers
        </li>
      </ul>
    </div>
  );
};

export default JavaSyllabus;
