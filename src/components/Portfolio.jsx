import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Portfolio = () => {
  const navigate = useNavigate();

  const goTo = () => {
    navigate("/developer");
  };
  const directTo = () => {
    navigate("/designer");
  };

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 min-h-screen text-white w-full">
      <div className="max-w-screen-lg mx-auto p-8 flex flex-col justify-center text-center w-full h-full">
        <div className="pb-4">
          <p className="text-2xl md:text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="md:text-lg pt-4 text-sm">Checkout some of my work here</p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 sm:px-0 px-12">
          <div className="shadow-md shadow-gray-600 rounded-lg overflow-hidden bg-white bg-opacity-10 backdrop-blur-lg p-6">
            <p className="text-xl md:text-2xl font-bold mb-4 text-cyan-500">Developer</p>
            <p className="text-sm md:text-lg mb-4">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
            <ul className="text-sm md:text-lg list-inside text-center space-y-4">
            <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Version Control (Git)</li>
              <li>Tailwind CSS</li>
              <li>Responsive Design</li>
              <li>Netlify</li>
            </ul>
            <div className="flex justify-center items-center mt-6">
              <button onClick={goTo} className="text-white w-fit px-6 py-3 mt-3 mb-5 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-cyan-800 hover:border-solid hover:border-cyan-500 hover:bg-none border-2 cursor-pointer text-sm sm:text-lg">
                See My Work
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </button>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg overflow-hidden bg-white bg-opacity-10 backdrop-blur-lg p-6">
            <p className="text-xl md:text-2xl font-bold mb-4 text-cyan-500">Designer</p>
            <p className="text-sm md:text-lg mb-4">I value simple content structure, clean design patterns, and thoughtful interactions.</p>
            <ul className="text-sm md:text-lg text-center space-y-4">
            <li>UI/UX Design</li>
              <li>Graphic Design</li>
              <li>Brand Identity</li>
              <li>Illustration</li>
              <li>Typography</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Figma</li>
              
            </ul>
            <div className="flex justify-center items-center mt-6">
              <button onClick={directTo} className="text-white w-fit px-6 py-3 mt-3 mb-5 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-cyan-800 hover:border-solid hover:border-cyan-500 hover:bg-none border-2 cursor-pointer text-sm sm:text-lg">
                See My Work
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
