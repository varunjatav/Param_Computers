import React from "react";
import { TiTick } from "react-icons/ti";

const WebOverview = () => {
  return (
    <div className="px-4 pt-10">
      <h1 className="font-bold text-2xl lg:text-3xl mb-5">Description</h1>
      <p>
        Discover the power of crafting immersive digital experiences through web
        development at Param Computers. Whether you're drawn to the artistry of
        front-end design or the intricacies of back-end functionality, our
        institution provides the perfect platform to hone your skills. From
        mastering HTML, CSS, and JavaScript to delving into frameworks like
        React and Angular, our comprehensive courses cover the full spectrum of
        web development technologies. Led by seasoned professionals, our
        programs blend theory with hands-on practice, ensuring you're equipped
        to tackle real-world challenges in the ever-evolving digital landscape.
        Join our dynamic learning community online or offline, and unlock the
        potential to create captivating websites and web applications that leave
        a lasting impact. Embrace the future of digital innovation with Param
        Computers. Enroll now and embark on a journey to become a proficient web
        developer
      </p>
      <h1 className="font-bold text-2xl lg:text-3xl my-5">What you will master</h1>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> HTML
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> CSS
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> JS
        </li>
      </ul>
    </div>
  );
};

export default WebOverview;
