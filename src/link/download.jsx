import React from "react";

export default function DownloadSection() {
  const downloads = [
    {
      title: "Resume",
      description: "Download my latest resume (PDF).",
      file: "/files/SanNyeinPhyo_Resume.pdf",
    },
    {
      title: "React Node.js Next.js Certificate",
      description: "Official Next.js, React, Node.js certification.",
      file: "/portfolio/certificate/nextjs.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-12">Downloads</h2>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
        {downloads.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col justify-between"
          >
            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300 mb-4">{item.description}</p>
            <a
              href={item.file}
              download
              className="bg-blue-600 px-6 py-3 rounded-xl text-white font-semibold hover:bg-blue-700 transition text-center"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
