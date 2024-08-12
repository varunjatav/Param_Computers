import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { ToggleSliceActions } from "../store/sideBarToggleSlice";
import { courseToggleSliceActions } from "../store/courseToggleSlice.js";
const Sidebar = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((store) => store.sideBarToggle);
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
    <>
      {" "}
      <aside
        className={`fixed z-10 top-[108px] w-[80vw] max-h-[100vh] h-[100vh] overflow-y-auto transition-transform duration-500 ${
          toggle ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <section
          className={`gap-10 flex flex-col text-center justify-center items-center bg-white py-10 lg:hidden`}
        >
          <LinkRouter
            to="/"
            className="font-semibold text-xl"
            onClick={handleToggle}
          >
            Home
          </LinkRouter>
          <LinkRouter
            to="/about-us"
            className="font-semibold text-xl"
            onClick={handleToggle}
          >
            About
          </LinkRouter>
          <div className="flex flex-col text-left">
            <button
              className="inline-flex font-semibold text-lg w-full text-center m-auto justify-center items-center gap-x-1.5 rounded-md bg-white  text-gray-900  hover:bg-gray-50"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={
                courseToggle ? handleCourseToggleFalse : handleCourseToggleTrue
              }
            >
              Courses
            </button>

            <div
              className={`overflow-hidden transition-transform duration-500 ease-in-out ${
                courseToggle
                  ? "max-h-[700px] translate-y-0"
                  : "max-h-0 -translate-y-5"
              }`}
            >
              <div className="px-4 py-2">
                <h2 className="text-lg font-semibold">Development</h2>
              </div>
              <LinkRouter
                to="/development/web-development-course"
                className="block px-4 py-2 text-md text-gray-700 hover:bg-teal-50 hover:text-teal-400"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
                onClick={handleToggle}
              >
                Web Development
              </LinkRouter>
              <LinkRouter
                to="/development/app-development-course"
                className="block px-4 py-2 text-md text-gray-700 hover:bg-teal-50 hover:text-teal-400"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={handleToggle}
              >
                Mobile App Development
              </LinkRouter>
              <LinkRouter
                to="/development/software-development-course"
                className="block px-4 py-2 text-md text-gray-700 hover:bg-teal-50 hover:text-teal-400"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={handleToggle}
              >
                Software Development
              </LinkRouter>
              <LinkRouter
                to="/development/digital-marketing-course"
                className="block px-4 py-2 text-md text-gray-700 hover:bg-teal-50 hover:text-teal-400"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={handleToggle}
              >
                Digital Marketing
              </LinkRouter>
              <LinkRouter
                to="/development/advance-excel-course"
                className="block px-4 py-2 text-md text-gray-700 hover:bg-teal-50 hover:text-teal-400"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={handleToggle}
              >
                Advance Excel
              </LinkRouter>
              <LinkRouter
                to="/development/database-course"
                className="block px-4 py-2 text-md text-gray-700 hover:bg-teal-50 hover:text-teal-400"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={handleToggle}
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
                onClick={handleToggle}
              >
                C
              </LinkRouter>
              <LinkRouter
                to="/programming/c++"
                className="block px-4 py-2 text-md text-gray-700 hover:bg-teal-50 hover:text-teal-400"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={handleToggle}
              >
                C++
              </LinkRouter>
              <LinkRouter
                to="/programming/java"
                className="block px-4 py-2 text-md text-gray-700 hover:bg-teal-50 hover:text-teal-400"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={handleToggle}
              >
                Java
              </LinkRouter>
              <LinkRouter
                to="/programming/python"
                className="block px-4 py-2 text-md text-gray-700 hover:bg-teal-50 hover:text-teal-400"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={handleToggle}
              >
                Python
              </LinkRouter>
            </div>
          </div>

          <LinkRouter
            to="/contact-us"
            className="font-semibold text-xl"
            onClick={handleToggle}
          >
            Contact
          </LinkRouter>
        </section>
      </aside>
    </>
  );
};

export default Sidebar;
