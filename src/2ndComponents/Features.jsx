import React, { useState, useEffect } from "react";
import features from "../constants/features";

const Features = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="text-center text-4xl font-semibold border-b dark:border-gray-500 container text-black dark:text-white pt-14 pb-8">
        Our Features
      </div>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 py-14 container mx-auto">
        {features.map((f, index) => {
          if (isLargeScreen && index >= 3) return null;

          return (
            <div
              key={f.id}
              className="flex flex-col items-center bg-blue-50 dark:bg-slate-200 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 dark:hover:shadow-white hover:shadow-2xl dark:hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="text-6xl text-blue-500 mb-6">
                {React.createElement(f.icon)}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-700 mb-3">
                {f.label}
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-600">
                {f.text}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Features;
