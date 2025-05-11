import React from 'react';
import { Element } from 'react-scroll';

const Skills = () => {
  const skills = [
    { name: 'HTML', percentage: 95 },
    { name: 'CSS', percentage: 95 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'Java', percentage: 90 },
    { name: 'React', percentage: 90 },
    { name: 'Node', percentage: 85 },
    { name: 'Python', percentage: 85 },
    { name: 'SQL', percentage: 85 },
    { name: 'Flutter', percentage: 80 },
    { name: 'Firebase', percentage: 80 },
    { name: 'MongoDB', percentage: 75 },
    { name: 'AWS', percentage: 75 },
  ];

  return (
    <Element name="skills">
      <section id="skills" className="py-16 px-24 md:px-8 lg:px-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center mb-4">
                <p className="w-24">{skill.name} :</p>
                <div className="relative flex items-center flex-grow mx-2 h-4 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-blue-500 rounded-full transition-width duration-500 hover:bg-blue-700 "
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                  <p className="sm:cursor-pointer absolute top-0 right-0 mr-2 text-xs font-extrabold text-gray-700 opacity-0 hover:opacity-100 transition-opacity duration-300">
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
