import React from "react";

const techColors = {
  React: "border-cyan-500/20 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
  "Next.js": "border-slate-500/20 bg-slate-700/10 text-slate-700 dark:text-slate-200",
  "Tailwind CSS": "border-teal-500/20 bg-teal-500/10 text-teal-700 dark:text-teal-300",
  "Node.js": "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  MySQL: "border-blue-500/20 bg-blue-500/10 text-blue-700 dark:text-blue-300",
  "Framer Motion": "border-violet-500/20 bg-violet-500/10 text-violet-700 dark:text-violet-300",
  Vite: "border-amber-400/20 bg-amber-400/10 text-amber-700 dark:text-amber-300",
  Prisma: "border-fuchsia-500/20 bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-300",
  MUI: "border-indigo-500/20 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300",
  Typewriter: "border-cyan-400/20 bg-cyan-400/10 text-cyan-700 dark:text-cyan-300",
  OCR: "border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  "Prisma ORM Cloud Storage": "border-fuchsia-500/20 bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-300",
};

const projects = [
  {
    title: "Student Internship Portal",
    description:
      "A full-stack web app for students to find internships, schedule interviews, accept or reject offers, and scan student IDs using OCR.",
    tech: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "MySQL",
      "Prisma",
      "MUI",
      "Typewriter",
      "OCR",
    ],
    github: "https://github.com/sannyeinphyo/internlink",
    live: "https://sannyeinphyo.github.io/internlink",
    images: [
      "/images/internlink.png",
      "/images/images.jpg",
      "/oggy.png",
      "/images/chords_libary.png",
    ],
  },
  {
    title: "Portfolio Website",
    description:
      "My modern personal portfolio built to showcase creative web projects with Tailwind CSS and React.",
    tech: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/sannyeinphyo/portfolio",
    live: "https://sannyeinphyo.github.io/portfolio",
    images: [
      "/images/internlink.png",
      "/images/chords_libary.png",
      "/images/images.jpg",
      "/oggy.png",
    ],
  },
  {
    title: "Guitar Chord Library",
    description:
      "An interactive chord library and knowledge-sharing hub hosted on Vercel.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Prisma ORM Cloud Storage",
    ],
    github: "https://github.com/sannyeinphyo/guitar",
    live: "https://guitar-azure.vercel.app/",
    images: [
      "/images/chords_libary.png",
      "/images/internlink.png",
      "/images/images.jpg",
      "/oggy.png",
    ],
  },
];

export default function Project() {
  const [activeProjectIndex, setActiveProjectIndex] = React.useState(null);
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);
  const [hoveredProjectIndex, setHoveredProjectIndex] = React.useState(null);

  const openGallery = (projectIndex, imageIndex) => {
    setActiveProjectIndex(projectIndex);
    setActiveImageIndex(imageIndex);
  };

  const closeGallery = () => {
    setActiveProjectIndex(null);
    setActiveImageIndex(0);
  };

  const goToPrevious = () => {
    if (activeProjectIndex === null) return;
    const currentImages = projects[activeProjectIndex].images;
    setActiveImageIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    if (activeProjectIndex === null) return;
    const currentImages = projects[activeProjectIndex].images;
    setActiveImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  React.useEffect(() => {
    const onKeyDown = (event) => {
      if (activeProjectIndex === null) return;

      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowLeft") goToPrevious();
      if (event.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeProjectIndex, activeImageIndex]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-white">
      <div className="pointer-events-none absolute -left-20 top-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12)_0%,transparent_70%)] md:h-[600px] md:w-[600px] dark:bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.12)_0%,transparent_70%)] md:h-[600px] md:w-[600px] dark:bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.12)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute -right-20 top-1/2 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12)_0%,transparent_70%)] md:h-[600px] md:w-[600px] dark:bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 py-10 md:px-8 lg:px-12">
        <header className="mt-4 text-center">
          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-6xl dark:text-white">
            Featured <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-500">work</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 md:text-lg dark:text-slate-300">
            A selection of product-minded builds focused on experience, performance, and clean engineering.
          </p>
        </header>

        <div className="space-y-10">
          {projects.map((project, idx) => {
            const isAlternate = idx % 2 !== 0;
            const featuredImage = project.images[0];
            const revealImages = project.images.slice(1);
            const isHovered = hoveredProjectIndex === idx;

            return (
              <article
                key={idx}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/70 p-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-slate-700 md:p-6 lg:p-8"
              >
                <div className="grid items-center gap-8 lg:grid-cols-12">
                  <div className={`${isAlternate ? "lg:order-2 lg:col-span-5" : "lg:col-span-5"}`}>
                    <div className="relative mx-auto w-full max-w-xl">
                      <div className="absolute inset-0 -rotate-6 rounded-[1.5rem] bg-slate-200/80 dark:bg-slate-800/80" />
                      <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-2 shadow-2xl dark:border-slate-700 dark:bg-slate-900">
                        <button
                          type="button"
                          onClick={() => openGallery(idx, 0)}
                          className="relative block w-full overflow-hidden rounded-[1rem]"
                          onMouseEnter={() => setHoveredProjectIndex(idx)}
                          onMouseLeave={() => setHoveredProjectIndex(null)}
                        >
                          <div className="relative h-52 overflow-hidden rounded-[1rem] md:h-64 lg:h-72">
                            <img
                              src={featuredImage}
                              alt={`${project.title} preview`}
                              className={`h-full w-full object-cover transition-all duration-700 ${
                                isHovered ? "scale-110 blur-[1px]" : "scale-100 blur-0"
                              }`}
                            />

                            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-slate-950/10 to-slate-950/40" />

                            <div
                              className={`absolute inset-0 p-2 transition-all duration-500 ${
                                isHovered ? "opacity-100" : "pointer-events-none opacity-0"
                              }`}
                            >
                              <div className="hidden h-full items-stretch gap-2 md:flex">
                                {revealImages.map((image, imageIndex) => (
                                  <div
                                    key={`${project.title}-hover-${imageIndex}`}
                                    className="group relative h-full w-full overflow-hidden rounded-2xl border border-white/30 bg-slate-900/70 shadow-[0_28px_50px_rgba(15,23,42,0.5)]"
                                    style={{
                                      transform: isHovered ? "translateY(0) scale(1)" : "translateY(20px) scale(0.96)",
                                      opacity: isHovered ? 1 : 0,
                                      transitionDelay: `${imageIndex * 120}ms`,
                                    }}
                                  >
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-white/10" />
                                    <img
                                      src={image}
                                      alt={`${project.title} alternate ${imageIndex + 1}`}
                                      className="h-full w-full object-cover transition-all duration-600 group-hover:scale-110"
                                    />
                                  </div>
                                ))}
                              </div>

                              <div className="flex h-full items-end gap-2 md:hidden">
                                {revealImages.map((image, imageIndex) => (
                                  <div
                                    key={`${project.title}-mobile-hover-${imageIndex}`}
                                    className="h-20 w-full overflow-hidden rounded-xl border border-white/30 bg-slate-900/70 shadow-[0_20px_40px_rgba(15,23,42,0.4)]"
                                    style={{
                                      transform: isHovered ? "translateY(0) scale(1)" : "translateY(12px) scale(0.96)",
                                      opacity: isHovered ? 1 : 0,
                                      transitionDelay: `${imageIndex * 80}ms`,
                                    }}
                                  >
                                    <img
                                      src={image}
                                      alt={`${project.title} mobile preview ${imageIndex + 1}`}
                                      className="h-full w-full object-cover"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <span className="absolute bottom-3 left-3 rounded-full bg-slate-950/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                            View gallery
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className={`${isAlternate ? "lg:order-1 lg:col-span-7" : "lg:col-span-7"} flex flex-col justify-center`}>
                    <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-600 dark:bg-cyan-500/10 dark:text-cyan-400">
                        {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </span>
                      Project
                    </div>

                    <h2 className="text-2xl font-extrabold text-slate-900 md:text-4xl dark:text-white">
                      {project.title}
                    </h2>
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-semibold ${
                            techColors[tech] || "border-slate-200 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                        >
                          GitHub
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/80 px-5 py-3 text-sm font-bold text-slate-700 transition-all duration-300 hover:border-slate-300 hover:bg-white dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-900"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {activeProjectIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm">
          <div className="relative h-[700px] w-[1200px] max-h-[90vh] max-w-[90vw] overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-900 shadow-2xl">
            <button
              type="button"
              onClick={closeGallery}
              className="absolute right-4 top-4 z-10 rounded-full bg-slate-800/80 p-2 text-lg text-white transition hover:bg-slate-700"
              aria-label="Close image viewer"
            >
              ✕
            </button>

            <div className="relative flex h-[620px] items-center justify-center bg-slate-950 px-4 py-6 md:px-10 md:py-8">
              <button
                type="button"
                onClick={goToPrevious}
                className="absolute left-4 rounded-full bg-slate-800/80 p-3 text-white transition hover:bg-slate-700 md:left-6"
                aria-label="Previous image"
              >
                ←
              </button>

              <img
                src={projects[activeProjectIndex].images[activeImageIndex]}
                alt={`${projects[activeProjectIndex].title} view ${activeImageIndex + 1}`}
                className="h-full w-full rounded-2xl object-contain transition-all duration-300"
              />

              <button
                type="button"
                onClick={goToNext}
                className="absolute right-4 rounded-full bg-slate-800/80 p-3 text-white transition hover:bg-slate-700 md:right-6"
                aria-label="Next image"
              >
                →
              </button>
            </div>

            <div className="flex h-[80px] items-center justify-between gap-3 border-t border-slate-800 px-4 py-3 text-sm text-slate-300 md:px-6">
              <div className="font-semibold text-white">{projects[activeProjectIndex].title}</div>
              <div>
                {activeImageIndex + 1} / {projects[activeProjectIndex].images.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}