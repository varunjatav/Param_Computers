import React from "react";
import { TiTick } from "react-icons/ti";

const CplusSyllabus = () => {
  return (
    <div className="px-4 pt-10">
      <h1 className="font-bold text-2xl lg:text-3xl my-5">
        Detailed Course Outline
      </h1>
      <h2 className="font-bold text-xl lg:text-2xl my-5">
        Module 1: Introduction to C++ Programming
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Overview of C++ and its importance
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Setting up the development environment
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Creating your first C++ program
        </li>
      </ul>
      <h2 className="font-bold text-xl lg:text-2xl my-5">
        Module 2: Data Types and variables
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Understanding data types in C++
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Declaring and initializing variables
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Using variables in C++ programs
        </li>
      </ul>
      <h2 className="font-bold text-xl lg:text-2xl my-5">
        Module 3: Operators and Expressions
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Arithmetic, relational, and logical operators
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick />
          Operator precedence and associativity
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Using expressions in C++ programs
        </li>
      </ul>
      <h2 className="font-bold text-xl lg:text-2xl my-5">
        Module 4: Control Flow Statements
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick />
          Conditional statements (if, else if, else)
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick />
          Loops (for, while, do-while)
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Break and continue statements
        </li>
      </ul>
      <h2 className="font-bold text-xl lg:text-2xl my-5">
        Module 5: Functions in C++
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Basics of functions
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Function prototypes and definition
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Passing parameters and returning values
        </li>
      </ul>
      <h2 className="font-bold text-xl lg:text-2xl my-5">
        Module 6: Arrays and Strings
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Declaring and initializing arrays
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Processing arrays in C++
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Working with string literals and functions
        </li>
      </ul>
      <h2 className="font-bold text-xl lg:text-2xl my-5">
        Module 7: Pointers and Dynamic Memory Allocation
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Understanding pointers and addresses
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick />
          Dynamic memory allocation in C++
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Memory management and deallocation
        </li>
      </ul>
      <h2 className="font-bold text-xl lg:text-2xl my-5">
        Module 8: Object-Oriented Programming Basics
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Introduction to classes and objects
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick />
          Encapsulation, inheritance, and polymorphism
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Implementing OOP concepts in C++
        </li>
      </ul>
    </div>
  );
};

export default CplusSyllabus;
