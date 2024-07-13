import React from 'react';
import { Element } from 'react-scroll';
import { FaTwitterSquare, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // form submission logic here
    // Example: console.log('Form submitted!');
    alert("Thanks for filling the form");
    window.location.reload();
  };

  return (
    <Element name="contact">
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>

          <div className="flex justify-center gap-4 mb-8">
            <a href="https://twitter.com/DakshMakhija_" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              <FaTwitterSquare size={32} />
            </a>
            <a href="https://www.linkedin.com/in/dakshmakhija/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              <FaLinkedin size={32} />
            </a>
            <a href="https://github.com/Daksh2356" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              <FaGithub size={32} />
            </a>
            <a href="mailto:dakshmakhija@gmail.com" className="text-blue-500 hover:text-blue-700">
              <FaEnvelope size={32} />
            </a>
          </div>

          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium">Name</label>
              <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded px-3 py-2 mt-1" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium">Email</label>
              <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded px-3 py-2 mt-1" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-medium">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded px-3 py-2 mt-1" required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
