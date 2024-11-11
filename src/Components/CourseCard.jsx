import React from "react";
import course from "../constants/Course";
import { Link } from "react-router-dom";

const CourseCard = () => {
  return (
    <>
      <div className="border-b container dark:border-b-gray-400">
        <h1
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-once="true"
          className="text-4xl font-semibold  pb-8 text-center mt-10 text-blue-600 dark:text-indigo-600"
        >
          Our Courses
        </h1>
      </div>
      <div className="container mt-16 pb-6">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {course.slice(0, 4).map((c, index) => (
            <div
              key={c.key}
              className="max-w-xs mx-auto bg-white rounded-lg shadow-lg dark:bg-teal-50 hover:scale-105 transition-transform duration-300 ease-in-out"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="w-full h-48 bg-cover bg-center rounded-t-lg"
                style={{ backgroundImage: `url(${c.img})` }}
              ></div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-gray-700 mb-3">
                  {c.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-600 text-center mb-4">
                  {c.text}
                </p>
                <div className="flex justify-center">
                  <Link
                    to={`/contact`}
                    className="px-6 py-2 bg-indigo-500 text-white rounded-lg shadow-md hover:scale-110 transition-all ease-in-out duration-300 hover:bg-blue-500 hover:shadow-xl "
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div data-aos="fade-up" className="flex justify-center pb-10 mt-10">
        <Link
          to="/course"
          className="px-8 py-3 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-blue-600 hover:scale-110 hover:shadow-xl transition-all duration-300"
        >
          View All Courses & Admission Procedure
        </Link>
      </div>
    </>
  );
};

export default CourseCard;
