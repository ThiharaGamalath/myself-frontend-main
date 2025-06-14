import React from 'react';
import {
  CodeIcon,
  ServerIcon,
  PaletteIcon,
  DatabaseIcon,
  GlobeIcon,
  TerminalIcon
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      id: 1,
      title: 'Frontend',
      icon: <CodeIcon className="w-6 h-6" />,
      skills: [
        { name: 'React', level: 5, color: 'from-blue-400 to-cyan-400' },
        { name: 'JavaScript', level: 5, color: 'from-yellow-400 to-amber-400' },
        { name: 'TypeScript', level: 4, color: 'from-blue-500 to-blue-600' },
        { name: 'HTML/CSS', level: 5, color: 'from-orange-400 to-red-400' },
        { name: 'Tailwind CSS', level: 5, color: 'from-cyan-400 to-blue-500' }
      ]
    },
    {
      id: 2,
      title: 'Backend',
      icon: <ServerIcon className="w-6 h-6" />,
      skills: [
        { name: 'Node.js', level: 5, color: 'from-green-400 to-green-600' },
        { name: 'Express', level: 5, color: 'from-gray-400 to-gray-600' },
       
      ]
    },
    {
      id: 3,
      title: 'Design',
      icon: <PaletteIcon className="w-6 h-6" />,
      skills: [
        { name: 'UI/UX Design', level: 5, color: 'from-purple-400 to-pink-500' },
        { name: 'Figma', level: 5, color: 'from-purple-500 to-pink-600' },
        { name: 'Responsive Design', level: 5, color: 'from-blue-400 to-indigo-500' },
        { name: 'Animation', level: 3, color: 'from-green-400 to-teal-500' }
      ]
    },
    {
      id: 4,
      title: 'Database',
      icon: <DatabaseIcon className="w-6 h-6" />,
      skills: [
        { name: 'MongoDB', level: 4, color: 'from-green-400 to-green-600' },
        { name: 'PostgreSQL', level: 3, color: 'from-blue-400 to-blue-600' },
        { name: 'Firebase', level: 4, color: 'from-yellow-400 to-orange-500' },
        { name: 'Redis', level: 2, color: 'from-red-400 to-red-600' }
      ]
    },
    {
      id: 5,
      title: 'Deployment',
      icon: <GlobeIcon className="w-6 h-6" />,
      skills: [
        { name: 'AWS', level: 3, color: 'from-orange-400 to-orange-600' },
        { name: 'Vercel', level: 5, color: 'from-gray-600 to-gray-800' },
        { name: 'Docker', level: 3, color: 'from-blue-400 to-blue-600' },
        
      ]
    },
    {
      id: 6,
      title: 'Tools',
      icon: <TerminalIcon className="w-6 h-6" />,
      skills: [
        { name: 'Git', level: 5, color: 'from-orange-400 to-red-500' },
        { name: 'Webpack', level: 3, color: 'from-blue-400 to-blue-600' },
        { name: 'Jest', level: 4, color: 'from-red-400 to-red-600' },
        { name: 'VS Code', level: 5, color: 'from-blue-500 to-blue-700' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#06040a] to-[#131313] opacity-90 z-0"></div>
      
      <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-purple-500 opacity-10 blur-[100px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg group"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg mr-4 text-white">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level * 20}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        style={{ width: `${skill.level * 20}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl opacity-0 group-hover:opacity-30 blur-sm -z-10 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
