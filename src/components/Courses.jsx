import React from "react";
import { Link } from "react-router-dom";

import SlideInFromLeft from "./SlideInFromLeft";

const Courses = () => {
  return (
    <section id="courses" className="py-24">
      <center className="pb-16">
        <SlideInFromLeft>
          <h1 className="text-3xl uppercase font-semibold text-teal-400">
            Courses For You
          </h1>
        </SlideInFromLeft>
      </center>
      <div className="p-10">
        <SlideInFromLeft>
          <h2 className="text-3xl uppercase font-semibold text-gray-700">
            {" "}
            Development and Database
          </h2>
        </SlideInFromLeft>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        <Link to="/development/web-development-course">
          <div className="cursor-pointer group">
            <div className="h-[250px] mb-5 bg-[url('https://static.vecteezy.com/system/resources/previews/000/271/024/non_2x/vector-web-development-web-banner.jpg')] bg-cover bg-no-repeat bg-center transition-all duration-500 ease-out group-hover:bg-zoom"></div>
            <div className="p-2">
              <h2 className="text-2xl font-bold text-gray-600">
                Web Development
              </h2>

              <p className="text-gray-400">
                Master Full Stack Web Development to bridge front-end design
                with back-end functionality, essential for creating robust web
                applications.
              </p>

              <pre>7 modules | 6 months | &#8377; 19,999</pre>
            </div>
          </div>
        </Link>
        <Link to="/development/advance-excel-course">
          <div className="cursor-pointer">
            <div className="h-[250px] mb-5 bg-[url('https://images.ctfassets.net/lzny33ho1g45/2S0H6GfYCc2HqJb0tQIvPQ/f188f5eb70a93984e9b42153d257e622/excel_hero.jpg?w=1520&fm=jpg&q=30&fit=thumb&h=760')] bg-cover bg-no-repeat bg-center transition-all duration-500 ease-out group-hover:bg-zoom"></div>
            <div className="p-2">
              <h2 className="text-2xl font-bold text-gray-600">
                Advance Excel
              </h2>
              <p className="text-gray-400">
                Master Advanced Excel at Param Computers to boost productivity
                and make data-driven decisions. Learn macros, pivot tables, and
                more with our hands-on courses. Enroll today!
              </p>
              <pre>4 modules | 4 months | &#8377; 4999</pre>
            </div>
          </div>
        </Link>

        <Link to="/development/database-course">
          <div className="cursor-pointer">
            <div className="h-[250px] mb-5 bg-[url('https://learnsql.com/blog/what-is-dbms/DBMS.png')] bg-cover bg-no-repeat bg-center transition-all duration-500 ease-out group-hover:bg-zoom"></div>
            <div className="p-2">
              <h2 className="text-2xl font-bold text-gray-600">Database</h2>
              <p className="text-gray-400">
                Master Database Management Systems at Param Computers. Learn
                SQL and MySQL from experts to excel in data
                management. Enroll now and elevate your career.
              </p>
              <pre>12 modules | 4 months | &#8377; 4999</pre>
            </div>
          </div>
        </Link>

        {/* <Link to="/development/app-development-course"> */}
        <div className="cursor-pointer group">
          <div className="h-[250px] mb-5 bg-[url('https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg')] bg-cover bg-no-repeat bg-center transition-all duration-500 ease-out group-hover:bg-zoom"></div>
          <div className="p-2">
            <h2 className="text-2xl font-bold text-gray-600 relative">
              Mobile App Development{" "}
              <span className="text-sm font-semibold text-white bg-red-600 p-1 rounded-md absolute right-0">
                Coming Soon *
              </span>
            </h2>
            <p className="text-gray-400">
              Sed libero enim sed faucibus turpis in eu. Sit amet est placerat
              in. Donec et odio pellentesque diam volutpat
            </p>
            <pre>4 curriculum | 4 months | &#8377; 10000</pre>
          </div>
        </div>
        {/* </Link> */}

        {/* <Link to="/development/software-development-course"> */}
        <div className="cursor-pointer group">
          <div className="h-[250px] mb-5 bg-[url('https://assets.rbl.ms/25591710/origin.jpg')] bg-cover bg-no-repeat bg-center transition-all duration-500 ease-out group-hover:bg-zoom"></div>
          <div className="p-2">
            <h2 className="text-2xl font-bold text-gray-600 relative">
              Software Development{" "}
              <span className="text-sm font-semibold text-white bg-red-600 p-1 rounded-md absolute right-0">
                Coming Soon *
              </span>
            </h2>
            <p className="text-gray-400">
              Sed libero enim sed faucibus turpis in eu. Sit amet est placerat
              in. Donec et odio pellentesque diam volutpat
            </p>
            <pre>4 curriculum | 4 months | &#8377; 10000</pre>
          </div>
        </div>
        {/* </Link> */}

        {/* <Link to="/development/digital-marketing-course"> */}
        <div className="cursor-pointer">
          <div className="h-[250px] mb-5 bg-[url('https://www.berlinsbi.com/uploads/sites/2/2021/12/5-ways-msc-digital-marketing-will-advance-your-career.jpg')] bg-cover bg-no-repeat bg-center transition-all duration-500 ease-out group-hover:bg-zoom"></div>
          <div className="p-2">
            <h2 className="text-2xl font-bold text-gray-600 relative">
              Digital Marketing{" "}
              <span className="text-sm font-semibold text-white bg-red-600 p-1 rounded-md absolute right-0">
                Coming Soon *
              </span>
            </h2>

            <p className="text-gray-400">
              Master essential digital marketing skills to navigate and succeed
              in today's rapidly evolving digital landscape.
            </p>
            <pre>4 curriculum | 5 months | &#8377; 15999</pre>
          </div>
        </div>
        {/* </Link> */}
      </div>
      <div className="p-10">
        <SlideInFromLeft>
          <h2 className="text-3xl uppercase font-semibold text-gray-700">
            Programming For Everyone
          </h2>
        </SlideInFromLeft>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        <Link to="/programming/java">
          <div className="cursor-pointer group">
            <div className="h-[250px] mb-5 bg-[url('https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png')] bg-cover bg-no-repeat bg-center transition-all duration-500 ease-out group-hover:bg-zoom"></div>
            <div className="p-2">
              <h2 className="text-2xl font-bold text-gray-600">Core Java</h2>
              <p className="text-gray-400">
                Master Java at Param Computers, where expert-led courses empower
                you with the skills for a thriving tech career. Enroll now to
                unlock limitless opportunities in coding.
              </p>
              <pre>8 modules | 3 months | &#8377; 5999</pre>
            </div>
          </div>
        </Link>
        <Link to="/programming/c">
          <div className="cursor-pointer group">
            <div className="h-[250px] mb-5 bg-[url('https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230630120259/C-Language-Introduction.png')] bg-cover bg-no-repeat bg-center transition-all duration-500 ease-out group-hover:bg-zoom"></div>
            <div className="p-2">
              <h2 className="text-2xl font-bold text-gray-600">
                Mastering C Programming
              </h2>
              <p className="text-gray-400">
                Advance your coding with C at Param Computers! Our courses for
                all levels offer essential skills and practical experience. Join
                us online or offline to boost your tech career
              </p>
              <pre>8 modules | 3 months | &#8377; 4999</pre>
            </div>
          </div>
        </Link>
        <Link to="/programming/c++">
          <div className="cursor-pointer group">
            <div className="h-[250px] mb-5 bg-[url('https://d3mxt5v3yxgcsr.cloudfront.net/courses/7934/course_7934_image.jpeg')] bg-cover bg-no-repeat bg-center transition-all duration-500 ease-out group-hover:bg-zoom"></div>
            <div className="p-2">
              <h2 className="text-2xl font-bold text-gray-600">
                Introduction to C++
              </h2>
              <p className="text-gray-400">
                Master C++ at Param Computers with expert-led courses for all
                skill levels. Join us online or offline and boost your tech
                career with cutting-edge programming skills.
              </p>
              <pre>8 modules | 3 months | &#8377; 5999</pre>
            </div>
          </div>
        </Link>
        <Link to="/programming/python">
          <div className="cursor-pointer">
            <div className="h-[250px] mb-5 bg-[url('https://c4.wallpaperflare.com/wallpaper/645/96/47/python-programming-programming-programming-language-code-hd-wallpaper-preview.jpg')] bg-cover bg-no-repeat bg-center transition-all duration-500 ease-out group-hover:bg-zoom"></div>
            <div className="p-2">
              <h2 className="text-2xl font-bold text-gray-600">
                Python Programming
              </h2>
              <p className="text-gray-400">
                Sed libero enim sed faucibus turpis in eu. Sit amet est placerat
                in. Donec et odio pellentesque diam volutpat
              </p>
              <pre>8 modules | 3 months | &#8377; 4999</pre>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Courses;
