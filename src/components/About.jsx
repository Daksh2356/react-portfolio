import React from "react";
import { Element } from "react-scroll";
import ProfileImage from "../assets/images/profile.jpeg"; 

const About = () => {
  return (
    <Element name="about">
      <section id="about" className="px-4 py-4 md:px-24 flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-2/3 mb-8 md:mb-0 md:pr-8 flex-shrink-0">
          <img src={ProfileImage} alt="Profile" className="rounded-sm mx-auto h-52 md:h-auto md:max-h-screen object-cover" />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-center mb-4">About Me</h1>
          <div className="text-lg">
            <ul className="list-disc pl-8 mt-4">
              <li>
                I am a <span className="font-bold italic">Web Developer</span> with a passion for software development and project work.
              </li>
              <li>
                Proficient in <span className="font-bold italic">various programming languages</span> including C++, Java, Python, HTML, CSS, JavaScript, SQL, and Dart.
              </li>
              <li>
                Sound knowledge of OOPS, DBMS, Data Structures, Java applets and Abstract Windowing.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
