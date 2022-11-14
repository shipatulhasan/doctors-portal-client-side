import React, {  useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const [isOpen,setOpen] = useState(false)
  
  const menuList = (
    <>
      <NavLink to="/">
        {({ isActive }) => (
          <li
            className={`${
              isActive ? "bg-gray-600 text-white" : ""
            } px-3 py-1 mr-2 rounded`}
          >
            Home
          </li>
        )}
      </NavLink>
      <NavLink to="/about">
        {({ isActive }) => (
          <li
            className={`${
              isActive ? "bg-gray-600 text-white" : ""
            } px-3 py-1 mr-2 rounded`}
          >
            About
          </li>
        )}
      </NavLink>
      <NavLink to="/appointment">
        {({ isActive }) => (
          <li
            className={`${
              isActive ? "bg-gray-600 text-white" : ""
            } px-3 py-1 mr-2 rounded`}
          >
            Appointment
          </li>
        )}
      </NavLink>
      <NavLink to="/contact">
        {({ isActive }) => (
          <li
            className={`${
              isActive ? "bg-gray-600 text-white" : ""
            } px-3 py-1 mr-2 rounded`}
          >
            Contact
          </li>
        )}
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 mx-auto">
      <div className="flex justify-between w-full lg:navbar-start">
        <Link className="text-2xl">Doctor Portal</Link>
        <div className="dropdown">
          <label onClick={()=>setOpen(!isOpen)} tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          {
              isOpen && <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 right-0"
            >
              {menuList}
            </ul>
          }
          
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuList}</ul>
      </div>
    </div>
  );
};

export default Navbar;
