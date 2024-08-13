import React from "react";
import { GrTechnology } from "react-icons/gr";
import { GoProjectSymlink } from "react-icons/go";
import { SiFuturelearn } from "react-icons/si";
import MentorSlider from "../components/Mentors";
import SlideInFromLeft from "../components/SlideInFromLeft";
import SlideInFromRight from "../components/SlideInFromRight";

const AboutUs = () => {
  return (
    <>
      <section className="p-10 my-10 w-[95%] lg:w-[90%] m-auto mt-20 pt-10">
        <SlideInFromLeft>
        <h2 className="text-3xl text-center font-semibold pb-4">Who Are We</h2>
        </SlideInFromLeft>
        <div className="border-4 border-teal-400 w-32 m-auto rounded-md"></div>
        <SlideInFromRight>
        <p className="text-lg text-gray-500 pt-5  m-auto">
          Welcome to Param Computers, pioneering computer eductaion since 2001.
          We empower individual for success in a digital landscape. With 23
          years of expertise, We've guided countless students in mastering
          computer science and technology. Our dynamic environment fosters
          creativity, critical thinking, and innovation. Experienced educators
          provide top-quality instruction and personalized support.
        </p>
        </SlideInFromRight>
      </section>
      <section className="p-10 my-10 w-[90%] m-auto">
      <SlideInFromLeft>
        <h2 className="text-3xl text-center font-semibold pb-4">
          Why Choose Us
        </h2>
        </SlideInFromLeft>
        <div className="border-4 border-teal-400 w-32 m-auto rounded-md"></div>
        <SlideInFromRight>
        <section className="flex flex-col lg:flex-row gap-10 justify-around py-5">
          <div className="group block max-w-sm mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-teal-400 hover:ring-teal-500">
        
            <div className="flex items-center space-x-3">
              <GrTechnology className="text-2xl group-hover:text-white" />
              <h3 className="text-slate-900 group-hover:text-white  font-semibold text-xl">
                Latest IT Courses
              </h3>
            </div>
           
            <p className="text-slate-500 group-hover:text-white text-sm">
              Stay Ahead of Cutting Edge Knowledge: Expolre Our Latest IT
              Courses
            </p>
          </div>
          <div className="group block max-w-sm mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-teal-400 hover:ring-teal-500">
            <div className="flex items-center space-x-3">
              <GoProjectSymlink className="text-2xl group-hover:text-white" />
              <h3 className="text-slate-900 group-hover:text-white  font-semibold text-xl">
                Live Project Training
              </h3>
            </div>
            <p className="text-slate-500 group-hover:text-white text-sm">
              Experience Real-World Learning : Enroll in our Live Project Training Program
            </p>
          </div>
          <div className="group block max-w-sm mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-teal-400 hover:ring-teal-500">
            <div className="flex items-center space-x-3">
              <SiFuturelearn className="text-2xl group-hover:text-white" />
              <h3 className="text-slate-900 group-hover:text-white  font-semibold text-xl">
                Dynamic Learning Environment
              </h3>
            </div>
            <p className="text-slate-500 group-hover:text-white text-sm">
              Active engagement, critical thinking, abd continous growth,
              preparing students to thrive in an ever-changing world
            </p>
          </div>
        </section>
        </SlideInFromRight>
        <MentorSlider/>
      </section>
    </>
  );
};

export default AboutUs;
