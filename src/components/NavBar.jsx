import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function NavBar() {

  const linkClass = ({ isActive }) =>
    isActive
      ? "px-4 py-2 text-blue-500 font-bold border-b-2 border-blue-500"
      : "px-4 py-2 text-gray-600 hover:text-blue-400";

  return (
    <nav className="flex gap-4">
      <NavLink to="/link/home" className={linkClass}>
        Home
      </NavLink>
      <NavLink to="/link/project" className={linkClass}>
        Project
      </NavLink>
      <NavLink to="/link/contact" className={linkClass}>
        Contact
      </NavLink>
      <NavLink to="/link/about" className={linkClass}>
        About
      </NavLink>
      <NavLink to="/link/download" className={linkClass}>
        Download
      </NavLink>
    </nav>
  );
}