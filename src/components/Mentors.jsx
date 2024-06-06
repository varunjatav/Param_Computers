import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const sliderImageUrl = [
  //First image url
  {
    url:
      "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg"
  },
  {
    url:
      "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg"
  },
  //Second image url
  {
    url:
      "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg"
  },
  //Third image url
  {
    url:
      "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg"
  },

  //Fourth image url

  {
    url:
      "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg"
  }
];
const Slider = () => {
  return (
<section>
    <center className="mb-5">
    <h1 className="text-3xl uppercase font-semibold ">
      Get to <span className='text-emerald-400'> Know Your </span> Mentors
    </h1>
  </center>
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >

        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="movie" />
              <center>
                    <h3 className='font-bold text-2xl font-mono'>Jack</h3>
                    <p className='text-gray-600 font-semibold'>Social teacher</p>
                </center>
            </div>
          );
        })}
      </Carousel>
    </div>
    </section>
  );
};
export default Slider;
