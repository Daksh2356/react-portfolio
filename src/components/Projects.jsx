import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { MdSlowMotionVideo } from "react-icons/md";
import projectData from "../assets/data/projects.json";

const Projects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(projectData);
  }, []);

  return (
    <Element name="projects">
      <section id="projects" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-12 lg:px-24">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data.map((project, index) => (
              <div
                key={index}
                className="h-full border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105 relative flex flex-col"
              >
                {project.image && (
                  <img
                    className="object-cover w-full h-48 md:h-52"
                    alt="project"
                    src={require(`../assets/images/${project.image}`)}
                  />
                )}
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>

                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="mb-4">{project.description}</p>
                  </div>
                  
                  <div className="flex justify-between items-end h-max">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-blue-700"
                      >
                        <FaGithub size={24} />
                      </a>
                    )}
                    {project.deployment && (
                      <a
                        href={project.deployment}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-300 hover:text-blue-700"
                      >
                        <FaExternalLinkAlt size={24} />
                      </a>
                    )}
                    {project.video && (
                      <a
                        href={project.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-blue-700"
                      >
                        <MdSlowMotionVideo size={24} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Projects;
