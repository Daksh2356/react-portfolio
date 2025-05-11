import React from "react";
import { Element } from "react-scroll";

const Experience = () => {
  return (
    <Element name="experience">
      <section id="experience" className="py-16 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-24">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Work Experience</h2>

          {/* Experience Cards */}
          <div className="grid gap-8 px-4 md:px-12 lg:px-24 ">

            {/* Software Engineer, S&P Global */}
            <div>
              <h3 className="font-bold mt-2">Software Engineer, S&P Global Gurugram</h3>
              <p className="font-semibold italic">A finance-based lending platform facilitating syndicated deal management between investors, firms, and lenders</p>
              <p className="italic text-sm text-blue-500">October 2024 – Present</p>
              <ul className="list-disc pl-5 md:pl-8 mt-4">
                <li>Developed <span className="font-bold">key features</span> such as <span className="font-bold">consent requests</span>, <span className="font-bold">admin impersonation</span>, and <span className="font-bold">localization</span> using <span className="font-bold">AngularJS</span>, <span className="font-bold">.NET</span>, and <span className="font-bold">SQL Server</span>.</li>
                <li>Worked on modules for <span className="font-bold">agency</span> and <span className="font-bold">syndication deals</span>, secure <span className="font-bold">datarooms</span>, and <span className="font-bold">multi-role access</span> for streamlined data exchange.</li>
              </ul>
            </div>

            {/* Full Stack Developer Intern, CRAC Learning Gurugram */}
            <div>
              <h3 className="font-bold mt-2">Full Stack Developer Intern, CRAC Learning Gurugram</h3>
              <p className="font-semibold italic">Cybersecurity Research and Awareness Community helping security enthusiasts by spreading security awareness</p>
              <p className="italic text-sm text-blue-500">December 2023 – January 2024, Gurugram</p>
              <ul className="list-disc pl-5 md:pl-8 mt-4">
                <li>Developed and tested robust API solutions in <span className="font-bold">Node.js</span> for seamless integration of software components.</li>
                <li>Implemented a real-time client-server chat model using <span className="font-bold italic">WebSockets</span>, significantly enhancing user engagement.</li>
                <li>Leveraged <span className="font-bold">Redis</span> for efficient in-memory caching, boosting chat performance and data accessibility.</li>
              </ul>
            </div>

            {/* React Developer Intern, Incredible Apps */}
            <div>
              <h3 className="font-bold mt-2">React Developer Intern, Incredible Apps (Shopify system design)</h3>
              <p className="font-semibold italic">E-commerce platform that allows businesses and individuals to create and manage their online stores</p>
              <p className="italic text-sm text-blue-500">June 2023 – August 2023, Bangalore</p>
              <ul className="list-disc pl-5 md:pl-8 mt-4">
                <li>Built a dynamic online application using <span className="font-bold italic">Polaris</span>, the official system design framework by Shopify.</li>
                <li>Configured and set up <span className="font-bold">online stores</span> with custom extensions and embedded features to enhance usability.</li>
              </ul>
            </div>

            {/* Full Stack Developer Intern, Boston Consulting Group */}
            <div>
              <h3 className="font-bold mt-2">Full Stack Developer Intern, Boston Consulting Group Gurugram</h3>
              <p className="font-semibold italic">Management consulting firm that partners with leaders and societies in business to tackle their important challenges</p>
              <p className="italic text-sm text-blue-500">August 2022 – September 2022, Gurugram</p>
              <ul className="list-disc pl-5 md:pl-8 mt-4">
                <li>Designed and developed a highly responsive FAQ website using <span className="font-bold">ReactJS</span> for over 3 lakh teachers in Rajasthan.</li>
                <li>Structured the website to feature a comprehensive and categorised list of <span className="font-bold italic">FAQs</span> to streamline access of information.</li>
                <li>Implemented an automated update mechanism for seamless FAQ updates even after deployment.</li>
              </ul>
            </div>
            
            {/* Web Developer Intern, Abhyaz */}
            <div>
              <h3 className="font-bold mt-2">Web Developer Intern, Abhyaz</h3>
              <p className="font-semibold italic">E-Learning platform providing courses and software across broad engineering technologies</p>
              <p className="italic text-sm text-blue-500">June 2022 – August 2022</p>
              <ul className="list-disc pl-5 md:pl-8 mt-4">
                <li>Contributed to the development of the <span className="font-bold">CNCTrain</span> website by designing layouts and creating intuitive interfaces.</li>
                <li>Improved <span className="font-bold">product visibility</span> by implementing a more <span className="font-bold">user-friendly</span> presentation, making the offerings accessible to a larger audience.</li>
                <li><span className="font-bold">Led</span> a multidisciplinary team of interns from web development, software engineering, and design, enhancing my leadership and collaboration skills.</li>
                <li>Strengthened my management and communication abilities through project coordination and team collaboration.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </Element>
  );
};

export default Experience;
