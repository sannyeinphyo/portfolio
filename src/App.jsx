import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useGesture } from "react-use-gesture";
import { AppRouter } from "./core/routes/appRoute";
import NavBar from "./components/NavBar";

const routeOrder = [
  "/home",
  "/project",
  "/contact",
  "/about",
  "/download",
  "/side_quest",
];

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const bind = useGesture({
    onDrag: ({ swipe: [swipeX] }) => {
      const currentIndex = routeOrder.indexOf(location.pathname);
      if (swipeX === -1 && currentIndex < routeOrder.length - 1) {
        navigate(routeOrder[currentIndex + 1]);
      } else if (swipeX === 1 && currentIndex > 0) {
        navigate(routeOrder[currentIndex - 1]);
      }
    },
  });

  return (
    <div className="min-h-screen relative">
      <NavBar />
      <div
        className="pt-24 overflow-x-hidden h-screen text-cyan-400"
        {...bind()}
        style={{ touchAction: "pan-y" }}
      >
        <AppRouter />
      </div>
    </div>
  );
}
