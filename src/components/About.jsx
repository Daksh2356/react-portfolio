import React from "react";
import { Element } from "react-scroll";
import ProfileImage from "../assets/images/profile.jpeg";

const About = () => {
  return (
    <Element name="about" onPlay={()=> console.log(process.env.NODE_ENV)}>
      <section
        id="about"
        className="px-8 py-8 md:px-24 flex flex-col md:flex-row items-center justify-center"
      >
        <div className="w-full md:w-2/3 mb-8 md:mb-0 md:pr-8 flex-shrink-0">
          <img
            src={ProfileImage}
            alt="Profile"
            className="rounded-sm mx-auto h-80 lg:h-96 object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-center mb-4">About Me</h1>
          <div className="text-lg">
            <ul className="list-disc pl-8 mt-4">
              <li>
                I am a <span className="font-bold italic">Web Developer</span>{" "}
                with a passion for software development and project work.
              </li>
              <li>
                Proficient in{" "}
                <span className="font-bold italic">
                  various programming languages
                </span>{" "}
                including C++, Java, Python, HTML, CSS, JavaScript, SQL, and
                Dart.
              </li>
              <li>
                Sound knowledge of OOPS, DBMS, Data Structures, Java applets,
                and Abstract Windowing.
              </li>
            </ul>
          </div>
            <div className="pt-8 text-center">
              <a
                href="https://drive.google.com/file/d/18W-LLVv4RQG9IVy60l7nNQ_x454N3ipD/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button onClick={()=> console.log("hi" + process.env.NODE_ENV)} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full sm:w-auto">
                  Download My Resume
                </button>
              </a>
            </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
