import React from 'react'
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <section id="courses" className="py-24">
          <center className="pb-16">
            <h1 className="text-3xl uppercase font-semibold text-emerald-400">
              Courses For You
            </h1>
          </center>
          <div className='p-10'>
            <h2 className="text-3xl uppercase font-semibold text-gray-700"> Development and Database</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
            <Link to='/development/web-development-course'>
            <div className="cursor-pointer group">
              <div className="h-[250px] mb-5 bg-[url('./web_development.jpg')] bg-cover bg-no-repeat bg-center transition-all duration-500 ease-out group-hover:bg-zoom"></div>
              <div className="p-2">
                <h2 className="text-2xl font-bold text-gray-600">
                  Web Development
                </h2>
                <p className="text-gray-400">
                  Sed libero enim sed faucibus turpis in eu. Sit amet est
                  placerat in. Donec et odio pellentesque diam volutpat
                </p>
                <pre>4 curriculum | 4 months | &#8377; 10000</pre>
              </div>
            </div>
            </Link>
            <Link to="/development/app-development-course">
            <div className="cursor-pointer group">
              <div className="h-[250px] mb-5 bg-[url('./mobile_app_development.jpg')] bg-cover bg-no-repeat bg-center transition-all duration-500 ease-out group-hover:bg-zoom"></div>
              <div className="p-2">
                <h2 className="text-2xl font-bold text-gray-600">
                  Mobile App Development
                </h2>
                <p className="text-gray-400">
                  Sed libero enim sed faucibus turpis in eu. Sit amet est
                  placerat in. Donec et odio pellentesque diam volutpat
                </p>
                <pre>4 curriculum | 4 months | &#8377; 10000</pre>
              </div>
            </div>
            </Link>

            <Link to='/development/software-development-course'>
            <div className="cursor-pointer group">
              <div className="h-[250px] mb-5 bg-[url('./software_development.jpg')] bg-cover bg-no-repeat bg-center transition-all duration-500 ease-out group-hover:bg-zoom"></div>
              <div className="p-2">
                <h2 className="text-2xl font-bold text-gray-600">
                  Software Development
                </h2>
                <p className="text-gray-400">
                  Sed libero enim sed faucibus turpis in eu. Sit amet est
                  placerat in. Donec et odio pellentesque diam volutpat
                </p>
                <pre>4 curriculum | 4 months | &#8377; 10000</pre>
              </div>
            </div>
            </Link>

            <Link to="/development/digital-marketing-course">
            <div className="cursor-pointer">
              <div className="h-[250px] mb-5 bg-[url('./digital_marketing.avif')] bg-cover bg-no-repeat bg-center transition-all duration-500 ease-out group-hover:bg-zoom"></div>
              <div className="p-2">
                <h2 className="text-2xl font-bold text-gray-600">
                  Digital Marketing
                </h2>
                <p className="text-gray-400">
                  Sed libero enim sed faucibus turpis in eu. Sit amet est
                  placerat in. Donec et odio pellentesque diam volutpat
                </p>
                <pre>4 curriculum | 4 months | &#8377; 10000</pre>
              </div>
            </div>
            </Link>

           <Link to="/development/advance-excel-course">
            <div className="cursor-pointer">
              <div className="h-[250px] mb-5 bg-[url('./Excel.webp')] bg-cover bg-no-repeat bg-center transition-all duration-500 ease-out group-hover:bg-zoom"></div>
              <div className="p-2">
                <h2 className="text-2xl font-bold text-gray-600">
                  Advance Excel
                </h2>
                <p className="text-gray-400">
                  Sed libero enim sed faucibus turpis in eu. Sit amet est
                  placerat in. Donec et odio pellentesque diam volutpat
                </p>
                <pre>4 curriculum | 4 months | &#8377; 10000</pre>
              </div>
            </div>
            </Link>

            <Link to="/development/database-course">
            <div className="cursor-pointer">
              <div className="h-[250px] bg-[url('./database.png')] bg-cover bg-no-repeat bg-center transition-all duration-500 ease-out group-hover:bg-zoom"></div>
              <div className="p-2">
                <h2 className="text-2xl font-bold text-gray-600">Database</h2>
                <p className="text-gray-400">
                  Sed libero enim sed faucibus turpis in eu. Sit amet est
                  placerat in. Donec et odio pellentesque diam volutpat
                </p>
                <pre>4 curriculum | 4 months | &#8377; 10000</pre>
              </div>
            </div>
            </Link>
          </div>
          <div className='p-10'>
            <h2 className="text-3xl uppercase font-semibold text-gray-700">Programming For Everyone</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">

            <Link to="/programming/java"> 
            <div className="cursor-pointer group">
              <div className="h-[250px] mb-5 bg-[url('./java_programming.webp')] bg-cover bg-no-repeat bg-center transition-all duration-500 ease-out group-hover:bg-zoom"></div>
              <div className="p-2">
                <h2 className="text-2xl font-bold text-gray-600">
                 Core Java  
                </h2>
                <p className="text-gray-400">
                  Sed libero enim sed faucibus turpis in eu. Sit amet est
                  placerat in. Donec et odio pellentesque diam volutpat
                </p>
                <pre>4 curriculum | 4 months | &#8377; 10000</pre>
              </div>
            </div>
            </Link>
            <Link to="/programming/c">
            <div className="cursor-pointer group">
              <div className="h-[250px] mb-5 bg-[url('./c_programming.png')] bg-cover bg-no-repeat bg-center transition-all duration-500 ease-out group-hover:bg-zoom"></div>
              <div className="p-2">
                <h2 className="text-2xl font-bold text-gray-600">
                  Mastering C Programming
                </h2>
                <p className="text-gray-400">
                  Sed libero enim sed faucibus turpis in eu. Sit amet est
                  placerat in. Donec et odio pellentesque diam volutpat
                </p>
                <pre>4 curriculum | 4 months | &#8377; 10000</pre>
              </div>
            </div>
            </Link>
            <Link to="/programming/c++">
            <div className="cursor-pointer group">
              <div className="h-[250px] mb-5 bg-[url('./c++.jpeg')] bg-cover bg-no-repeat bg-center transition-all duration-500 ease-out group-hover:bg-zoom"></div>
              <div className="p-2">
                <h2 className="text-2xl font-bold text-gray-600">
                  Introduction to C++
                </h2>
                <p className="text-gray-400">
                  Sed libero enim sed faucibus turpis in eu. Sit amet est
                  placerat in. Donec et odio pellentesque diam volutpat
                </p>
                <pre>4 curriculum | 4 months | &#8377; 10000</pre>
              </div>
            </div>
            </Link>
            <Link to="/programming/python">
            <div className="cursor-pointer">
              <div className="h-[250px] mb-5 bg-[url('./python.jpg')] bg-cover bg-no-repeat bg-center transition-all duration-500 ease-out group-hover:bg-zoom"></div>
              <div className="p-2">
                <h2 className="text-2xl font-bold text-gray-600">
                  Python Programming
                </h2>
                <p className="text-gray-400">
                  Sed libero enim sed faucibus turpis in eu. Sit amet est
                  placerat in. Donec et odio pellentesque diam volutpat
                </p>
                <pre>4 curriculum | 4 months | &#8377; 10000</pre>
              </div>
            </div>
            </Link>

         
          </div>
        </section>
  )
}

export default Courses