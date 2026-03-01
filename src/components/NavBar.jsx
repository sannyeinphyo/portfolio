import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

export default function NavBar() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return (
      saved === "dark" ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

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
    `px-2 sm:px-4 py-2 text-[11px] sm:text-sm font-medium rounded-xl user-select-none transition-all duration-300 ${
      isActive
        ? "text-indigo-600 dark:text-cyan-400 bg-indigo-50 dark:bg-cyan-500/10 user-select-none"
        : "text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-white/5 user-select-none"
    }`;

  return (
    <div className="fixed top-0 sm:top-6 left-0 w-full z-50 flex justify-center p-2 sm:p-4 py-3 sm:py-0 ">
      <nav className="flex user-select-none items-center gap-1 sm:gap-2 p-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/50 dark:border-white/10 shadow-lg dark:shadow-none rounded-2xl w-full max-w-fit justify-center">
        <NavLink to="/home" className={linkClass}>
          Home
        </NavLink>

        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>

        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>

        <NavLink to="/side-quest" className={linkClass}>
          <span className="hidden sm:inline">Side Quest</span>
          <span className="sm:hidden">Quest</span>
        </NavLink>

        <div className="w-[1px] h-5 bg-slate-200 dark:bg-white/10 mx-1"></div>

        <button
          onClick={toggleTheme}
          className="relative p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-300 active:scale-90 shrink-0"
          aria-label="Toggle Theme"
        >
          <div className="relative w-4 h-4 sm:w-5 sm:h-5 overflow-hidden">
            <FaSun
              className={`absolute inset-0 text-yellow-400 w-full h-full transition-all duration-500 transform ${
                isDark
                  ? "translate-x-0 rotate-0 opacity-100"
                  : "translate-x-10 rotate-90 opacity-0"
              }`}
            />
            <FaMoon
              className={`absolute inset-0 text-indigo-600 w-full h-full transition-all duration-500 transform ${
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
