import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "px-4 py-2 text-cyan-500 font-bold  rounded-lg border-2 border-cyan-400"
      : "px-4 py-2 text-cyan-200 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition";

  return (
    <nav className="flex gap-4 justify-center p-4 sticky">
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
