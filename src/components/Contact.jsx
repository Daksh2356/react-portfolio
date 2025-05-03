import React, { useState } from 'react';
import { Element, scroller } from 'react-scroll';
import { FaTwitterSquare, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // form submission logic here
    alert("Thanks for filling the form");

    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    // Scroll to the "about" section with offset after the form submission
    setTimeout(() => {
      scroller.scrollTo('about', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -80, // Adjust this offset value as needed
      });
    }, 100); // Adjust this delay as needed to ensure the scroll occurs after the form submission
  };

  return (
    <Element name="contact">
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>

          <div className="flex justify-center gap-4 mb-8 flex-wrap">
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

          <form onSubmit={handleSubmit} className="max-w-lg mx-auto w-full px-4 sm:px-0">
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full sm:w-auto">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
