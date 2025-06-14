import React from "react";
import { motion } from "framer-motion";

import img3ab from "../assets/3ab.jpg";
import img4ab from "../assets/4ab.jpg";
import img5ab from "../assets/5ab.jpg";
import img6ab from "../assets/6ab.jpg";
import img7ab from "../assets/7ab.jpg";  // new mobile project image 1
 

const Projects = () => {
  const projectData = [
    {
      title: "Pet Care Website",
      desc: "A website designed for pet care services and information.",
      link: "https://github.com/ThiharaGamalath/pawsup-website.git",
      image: img3ab,
    },
    {
      title: "Library Management System",
      desc: "A system to manage books and library activities.",
      link: "https://github.com/your-username/library-management-system.git",
      image: img4ab,
    },
    {
      title: "EDUPORTAL LMS Frontend",
      desc: "The frontend for the EDUPORTAL Learning Management System.",
      link: "https://github.com/ThiharaGamalath/EDUPORTAL-LMS-FRONTEND.git",
      image: img5ab,
    },
    {
      title: "LankaNews",
      desc: "The frontend for the LankaNews news web site.",
      link: "https://github.com/ThiharaGamalath/LankaNews.git",
      image: img6ab,
    },
  ];

  const mobileProjects = [
    {
      title: "LankaNews Mobile App",
      desc: "A news mobile application built with Flutter to provide real-time news updates.",
      link: "https://github.com/ThiharaGamalath/LankaNews-mobile.git",
      image: img7ab,
    },
    
  ];

  return (
    <>
      {/* Web Projects Section */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6" id="projects">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold text-cyan-400 mb-4 tracking-wide">
            My Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Explore some of the systems and websites I've developed with precision and style.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#111] border border-cyan-700/30 p-6 rounded-2xl shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/20 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-semibold text-cyan-300 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-cyan-500 hover:text-cyan-300 transition font-medium"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mobile Projects Section */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6" id="mobile-projects">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold text-purple-400 mb-4 tracking-wide">
            Mobile App Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Mobile applications I developed using modern frameworks like Flutter.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
          {mobileProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#111] border border-purple-700/30 p-6 rounded-2xl shadow-lg shadow-purple-500/10 hover:shadow-purple-400/20 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-semibold text-purple-300 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-purple-500 hover:text-purple-300 transition font-medium"
              >
                View Mobile App →
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
