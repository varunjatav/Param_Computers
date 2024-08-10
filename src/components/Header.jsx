import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import Sidebar from "./Aside.jsx";
import { useDispatch } from "react-redux";
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
        <LinkRouter to="/">
          <img
            src="./Param_Computers_logo.jpg"
            alt="param-computers-logo"
            width={"100px"}
            height={"100px"}
          />
        </LinkRouter>
      </section>

      <button onClick={handleToggle}>
        <RxHamburgerMenu className="text-5xl block lg:hidden" />
      </button>
      <section className={`gap-10 hidden lg:flex`}>
        <LinkRouter to="/" smooth={true} duration={500} className="font-semibold text-xl hover:text-teal-400 focus:text-teal-400 cursor-pointer">
          Home
        </LinkRouter>

        <LinkScroll to="about" smooth={true} duration={200} className="font-semibold text-xl hover:text-teal-400 focus:text-teal-400 cursor-pointer">About</LinkScroll>

        <LinkScroll to="courses" smooth={true} duration={200} className="font-semibold text-xl hover:text-teal-400 active:text-teal-400 focus:text-teal-400 cursor-pointer">Courses</LinkScroll>
        <LinkScroll to="contact" smooth={true} duration={200} className="font-semibold text-xl hover:text-teal-400 cursor-pointer focus:text-teal-400 active:text-teal-400">Contact</LinkScroll>
      </section>
    </header>
    <Sidebar/>
    </>
  );
};

export default Header;
