import React from "react";
import navMenu from "../constants/navMenu";
import { NavLink } from "react-router-dom";

const ResponsiveMenu = ({ showMenu, toggleMenu }) => {
  const linkClass = (props) => {
    return props.isActive
      ? "rounded-md bg-black dark:bg-white dark:text-black text-white px-4 py-1 "
      : "px-4 py-1 hover:border-b-2 hover:border-black dark:hover:border-white ";
  };

  return (
    <div
      className={`${
        showMenu ? "left-0 opacity-100" : "-left-full opacity-0"
      } fixed top-0 bottom-0 left-0 w-[75%] flex flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black lg:hidden transition-all ease-in-out duration-300 rounded-r-xl shadow-md z-30`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <div>
            <div className="text-xl">Welcome to Megha Himalayan college</div>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {navMenu.map((data) => (
              <li key={data.key}>
                <NavLink
                  to={data.rout}
                  className={linkClass}
                  onClick={toggleMenu} // Toggle menu on click
                >
                  {data.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>Dharan Megha Himalayan</h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
