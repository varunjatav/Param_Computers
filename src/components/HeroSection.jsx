import React from 'react'

const HeroSection = () => {
  return (
    <section
    id="hero_image"
    className="bg-gradient-to-b from-white to-teal-100 mt-20 pt-10"
  >
    <center>
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-[60px] lg:leading-[100px] uppercase">
        <span className="text-teal-400">
          Computer Coaching Institute
        </span>
        <br />
        in Jhansi
      </h1>
    </center>
    <section className="flex px-10 items-center justify-center flex-col lg:flex-row gap-10 lg:gap-0 pt-20 lg:pt-0">
      <div className="flex-1 order-2 ">
        <img src="./coding-student.png" alt="coding student image" />
      </div>
      <div className="flex-1">
        <h2 className="color-gray-300 text-center lg:text-left">
          Param Computer – Premier Computer Coaching Center in Jhansi is the
          perfect destination for individuals aiming to enhance their
          skills and advance their careers in the rapidly evolving tech
          industry. Offering a wide range of computer courses, including
          in-demand courses such as Web Development and Software Training
          in Jhansi, the center provides hands-on learning and practical
          experience to help students stay at the forefront of technology.
        </h2>
      </div>
    </section>
  </section>
  )
}

export default HeroSection