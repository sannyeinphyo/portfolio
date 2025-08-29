import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./link/home";
import Project from "./link/project";
import Contact from "./link/contact";
import About from "./link/about";
import Download from "./link/download";
import NavBar from "./components/NavBar";

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

export default function App() {
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
          <div className="backdrop-blur-lg shadow-lg px-6 py-3 flex justify-center bg-black/40 overflow-y-auto">
            <NavBar />
          </div>
        </div>

        <div className="h-full flex flex-col pt-24 text-cyan-400">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/link/home" element={<HomePage />} />
            <Route path="/link/project" element={<ProjectPage />} />
            <Route path="/link/contact" element={<ContactPage />} />
            <Route path="/link/about" element={<AboutPage />} />
            <Route path="/link/download" element={<DownloadPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
