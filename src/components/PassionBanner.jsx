import React from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FcAssistant } from "react-icons/fc";
import { RiCalendarScheduleLine } from "react-icons/ri";
const PassionBanner = () => {
  return (
    <section className="text-gray-600 body-font bg-teal-50 my-20">
      <div className="container mx-auto flex px-10 py-24 md:flex-row flex-col items-center gap-5">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Igniting A <span className="text-teal-400">Passion</span> That Will
            Propel You Forward
          </h1>
          <p className="mb-8 leading-relaxed">
            A practical-oriented software institute in Jhansi, Param Computers,
            provides an immersive learning experience through hands-on sessions,
            webinars, and structured guidance, aiming to brighten your career in
            the software industry. Param Computers offers top-notch programming
            classes in Jhansi, emphasizing practical learning and IT expertise.
            Their advanced courses cater to individuals at all skill levels. If
            you're looking to elevate your programming skills, Param Computers
            is the perfect choice, offering comprehensive and dynamic education.
          </p>
          <section className="flex flex-col lg:flex-row items-center justify-between">
            <article>
              <div className="bg-teal-400 rounded-md h-12 w-12 mb-4 flex items-center justify-center m-auto md:m-0">
                <FcAssistant className="text-3xl text-teal-800" />
              </div>
              <h3 className="text-teal-800 text-xl font-bold">
                24/7 Live Support
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, consectetur.
              </p>
            </article>
            <article>
              <div className="bg-teal-400 rounded-md h-12 w-12 mb-4 flex items-center justify-center  m-auto md:m-0">
                <MdOutlineMarkEmailRead className="text-3xl text-teal-800" />
              </div>
              <h3 className="text-teal-800 text-xl font-bold">
                Email Assistance
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, consectetur.
              </p>
            </article>
            <article>
              <div className="bg-teal-400 rounded-md h-12 w-12 mb-4 flex items-center justify-center m-auto md:m-0">
                <RiCalendarScheduleLine className="text-3xl text-teal-800 " />
              </div>
              <h3 className="text-teal-800 text-xl font-bold">
               Book your Schedule
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, consectetur.
              </p>
            </article>
          </section>
        </div>
        <div className="lg:max-w-lg lg:w-full w-5/6 md:w-1/2 ">
          <img
            className="object-cover object-center rounded-xl w-[1000px] h-[600px] m-auto"
            alt="param_computers_students"
            src="./passion.jpg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default PassionBanner;
