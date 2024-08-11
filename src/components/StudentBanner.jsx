import React from "react";

const StudentBanner = () => {
  return (
    <section className="text-gray-600 body-font bg-teal-50">
      <div className="container mx-auto flex flex-col justify-center px-10 py-24 md:flex-row items-center gap-5">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-xl w-[500px] h-[600px] m-auto"
            alt="param_computers_students"
            src="./students.webp"
            loading="lazy"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Career-Focused <span className="text-teal-400">Programming Courses</span>  in Jhansi
          </h1>
          <p className="mb-8 leading-relaxed">
            A practical-oriented software institute in Jhansi, Param Computers,
            provides an immersive learning experience through hands-on sessions,
            webinars, and structured guidance, aiming to brighten your career in
            the software industry. Param Computers offers top-notch programming
            classes in Jhansi, emphasizing practical learning and IT expertise.
            Thier advanced courses cater to individuals at all skill levels. If
            you're looking to elevate your programming skills, Param Computers
            is the perfect choice, offering comprehensive and dynamic education.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudentBanner;
