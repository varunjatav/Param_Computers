import React from "react";
import { TiTick } from "react-icons/ti";

const DatabaseOverview = () => {
  return (
    <div className="px-4 py-10">
      <h1 className="font-bold text-2xl lg:text-3xl mb-5">Description</h1>
      <p>
        Uncover the backbone of modern data-driven applications with Database
        Management Systems at Param Computers. Dive into the heart of
        information organization, storage, and retrieval, mastering essential
        concepts and cutting-edge technologies. From relational databases like
        MySQL and PostgreSQL to NoSQL solutions like MongoDB, our courses cover
        a diverse array of database systems to suit every need. Learn from
        industry experts who will guide you through the intricacies of database
        design, optimization, and administration, empowering you to build
        robust, scalable data solutions. Whether you're a beginner or seasoned
        professional, our flexible online or offline programs provide the
        perfect environment to elevate your skills and excel in the world of
        data management. Join us at Param Computers and embark on a journey to
        become a proficient database administrator or developer. Enroll now and
        unlock the gateway to a rewarding career in the realm of data
      </p>
      <h1 className="font-bold text-2xl lg:text-3xl my-5">What you will master</h1>
      <ul>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> SQL
        </li>
        <li className="flex items-center gap-3 mb-2 text-gray-500">
          <TiTick /> MySQL
        </li>
      
      </ul>
    </div>
  );
};

export default DatabaseOverview;
