import React from "react";
import { motion } from "framer-motion";

const techColors = {
  React: "bg-cyan-500",
  "Next.js": "bg-gray-700 text-white",
  "Tailwind CSS": "bg-teal-500",
  "Node.js": "bg-green-500",
  MySQL: "bg-blue-800",
  "Framer Motion": "bg-purple-500",
  Vite: "bg-amber-300",
  Prisma: " bg-fuchsia-600",
  "MUI":"bg-blue-700",
  "Typewriter":"bg-cyan-400",
  "OCR":"bg-amber-400"
};

const projects = [
  {
    title: "Student Internship Portal",
    description:
      "A full-stack web app for students to find internships ,can schedule interview/accept or rejecct from the company , and also include Student Id Scanning ",
    tech: ["React", "Next.js", "Tailwind CSS", "Node.js", "MySQL", "Prisma","MUI", "Framer Motion" , "Typewriter" , "OCR",],
    github: "https://github.com/sannyeinphyo/internlink",
    live: "https://sannyeinphyo.github.io/internlink",
    image: "/portfolio/images/internlink.png",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio built with Vite + React and Tailwind CSS.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/sannyeinphyo/portfolio",
    live: "https://sannyeinphyo.github.io/portfolio",
    image: "/portfolio/images/portfolio.png",
  },
  {
    title: "Task Manager App",
    description: "A simple task manager with drag-and-drop functionality.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/sannyeinphyo/task-manager",
    live: "",
    image: "/images/task-manager.png",
  },
];

export default function Project() {
  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold  text-center mb-12">My Projects</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: idx * 0.3, duration: 0.5 }}
            whileTap={{ scale: 0.98 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1, delay: 0 }, 
            }}
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 min-h-24">
                {project.title}
              </h2>
              <p className="text-gray-300 mb-4 turncate w-full">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full text-sm ${
                      techColors[tech] || "bg-gray-600 text-white"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
