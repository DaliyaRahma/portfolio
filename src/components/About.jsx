import React from "react";
import TextSphere from "./TextSphere";

const About = () => {
  return (
    <div
      name="about"
      className="relative w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex flex-col justify-center items-center py-12"
    >
      <div className="max-w-screen-lg w-full mx-auto flex flex-col items-center justify-center px-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-6 md:space-y-0 md:ml-0 md:mr-12">
          <div className="md:text-lg w-full text-center text-gray-300 py-2 text-sm md:text-left">
            <p className="leading-relaxed">
              Hello! I'm a UI Developer with a passion for creating stunning and intuitive digital experiences. My expertise lies in both designing and developing websites that are not only visually appealing but also highly functional.
              <br /><br />
              I have a strong command of Figma, HTML, CSS, Tailwind CSS, React, and JavaScript, which allows me to take a project from concept to completion. Whether it's designing a sleek and modern user interface or coding responsive web pages, I enjoy every step of the process.
              <br /><br />
              I believe in the power of good design to solve problems and enhance the user experience. My approach is user-centric, ensuring that every project I work on is both beautiful and easy to use. I'm constantly learning and experimenting with new technologies and design trends to keep my skills sharp and my work cutting-edge.
              <br /><br />
              When I'm not designing or coding, I love exploring the latest in web design, discovering new tools and techniques, and pushing the boundaries of what's possible online. Let's work together to bring your vision to life!
            </p>
          </div>

          <div className="flex w-full md:w-1/3 justify-center items-center mt-6 md:mt-0 md:ml-12">
            <TextSphere />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
