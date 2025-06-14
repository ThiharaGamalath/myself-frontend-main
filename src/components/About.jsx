import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma } from 'react-icons/fa';

const About = () => {
  return (
    <motion.section
      id="about"
      className="bg-[#121212] py-20 px-6 md:px-12 lg:px-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-cyan-400">About Me</h2>

        <p className="text-lg text-gray-300 leading-relaxed">
          Hey there! 👋 I'm <span className="font-semibold text-cyan-500">Gihini</span>, an enthusiastic IT undergraduate at the
          <span className="font-semibold text-cyan-500"> Institute of Technology, University of Moratuwa (ITUM)</span>. I’m passionate about
          <span className="font-semibold text-cyan-500"> technology, design, and creativity</span>. My dream is to build secure, innovative digital products that truly make a difference.
        </p>

        <div className="mt-6 text-left text-gray-300 text-lg leading-relaxed">
          <p className="mb-2">Currently, I’m exploring:</p>
          <ul className="list-disc list-inside ml-4 text-base md:text-lg text-gray-400">
            <li>🌐 <strong>Web Development</strong> — HTML, CSS, JavaScript, React, Tailwind CSS</li>
            <li>🎨 <strong>UI/UX Design</strong> — Using Figma to create clean and user-friendly designs</li>
          </ul>
        </div>

        <div className="mt-4 text-gray-400 text-md">
          <p>
            Specialized in React, TypeScript, and modern frontend frameworks with a strong foundation in backend technologies like Node.js and MongoDB.
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {['React', 'TypeScript', 'JavaScript', 'Node.js', 'MongoDB', 'Tailwind CSS'].map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-white/10 text-cyan-300 rounded-full text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>

        {/* Tech Icons */}
        <div className="flex justify-center flex-wrap gap-6 mt-6 text-3xl text-cyan-500">
          <FaHtml5 title="HTML5" className="hover:text-white transition-transform hover:scale-110" />
          <FaCss3Alt title="CSS3" className="hover:text-white transition-transform hover:scale-110" />
          <FaJs title="JavaScript" className="hover:text-white transition-transform hover:scale-110" />
          <FaReact title="React" className="hover:text-white transition-transform hover:scale-110" />
          <FaFigma title="Figma" className="hover:text-white transition-transform hover:scale-110" />
        </div>

        {/* Final Paragraph */}
        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          Outside of coding, I love exploring new tech trends, designing digital art, and spending time with friends and family.
          I believe in curiosity, kindness, and continuous growth — in tech and in life.
        </p>

        <motion.p
          className="mt-6 text-lg text-gray-300 leading-relaxed italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          “Stay curious. Stay humble. Keep building.” 💙
        </motion.p>

        {/* Download CV Button */}
        <a
          href="/Gihini_CV.pdf"
          download
          className="mt-8 inline-block bg-cyan-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-cyan-600 transition duration-300"
        >
          Download My CV 📄
        </a>
      </div>
    </motion.section>
  );
};

export default About;
