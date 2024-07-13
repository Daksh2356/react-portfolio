import React from "react";
import { Element } from "react-scroll";

const Experience = () => {
  return (
    <Element name="experience">
      <section id="experience" className="py-16 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Internship Experience</h2>

          {/* Experience Cards */}
          <div className="grid gap-8 px-24">
            {/* Full Stack Developer Intern, CRAC Learning Gurugram */}
            <div>
              <h3 className="font-semibold mt-2">Full Stack Developer Intern, CRAC Learning Gurugram</h3>
              <p className="text-md">Cybersecurity Research and Awareness Community helping security enthusiasts by spreading security awareness</p>
              <p className="italic text-sm">December 2023 – January 2024, Gurugram</p>
              <ul className="list-disc pl-8 mt-4">
                <li>Created and tested API’s in Node.js for integration of different software components.</li>
                <li>Established a real-time client-server chat model using Web Sockets to enhance the user experience.</li>
                <li>Utilized Redis for in-memory storage to cache chat messages and ensure faster data access across the application.</li>
              </ul>
            </div>

            {/* React Developer Intern, Incredible Apps */}
            <div>
              <h3 className="font-semibold mt-2">React Developer Intern, Incredible Apps (Shopify system design)</h3>
              <p className="text-md">E-commerce platform that allows businesses and individuals to create and manage their online stores</p>
              <p className="italic text-sm">June 2023 – August 2023, Bangalore</p>
              <ul className="list-disc pl-8 mt-4">
                <li>Developed an online application using Polaris, a system design developed and maintained by Shopify.</li>
                <li>Setting up of online stores for extensions and embed work.</li>
              </ul>
            </div>

            {/* Full Stack Developer Intern, Boston Consulting Group */}
            <div>
              <h3 className="font-semibold mt-2">Full Stack Developer Intern, Boston Consulting Group Gurugram</h3>
              <p className="text-md">Management consulting firm that partners with leaders and societies in business to tackle their important challenges</p>
              <p className="italic text-sm">August 2022 – September 2022, Gurugram</p>
              <ul className="list-disc pl-8 mt-4">
                <li>Developed and designed a responsive FAQ website in React JS for 3L+ teachers in Rajasthan.</li>
                <li>The website consists of an exhaustive and topic-wise list of questions frequently asked by teachers.</li>
                <li>Created an automated mechanism to ensure easy FAQ website updates post deployment.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Experience;
