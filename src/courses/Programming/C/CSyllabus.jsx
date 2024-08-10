import React from "react";
import { TiTick } from "react-icons/ti";

const CSyllabus = () => {
  return (
    <div className="px-4 pt-10">
      <h1 className="font-bold text-2xl lg:text-3xl my-5">
        Detailed Course Outline
      </h1>
      <h2 className="font-bold text-xl lg:text-2xl my-5">
        Module 1: Introduction to C Programming
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Overview of C language and its importance
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Setting up the development environment
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Basic programming concepts and structure
        </li>
      </ul>
      <h2 className="font-bold text-xl lg:text-2xl my-5">
        Module 2: Data Types and variables
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Different data types in C
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Variable declaration, initialization, and scope
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Operators and expressions in C
        </li>
      </ul>
      <h2 className="font-bold text-xl lg:text-2xl my-5">
        Module 3: Operators and Expressions
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Conditional statements (if, else if, else)
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick />
          Loops (while, for, do-while)
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Switch statements and decision-making constructs
        </li>
      </ul>
      <h2 className="font-bold text-xl lg:text-2xl my-5">
        Module 4: Functions and Modular Programming
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick />
          Declaring and defining functions
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick />
          Scope of variables in functions
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Recursive functions and function prototypes
        </li>
      </ul>
      <h2 className="font-bold text-xl lg:text-2xl my-5">
        Module 5: Arrays and Strings
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Declaring and initializing arrays
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Manipulating and traversing arrays
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> String handling and standard library functions
        </li>
      </ul>
      <h2 className="font-bold text-xl lg:text-2xl my-5">
        Module 6: Pointers and Memory Management
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Understanding pointers and their uses
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Pointers and arrays relationship
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick />Dynamic memory allocation and deallocation in C
        </li>
      </ul>
      <h2 className="font-bold text-xl lg:text-2xl my-5">
        Module 7: Structures and Unions
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Defining structures and unions
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick />
          Accessing structure members
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Operations on structures and unions

        </li>
      </ul>
      <h2 className="font-bold text-xl lg:text-2xl my-5">
        Module 8: File Handling and Preprocessor Directives
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Working with files in C
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick />
          Preprocessor directives and their applications
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Header files and macro definitions
        </li>
      </ul>
    </div>
  );
};

export default CSyllabus;
