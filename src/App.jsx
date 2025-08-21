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
    <div className="h-screen relative">
      <div
        className="h-screen w-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl px-6 py-3 back">
            <NavBar />
          </div>
        </div>

        <div className=" h-full">
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
