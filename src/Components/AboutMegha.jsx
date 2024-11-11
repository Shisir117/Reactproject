import React from "react";
import AboutMH from "../assets/Images/aboutMH.jpg";
import { Link } from "react-router-dom";

const AboutMegha = () => {
  return (
    <div className="container mx-auto p-6 mt-10 md:my-10">
      <div className="flex flex-col md:flex-row-reverse md:items-center gap-8">
        {/* Image on Right for md and above */}
        <div className="w-full md:w-2/3">
          <img
            data-aos="fade-up"
            data-aos-delay="500"
            src={AboutMH}
            alt="Megha Himalayan College"
            className="w-full h-auto rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        {/* Text on Left for md and above */}
        <div className="w-full md:w-1/3 p-6">
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-semibold text-3xl lg:text-4xl text-center text-gray-800 dark:text-white mb-4"
          >
            About Megha Himalayan College
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-offset="200"
            className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6"
          >
            <strong className="text-red-500">
              Dharan Megha College/School
            </strong>{" "}
            was established in 2067 by a group of professional lecturers and
            educationists with the aim of providing quality education. Quality
            education, a positive academic environment, ample extracurricular
            activities, and outstanding facilities are the central attractions
            of the college. Managed by an innovative team of experienced and
            dedicated staff, the college plays a pivotal role in developing
            quality human resources to serve the nation in the future.
          </p>
          <div className="text-center">
            <Link
              to="/about"
              className="text-blue-600 font-semibold hover:underline transition-all duration-300"
            >
              Learn more...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMegha;
