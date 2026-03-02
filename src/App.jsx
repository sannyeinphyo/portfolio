import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useGesture } from "react-use-gesture";
import { AppRouter } from "./core/routes/appRoute";
import NavBar from "./components/NavBar";

const routeOrder = [
  "/home",
  // "/project",
  "/contact",
  "/about",
  // "/download",
  "/side-quest",
];
export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const bind = useGesture({
    onDrag: ({ swipe: [swipeX] }) => {
      const currentIndex = routeOrder.indexOf(location.pathname);
      // Index Check
      if (currentIndex === -1) return;

      if (swipeX === -1 && currentIndex < routeOrder.length - 1) {
        navigate(routeOrder[currentIndex + 1]);
      } else if (swipeX === 1 && currentIndex > 0) {
        navigate(routeOrder[currentIndex - 1]);
      }
    },
  });

  return (
    <div className=" flex flex-col-reverse md:flex-col overflow-hidden bg-slate-50 dark:bg-gray-900">
      <NavBar />
      <div
        // Changed py-12 to pt-8 pb-20 on mobile to clear the bottom NavBar
        className="flex-1 overflow-y-auto overflow-x-hidden text-cyan-400"
        {...bind()}
        style={{ touchAction: "pan-y" }}
      >
        <AppRouter />
      </div>
    </div>
  );
}