import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

export default function NavBar() {
  // Initialize state based on localStorage or system preference
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return (
      saved === "dark" ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  // Effect to apply the class to <html> and save preference
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const linkClass = ({ isActive }) =>
    isActive
      ? "px-4 py-2 text-indigo-600 dark:text-cyan-400 font-medium rounded-xl bg-indigo-50 dark:bg-cyan-500/10 transition-all duration-300"
      : "px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-all duration-300";

  return (
    <div className="fixed top-6 left-0 w-full z-50 px-4 flex justify-center">
      <nav className="flex items-center gap-2 p-2 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/50 dark:border-white/10 shadow-xl rounded-2xl max-w-fit">

        <NavLink to="/home" className={linkClass}>
          Home
        </NavLink>
        {/* <NavLink to="/project" className={linkClass}>
          Projects
        </NavLink> */}
        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
        <NavLink to="/side-quest" className={linkClass}>
          Side Quest
        </NavLink>

        <div className="w-[1px] h-6 bg-slate-200 dark:bg-white/10 mx-2"></div>

        <button
          onClick={toggleTheme}
          className="relative p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-500 active:scale-90"
          aria-label="Toggle Theme"
        >
          <div className="relative w-5 h-5 overflow-hidden">
            <FaSun
              className={`absolute inset-0 text-yellow-400 w-5 h-5 transition-all duration-500 transform ${
                isDark
                  ? "translate-x-0 rotate-0 opacity-100"
                  : "translate-x-10 rotate-90 opacity-0"
              }`}
            />

            <FaMoon
              className={`absolute inset-0 text-indigo-600 w-5 h-5 transition-all duration-500 transform ${
                !isDark
                  ? "translate-x-0 rotate-0 opacity-100"
                  : "-translate-x-10 -rotate-90 opacity-0"
              }`}
            />
          </div>
        </button>
      </nav>
    </div>
  );
}
