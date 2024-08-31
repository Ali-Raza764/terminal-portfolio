import React from 'react';
import { FaJs, FaPython, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGit } from 'react-icons/fa';
import { SiCplusplus, SiNextdotjs, SiTailwindcss, SiVite, SiFirebase, SiFigma, SiMongodb, SiRedis, SiPusher, SiGooglecloud, SiBabel, SiShadcn } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'C++', icon: <SiCplusplus /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Git', icon: <FaGit /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Vite', icon: <SiVite /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'Figma', icon: <SiFigma /> },
    { name: 'Google Cloud', icon: <SiGooglecloud /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Redis', icon: <SiRedis /> },
    { name: 'Pusher', icon: <SiPusher /> },
    { name: 'shadcn', icon: <SiShadcn /> },
    { name: 'Babel', icon: <SiBabel /> },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 text-xl">
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center space-x-2">
          <span className="text-3xl">{skill.icon}</span>
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Skills;
