import React, { useContext, useState } from "react";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider/AouthProvider";
import { ThemeContext } from "../../components/ThemeSwitcher";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { theme, handleDarkMode } = useContext(ThemeContext);

  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
      logOut()
      .then(() => {})
      .catch((err) => console.error(err.message));
  };

  const menuList = (
    <>
      <NavLink className="mr-4" to="/">
        {({ isActive }) => (
          <li
            className={`${
              isActive ? "bg-gray-600 text-white" : ""
            } px-3 py-1  rounded hover:bg-gray-600 hover:text-white`}
          >
            Home
          </li>
        )}
      </NavLink>
      <NavLink className="mr-4" to="/about">
        {({ isActive }) => (
          <li
            className={`${
              isActive ? "bg-gray-600 text-white" : ""
            } px-3 py-1 rounded hover:bg-gray-600 hover:text-white`}
          >
            About
          </li>
        )}
      </NavLink>
      <NavLink className="mr-4" to="/appointment">
        {({ isActive }) => (
          <li
            className={`${
              isActive ? "bg-gray-600 text-white" : ""
            } px-3 py-1 rounded hover:bg-gray-600 hover:text-white`}
          >
            Appointment
          </li>
        )}
      </NavLink>
      <NavLink className="mr-4" to="/contact">
        {({ isActive }) => (
          <li
            className={`${
              isActive ? "bg-gray-600 text-white" : ""
            } px-3 py-1 rounded hover:bg-gray-600 hover:text-white`}
          >
            Contact
          </li>
        )}
      </NavLink>
      {user && user?.uid ? (
        
          <>
          <NavLink className="mr-4" to="/dashboard">
          {({ isActive }) => (
            <li
              className={`${
                isActive ? "bg-gray-600 text-white" : ""
              } px-3 py-1 rounded hover:bg-gray-600 hover:text-white`}
            >
              Dashboard
            </li>
          )}
        </NavLink>
            <li onClick={handleLogout} className=" hover:bg-gray-600 hover:text-white
              px-3 py-1 rounded mr-4 hover:cursor-pointer">
              Logout
            </li>
            
          </>
            
          
       
      ) : (
        <NavLink className="mr-4" to="/login">
          {({ isActive }) => (
            <li
              className={`${
                isActive ? "bg-gray-600 text-white" : ""
              } px-3 py-1 rounded hover:bg-gray-600 hover:text-white`}
            >
              Login
            </li>
          )}
        </NavLink>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 mx-auto px-3">
      <div className="flex justify-between lg:navbar-start">
      <label
           htmlFor="sidebar"
            tabIndex={1}
            className="btn btn-ghost lg:hidden"
          >
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
        <Link to="/" className="text-2xl">
          Doctor Portal
        </Link>
        <div className="dropdown">
          <label
            onClick={() => setOpen(!isOpen)}
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
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
         
          {isOpen && (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 right-0"
            >
              {menuList}
            </ul>
          )}
        </div>
      </div>

      <div className="navbar-end w-full hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuList}</ul>
        {
          user && <div className="avatar mr-4">
          <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user?.photoURL} alt="" title={user?.displayName} />
          </div>
        </div>
        }
        

        <div className="hover:cursor-pointer" onClick={handleDarkMode}>
          {theme === "dark" ? (
            <BsSunFill className="text-yellow-400" />
          ) : (
            <BsMoonStarsFill />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
