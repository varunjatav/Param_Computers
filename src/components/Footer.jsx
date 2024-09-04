import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import logoImg from "../assets/images/Param_Computers_logo.jpg";
const Footer = () => {
  return (
    <footer id="contact" className="mt-10 bg-teal-50">
      <div className="flex justify-between items-center p-10 flex-col lg:flex-row">
        <section>
          <img
            src={logoImg}
            alt="param computers logo"
            width={"50px"}
            height={"50px"}
            className="rounded-full m-auto lg:m-0"
          />
          <h3 className="text-gray-600 text-lg font-medium mt-5  text-center lg:text-left">Advance your Career with Tech Training from Param Computers.</h3>
        </section>
        <section>
          <h2 className="text-2xl font-bold font-mono  text-center lg:text-left">Connect with us</h2>
          <section className="flex flex-col items-center justify-between mt-5">
            <a href="whatsapp:contact=7355522487"className="flex items-center gap-2">
              <FaWhatsapp className="text-xl text-green-600" />{" "}
              <span className="font-semibold">+91 735 5522487</span>
            </a>
            <a href="tel:+91 6386283480" className="flex items-center gap-2">
              <IoIosCall className="text-xl" />{" "}
              <span className="font-semibold">+91 6386283480</span>
            </a>
            <a href="mailto:info@paramcomputers.co.in" className="flex items-center gap-2">
              <MdOutlineEmail className="text-xl text-red-600" />{" "}
              <span className="font-semibold italic">
                info@paramcomputers.co.in
              </span>
            </a>
          </section>
        </section>
      </div>
      <hr />
      <div className="py-5">
        <h3 className="text-lg font-light text-center">
        &#169;   2024 Param Computers. All right preserved
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
