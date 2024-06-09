import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
const Header = () => {
  return (
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

      <section>
        <RxHamburgerMenu className="text-5xl block lg:hidden" />
      </section>
      <section className="gap-10 hidden lg:flex">
        <Link to="/" className="font-semibold text-xl">
          Home
        </Link>
        <h2 className="font-semibold text-xl">About</h2>
        <h2 className="font-semibold text-xl">Courses</h2>
        <h2 className="font-semibold text-xl">Contact</h2>
      </section>
    </header>
  );
};

export default Header;
