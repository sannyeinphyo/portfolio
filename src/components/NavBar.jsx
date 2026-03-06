import React, { useState, useEffect, useLayoutEffect, useRef } from "react"; // Added useRef and useLayoutEffect
import { NavLink, useLocation } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

export default function NavBar() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return (
      saved === "dark" ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const navRef = useRef(null);
  const location = useLocation();

  useLayoutEffect(() => {
    const updateIndicator = () => {
      const activeLink = navRef.current?.querySelector(".active-link");
      if (activeLink) {
        const { offsetLeft, offsetWidth } = activeLink;
        console.log(activeLink);
        setIndicatorStyle({
          left: offsetLeft,
          width: offsetWidth,
          opacity: 1,
        });
      }
    };
    updateIndicator();

    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const linkClass = ({ isActive }) =>
    `relative z-10 px-2 sm:px-4 py-2 text-[11px] sm:text-sm font-medium rounded-xl transition-colors duration-300 select-none ${
      isActive
        ? "active-link text-indigo-600 dark:text-cyan-400"
        : "text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400"
    }`;

  return (
    <div className="fixed bottom-4 md:bottom-auto md:top-0 left-0 w-full z-50 flex justify-center p-2 sm:p-4">
      <nav
        ref={navRef}
        className="relative flex items-center gap-1 sm:gap-2 p-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/50 dark:border-white/10 shadow-lg rounded-2xl w-full max-w-fit justify-center"
      >
        <div
          className="absolute h-[calc(100%-12px)] top-1.5 bg-indigo-50 dark:bg-cyan-500/10 rounded-xl pointer-events-none"
          style={{
            left: `${indicatorStyle.left}px`,
            width: `${indicatorStyle.width}px`,
            opacity: indicatorStyle.opacity,
            transition: "all 0.5s cubic-bezier(0.68, -0.3, 0.32, 1.2)",
          }}
        />

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

        <div className="w-[1px] h-5 bg-slate-200 dark:bg-white/10 mx-1 z-10"></div>

        <button
          onClick={toggleTheme}
          className="relative z-10 p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-300 active:scale-90 shrink-0"
        >
          <div className="relative w-4 h-4 sm:w-5 sm:h-5 overflow-hidden">
            <FaSun
              className={`absolute inset-0 text-yellow-400 transition-all duration-500 transform ${isDark ? "translate-x-0" : "translate-x-10 opacity-0"}`}
            />
            <FaMoon
              className={`absolute inset-0 text-indigo-600 transition-all duration-500 transform ${!isDark ? "translate-x-0" : "-translate-x-10 opacity-0"}`}
            />
          </div>
        </button>
      </nav>
    </div>
  );
}
