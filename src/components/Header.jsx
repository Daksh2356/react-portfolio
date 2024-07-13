import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white px-5 py-3 flex items-center justify-between">
      <h1 className='text-3xl font-bold'>Daksh Makhija</h1>
      <nav>
        <ul className="flex space-x-8">
          <li>
            <Link to="about" smooth={true} duration={500} className="hover:text-blue-700">
              About
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} className="hover:text-blue-700">
              Projects
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500} className="hover:text-blue-700">
              Experience
            </Link>
          </li>
          <li>
            <Link to="education" smooth={true} duration={500} className="hover:text-blue-700">
              Education
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} className="hover:text-blue-700">
              Skills
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="hover:text-blue-700">
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
