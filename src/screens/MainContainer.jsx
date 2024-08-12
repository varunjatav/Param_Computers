import React from "react";
import Courses from "../components/Courses";
import MentorSlider from "../components/Mentors";
import StudentBanner from "../components/StudentBanner";
import PassionBanner from "../components/PassionBanner";
import ContactForm from "../components/ContactForm";
import HeroSection from "../components/HeroSection";


const MainContainer = () => {
  return (
    <>
      <main >
      <HeroSection/>

       <Courses/>
       <StudentBanner/>
       <MentorSlider/>
       <PassionBanner/>
       <ContactForm/>
      </main>
    </>
  );
};

export default MainContainer;
