import React from "react";

const MainContainer = () => {
  return (
    <>
      <main className="container">
        <section
          id="hero_image"
          className="bg-gradient-to-b from-white to-emerald-100"
        >
          <center>
            <h1 className="text-7xl font-semibold leading-[100px] uppercase">
              <span className="text-emerald-400">
                Computer Coaching Institute
              </span>
              <br />
              in Jhansi
            </h1>
          </center>
          <section className="flex px-10 items-center justify-center">
            <div className="flex-1">
              <img src="./coding-student.png" alt="coding student image" />
            </div>
            <div className="flex-1">
              <h2 className="color-gray-300">
                Kodyfier – Top IT Training Institute in Pune is an ideal place
                for individuals looking to upgrade their skills and advance
                their careers in the fast-growing tech industry. Offering a
                plethora of IT courses, including popular courses such as Web
                Development courses and Software classes in Pune, the Institute
                provides hands-on training and practical experience to help
                students stay ahead of the curve.
              </h2>
            </div>
          </section>
        </section>

        <section id="courses" className="mt-10">
          <center className="mb-5">
            <h1 className="text-3xl uppercase font-semibold text-emerald-400">
              Courses For You
            </h1>
          </center>

          <div className="grid grid-cols-3 gap-10  px-10">

          <div className="rounded-t-[20px]">
              <div className="rounded-t-[20px]">
                <img
                  src="./web_development.jpg"
                  alt="web development image"
                  className="rounded-[20px]  h-80"
                />
              </div>
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

            <div className="rounded-t-[20px]">
              <div className="rounded-t-[20px] cursor-pointer">
                <img
                  src="./app_development.jpg"
                  alt="app development image"
                  className="rounded-[20px] h-80"
                />
              </div>
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

       

            <div className="rounded-t-[20px]">
              <div className="rounded-t-[20px]">
                <img
                  src="./software_development.jpg"
                  alt="software development image"
                  className="rounded-[20px]  h-80"
                />
              </div>
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

            <div className="rounded-t-[20px]">
              <div className="rounded-t-[20px]">
                <img
                  src="./digital_marketing.avif"
                  alt="digital marketing image"
                  className="rounded-[20px]  h-80"
                />
              </div>
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



            <div className="rounded-t-[20px]">
              <div className="rounded-t-[20px]">
                <img
                  src="./Excel.jpg"
                  alt="excel image"
                  className="rounded-[20px]  h-80"
                />
              </div>
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

            <div className="rounded-t-[20px]">
              <div className="rounded-t-[20px]">
                <img
                  src="./database.jpg"
                  alt="Database image"
                  className="rounded-[20px]  h-80"
                />
              </div>
              <div className="p-2">
                <h2 className="text-2xl font-bold text-gray-600">
                  Database
                </h2>
                <p className="text-gray-400">
                  Sed libero enim sed faucibus turpis in eu. Sit amet est
                  placerat in. Donec et odio pellentesque diam volutpat
                </p>
                <pre>4 curriculum | 4 months | &#8377; 10000</pre>
              </div>
            </div>



          </div>
        </section>
      </main>
    </>
  );
};

export default MainContainer;
