import React from "react";
import { Routes, Route, useNavigate, useLocation , Navigate } from "react-router-dom";
import { useGesture } from "react-use-gesture";
import Home from "./link/home";
import Project from "./link/project";
import Contact from "./link/contact";
import About from "./link/about";
import Download from "./link/download";
import NavBar from "./components/NavBar";
import SideQuest from "./link/side_quest";

const routeOrder = ["/link/home", "/link/project", "/link/contact", "/link/about", "/link/download" ,"/link/side_quest"];

function HomePage() {
  return <Home />;
}

function ProjectPage() {
  return <Project />;
}

function ContactPage() {
  return <Contact />;
}

function AboutPage() {
  return <About />;
}

function DownloadPage() {
  return <Download />;
}

function SideQuestPage () {
  return <SideQuest />;
}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const bind = useGesture({
    onDrag: ({ swipe: [swipeX] }) => {
      const currentIndex = routeOrder.indexOf(location.pathname);

      if (swipeX === -1) {
        const nextIndex = currentIndex + 1;
        if (nextIndex < routeOrder.length) {
          navigate(routeOrder[nextIndex]);
        }
      } else if (swipeX === 1) {
        const prevIndex = currentIndex - 1;
        if (prevIndex >= 0) {
          navigate(routeOrder[prevIndex]);
        }
      }
    },
  });

  return (
    <div className="min-h-screen relative">
      <div
        className="min-h-screen w-screen bg-cover bg-center bg-repeat"
        style={{
          backgroundImage:
            "linear-gradient(to right bottom, #530781, #531484, #541e86, #542589, #552c8b, #512e84, #4e307e, #4b3277, #433066, #3c2e55, #352b45, #2d2835)",
        }}
      >
        <div className="fixed top-0 left-0 w-full z-50">
          <div className="backdrop-blur-lg shadow-lg px-6 py-3 flex justify-center bg-black/40">
            <NavBar />
          </div>
        </div>

        <div
          className="pt-24 overflow-x-hidden h-screen text-cyan-400"
          {...bind()}
          style={{ touchAction: "pan-y" }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/link/home" replace />} />
            <Route path="/link/home" element={<HomePage />} />
            <Route path="/link/project" element={<ProjectPage />} />
            <Route path="/link/contact" element={<ContactPage />} />
            <Route path="/link/about" element={<AboutPage />} />
            <Route path="/link/download" element={<DownloadPage />} />
            <Route path="/link/side_quest" element={<SideQuestPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}