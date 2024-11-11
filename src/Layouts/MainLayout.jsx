import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import GoUpButton from "../Components/GoUpButton";

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div className="overflow-x-hidden bg-white dark:bg-black shadow-md hover:shadow-lg transition-all ease-in-out duration-500 shadow-gray-200 dark:shadow-sm dark:shadow-gray-200 fixed w-full z-30">
        <Navigation />
      </div>
      <div className="pt-16 z-40">
        <Outlet />
      </div>
      <GoUpButton />
      <div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
