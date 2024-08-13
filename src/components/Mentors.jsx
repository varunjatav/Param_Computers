import React from "react";

import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import SlideAnimation from "./SlideInFromLeft";

const sliderImageUrl = [
  //First image url
  {
    url: "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg",
  },
  {
    url: "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg",
  },
  //Second image url
  {
    url: "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg",
  },
  //Third image url
  {
    url: "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg",
  },

  //Fourth image url

  {
    url: "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg",
  },
];
const MentorSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide:0,
    responsive:[
      {
        breakpoint: 1024,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
      ,
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide:2,
        }
      },
    ]
  };

  return (
    <section className="w-[95%] m-auto">
      <center className="py-14">
        <SlideAnimation>
        <h1 className="text-3xl uppercase font-semibold pb-4">
          Get to <span className="text-teal-400 "> Know Your </span> Mentors
        </h1>
        </SlideAnimation>
        <div className="border-4 border-teal-400 w-32 m-auto rounded-md"></div>
      </center>
      <div className="slider-container">
        <Slider {...settings}>
          {sliderImageUrl.map((imageUrl, index) => {
            return (
              <div key={index}>
                <img
                  src={imageUrl.url}
                  alt="mentors"
                  className="h-80 w-80 m-auto"
                  style={{ borderRadius: "20px 20px 0 0" }}
                  loading="lazy"
                />
                <center>
                  <h3 className="font-bold text-2xl font-mono">Jack</h3>
                  <p className="text-gray-600 font-semibold">Social teacher</p>
                </center>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};
export default MentorSlider;
