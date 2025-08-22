import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_auto_auto_1fr] mt-4 relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      <div className="relative z-10 p-4 text-white">
        {/* Title */}
        <div className="flex items-center justify-center mb-4">
          <div className="font-extrabold text-3xl text-cyan-50">
            Welcome To My Portfolio
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center justify-center bg-gray-800/70 p-6 rounded-lg mb-4">
          <div className="h-full bg-contain bg-no-repeat mb-4">
            <img
              src="/background.jpg"
              alt="my-photo"
              height={256}
              width={256}
              style={{ borderRadius: ".5rem" }}
            />
          </div>
          <div className="text-lg text-cyan-200 text-center max-w-2xl">
            <div className="text-6xl text-shadow-cyan-400 font-bold">Hello , </div>
            <div className="text-6xl font-bold">I am</div>
            <div className="text-6xl font-bold text-amber-300">
              San Nyein <span className="text-fuchsia-500">Phyo</span>
            </div>
          </div>
        </div>

        {/* Intro Section */}
        <div className="flex flex-row items-center justify-center bg-gray-800/70 p-6 rounded-lg mb-4 gap-4">
          <div className="text-lg text-cyan-200 text-center flex-1 max-w-2xl">
            This is Testing
          </div>
          <div className="text-lg text-cyan-200 text-center flex-1 max-w-2xl">
            I build modern web applications that are not only functional but
            also visually appealing. Here you can find my skills, projects, and
            ways to contact me.
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-12 gap-4">
          {/* Left Column */}
          <motion.div
            className="col-span-6 bg-gray-800/70 p-6 rounded-lg flex flex-col justify-start gap-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-bold text-cyan-400">About Me</h2>
            <p>
              Hello! I'm a passionate developer who loves building web
              applications with React, Next.js, and Tailwind CSS. I enjoy
              creating modern, responsive interfaces and learning new
              technologies.
            </p>

            <h2 className="text-2xl font-bold text-cyan-400 mt-4">Skills</h2>
            <ul className="list-disc list-inside">
              <li>JavaScript / TypeScript</li>
              <li>React & Next.js</li>
              <li>Node.js & Express</li>
              <li>Tailwind CSS & MUI</li>
              <li>MySQL & Prisma</li>
              <li>Bootstrap & Python</li>
              <li>CCNA & MS</li>
            </ul>

            <h2 className="text-2xl font-bold text-cyan-400 mt-4">Contact</h2>
            <p>Email: yourname@example.com</p>
            <p>LinkedIn: linkedin.com/in/yourprofile</p>
            <p>GitHub: github.com/yourusername</p>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="col-span-6 bg-gray-700/70 p-6 rounded-lg flex flex-col justify-start gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-cyan-400">Projects</h2>
            <ul className="list-disc list-inside">
              <li>
                <strong>InternLink:</strong> A full-stack internship portal
                built with Next.js, Node.js, and MySQL.
              </li>
              <li>
                <strong>Portfolio Website:</strong> My personal portfolio using
                React, Tailwind, and Framer Motion animations.
              </li>
              <li>
                <strong>Job Board App:</strong> Internship listing app with
                filtering and real-time notifications.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-cyan-400 mt-4">
              Highlights
            </h2>
            <p>
              Successfully completed multiple full-stack projects and
              collaborated with teams to deliver modern web solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
