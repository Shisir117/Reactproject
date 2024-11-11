import React from "react";
import Hero from "../Components/Hero";
import AboutMegha from "../Components/AboutMegha";
import CourseCard from "../Components/CourseCard";
import Features from "../2ndComponents/Features";
import TestimonialSlider from "../2ndComponents/testimonial";

const Home = () => {
  return (
    <div className="dark:bg-black">
      <div className="container overflow-x-hidden ">
        <Hero />
        <Features />
        <AboutMegha />
        <CourseCard />
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default Home;
