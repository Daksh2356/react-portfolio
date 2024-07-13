import React from "react";
import { Element } from "react-scroll";

const Education = () => {
  return (
    <Element name="education">
      <section id="education" className="py-16 bg-gray-100 px-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 ">Education</h2>

          {/* Education Details */}
          <div className="grid gap-8 text-lg">
            {/* BTECH, Information Technology */}
            <div>
              <h3 className="font-bold">BTECH, Information Technology</h3>
              <p className="font-semibold">Guru Tegh Bahadur Institute of Technology, 2024</p>
              <p className="italic">9.07 CGPA</p>
            </div>

            {/* CBSE Class XII */}
            <div>
              <h3 className="font-bold">CBSE (Class XII)</h3>
              <p className="font-semibold">Hans Raj Model School, Punjabi Bagh, 2020</p>
              <p className="italic">92.4%</p>
            </div>

            {/* CBSE Class X */}
            <div>
              <h3 className="font-semibold">CBSE (Class X)</h3>
              <p className="font-semibold">Hans Raj Model School, Punjabi Bagh, 2018</p>
              <p className="italic">92.2%</p>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Education;
