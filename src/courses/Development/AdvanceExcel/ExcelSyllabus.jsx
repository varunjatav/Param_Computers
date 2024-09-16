import React from "react";
import { TiTick } from "react-icons/ti";

const ExcelSyllabus = () => {
  return (
    <div className="px-4 pt-10">
      <h1 className="font-bold text-2xl lg:text-3xl my-5">
        Detailed Course Outline
      </h1>
      <h2 className="font-bold text-xl lg:text-2xl my-5">Microsoft Excel</h2>
      <h2 className="font-bold text-xl lg:text-2xl my-5">
        Module 1: Introduction to Microsoft Excel
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Overview of Microsoft Excel and its Uses
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Understanding the Excel Interface (Workbook, Worksheet,
          Ribbon, Tabs, Status Bar)
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Navigating Worksheets and Workbooks
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Creating, Saving, and Opening Excel Files
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Basic Excel Terminology (Cell, Row, Column, Range, etc.)
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Entering and Editing Data (Text, Numbers, Dates)
        </li>
      </ul>

      <h2 className="font-bold text-xl lg:text-2xl my-5">
        Module 2: Working with Worksheets
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Inserting, Renaming, and Deleting Worksheets
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Understanding Rows, Columns, and Cells
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Selecting Cells and Ranges
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Inserting and Deleting Rows and Columns
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Adjusting Row Height and Column Width
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Freezing and Unfreezing Panes for Easy Navigation
        </li>
      </ul>

      <h2 className="font-bold text-xl lg:text-2xl my-5">
        Module 3: Basic Formatting
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Formatting Cells (Text Alignment, Font Styles, Colors,
          Borders)
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Using Format Painter to Copy Formats
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Number Formatting (Currency, Date, Percentage, etc.)
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Applying Cell Styles and Themes
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Adjusting Text Wrap, Merge & Center
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Conditional Formatting Basics
        </li>
      </ul>

      <h2 className="font-bold text-xl lg:text-2xl my-5">
        Module 4: Working with Formulas and Functions
      </h2>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Introduction to Formulas (Basic Syntax and Structure)
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Understanding Cell References (Relative, Absolute, Mixed)
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Basic Arithmetic Operations (Addition, Subtraction,
          Multiplication, Division)
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> Using Common Functions:
        </li>
        <ul className="ml-8 list-disc text-gray-500">
          <li className="mb-2">SUM</li>
          <li className="mb-2">AVERAGE</li>
        </ul>
      </ul>
    </div>
  );
};

export default ExcelSyllabus;
