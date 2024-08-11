import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { ToggleSliceActions } from '../store/sideBarToggleSlice';
import { courseToggleSliceActions } from "../store/courseToggleSlice.js";
const Sidebar = () => {
  const dispatch = useDispatch();
  const toggle = useSelector(store => store.sideBarToggle);
  const courseToggle = useSelector((store) => store.courseToggle);
  const handleToggle = () => {
    dispatch(ToggleSliceActions.setToggleSlice());
  };
  const handleCourseToggleTrue = () => {
    dispatch(courseToggleSliceActions.setTrue());
  };
  const handleCourseToggleFalse = () => {
    dispatch(courseToggleSliceActions.setFalse());
  };
  return (
    <aside>
       <section className={`gap-10 flex flex-col text-center justify-center items-center  ${!toggle && "hidden"} absolute w-[100vw] bg-white py-10 lg:hidden`}>
        <LinkRouter to="/" className="font-semibold text-xl" onClick={handleToggle}>
          Home
        </LinkRouter>
        <a href="#about" className="font-semibold text-xl" onClick={handleToggle}>About</a>
        <div
            className="relative inline-block text-left"
            onMouseEnter={handleCourseToggleTrue}
            onMouseLeave={handleCourseToggleFalse}
          >
            <div>
              <button
                type="button"
                className="inline-flex font-semibold text-lg w-full justify-center items-center gap-x-1.5 rounded-md bg-white  text-gray-900  hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Courses
                <svg
                  className="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {courseToggle && (
              <div
                className="absolute right-0 z-10 mt-0 w-80 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
                onMouseEnter={handleCourseToggleTrue}
              >
                <div className="py-1" role="none">
                  <div className="px-4 py-2">
                    <h2 className="text-lg font-semibold">Development</h2>
                  </div>

                  <LinkRouter
                    to="/development/web-development-course"
                    className="block px-4 py-2 text-md text-gray-700 hover:bg-teal-50 hover:text-teal-400"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    Web Development
                  </LinkRouter>
                  <LinkRouter
                    to="/development/app-development-course"
                    className="block px-4 py-2 text-md text-gray-700 hover:bg-teal-50 hover:text-teal-400"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    Mobile App Development
                  </LinkRouter>
                  <LinkRouter
                    to="/development/software-development-course"
                    className="block px-4 py-2 text-md text-gray-700 hover:bg-teal-50 hover:text-teal-400"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    Software Development
                  </LinkRouter>
                  <LinkRouter
                    to="/development/digital-marketing-course"
                    className="block px-4 py-2 text-md text-gray-700 hover:bg-teal-50 hover:text-teal-400"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    Digital Marketing
                  </LinkRouter>
                  <LinkRouter
                    to="/development/advance-excel-course"
                    className="block px-4 py-2 text-md text-gray-700 hover:bg-teal-50 hover:text-teal-400"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                   Advance Excel
                  </LinkRouter>
                  <LinkRouter
                    to="/development/database-course"
                    className="block px-4 py-2 text-md text-gray-700 hover:bg-teal-50 hover:text-teal-400"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    DBMS
                  </LinkRouter>
                  <div className="px-4 py-2">
                    <h2 className="text-lg font-semibold">Programming</h2>
                  </div>
                  <LinkRouter
                    to="/programming/c"
                    className="block px-4 py-2 text-md text-gray-700 hover:bg-teal-50 hover:text-teal-400"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    C 
                  </LinkRouter>
                  <LinkRouter
                    to="/programming/c++"
                    className="block px-4 py-2 text-md text-gray-700 hover:bg-teal-50 hover:text-teal-400"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    C++ 
                  </LinkRouter>
                  <LinkRouter
                    to="/programming/java"
                    className="block px-4 py-2 text-md text-gray-700 hover:bg-teal-50 hover:text-teal-400"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    Java 
                  </LinkRouter>
                  <LinkRouter
                    to="/programming/python"
                    className="block px-4 py-2 text-md text-gray-700 hover:bg-teal-50 hover:text-teal-400"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    Python 
                  </LinkRouter>
                </div>
              </div>
            )}
          </div>
        <a href="#contact" className="font-semibold text-xl" onClick={handleToggle}>Contact</a>
        <button onClick={handleToggle}><RxCross2 /></button>
      </section>
    </aside>
  )
}

export default Sidebar