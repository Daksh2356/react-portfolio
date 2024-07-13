import React from 'react';
import { Element } from 'react-scroll';

const Skills = () => {
  const skills = [
    { name: 'HTML', percentage: 95 },
    { name: 'CSS', percentage: 95 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'React', percentage: 80 },
    { name: 'Node', percentage: 80 },
    { name: 'MongoDB', percentage: 75 },
    { name: 'SQL', percentage: 85 },
    { name: 'AWS', percentage: 70 },
    { name: 'Flutter', percentage: 80 },
    { name: 'Firebase', percentage: 80 },
  ];

  return (
    <Element name="skills">
      <section id="skills" className="py-16 px-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center mb-4">
                <p className="w-24">{skill.name}:</p>
                <div className="relative w-64 h-2 bg-gray-300 rounded-full">
                  <div
                    className="absolute inset-0 bg-blue-500 rounded-full hover:w-full transition-width duration-500 "
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                  <p className="sm:cursor-pointer absolute top-0 right-0 mr-2 text-xs font-bold text-gray-700 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    {skill.percentage}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Skills;
