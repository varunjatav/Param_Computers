import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import Sidebar from "./Aside.jsx";
import { useDispatch, useSelector } from "react-redux";
import { ToggleSliceActions } from "../store/sideBarToggleSlice.js";
const Header = () => {


  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(ToggleSliceActions.setToggleSlice());
  };
  return (
    <>
    <header className="flex py-3 px-10 justify-between items-center">
      <section>
        <Link to="/">
          <img
            src="./Param_Computers_logo.jpg"
            alt="param-computers-logo"
            width={"100px"}
            height={"100px"}
          />
        </Link>
      </section>

      <button onClick={handleToggle}>
        <RxHamburgerMenu className="text-5xl block lg:hidden" />
      </button>
      <section className={`gap-10 hidden lg:flex`}>
        <Link to="/" className="font-semibold text-xl hover:text-teal-400 focus:text-teal-400">
          Home
        </Link>
        <a href="/#about" className="font-semibold text-xl hover:text-teal-400 focus:text-teal-400">About</a>
        <a href="/#courses" className="font-semibold text-xl hover:text-teal-400 focus:text-teal-400">Courses</a>
        <a href="/#contact" className="font-semibold text-xl hover:text-teal-400 focus:text-teal-400 active:text-teal-400">Contact</a>
      </section>
    </header>
    <Sidebar/>
    </>
  );
};

export default Header;
