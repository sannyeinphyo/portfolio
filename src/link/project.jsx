import React from "react";
import { motion } from "framer-motion";

// Map tech to colors
const techColors = {
  "React": "bg-cyan-500",
  "Next.js": "bg-gray-700 text-white",
  "Tailwind CSS": "bg-teal-500",
  "Node.js": "bg-green-500",
  "MySQL": "bg-blue-800",
  "Framer Motion": "bg-purple-500",
  "Vite": "bg-amber-300",
};

const projects = [
  {
    title: "Student Internship Portal",
    description:
      "A full-stack web app for students to find internships and part-time jobs.",
    tech: ["React", "Next.js", "Tailwind CSS", "Node.js", "MySQL"],
    github: "https://github.com/sannyeinphyo/internlink",
    live: "https://sannyeinphyo.github.io/internlink",
    image: "/portfolio/images/internlink.png",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with Vite + React and Tailwind CSS.",
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
    hidden: { opacity: 0, scale: 1 },
    visible: { opacity: 1,scale: 1 },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold  text-center mb-12">My Projects</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: idx * 0.2 }}
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 min-h-24">{project.title}</h2>
              <p className="text-gray-300 mb-4 turncate w-full">{project.description}</p>

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
