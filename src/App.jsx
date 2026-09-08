import React, { Suspense } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useGesture } from "@use-gesture/react";
import { AppRouter } from "./core/routes/appRoute";
import NavBar from "./components/NavBar";
import CatNavigator from "./components/catNavigator";

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
      if (currentIndex === -1) return;

      if (swipeX === -1 && currentIndex < routeOrder.length - 1) {
        navigate(routeOrder[currentIndex + 1]);
      } else if (swipeX === 1 && currentIndex > 0) {
        navigate(routeOrder[currentIndex - 1]);
      }
    },
  });

  return (
    <div className="flex flex-col-reverse md:flex-col overflow-hidden bg-slate-50 dark:bg-gray-900">
      <CatNavigator/>
      <NavBar />
      <div
        className="flex-1 overflow-y-auto overflow-x-hidden text-cyan-400 mb-16 md:mb-0"
        {...bind()}
        style={{ touchAction: "pan-y" }}
      >
        {/* ✅ Wrap AppRouter with Suspense */}
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
          <AppRouter />
        </Suspense>
      </div>
    </div>
  );
}