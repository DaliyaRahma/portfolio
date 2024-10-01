import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import myImage from '../assets/portfolio/myImage.png';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


import { Link } from 'react-scroll';

const Home = ({ nav }) => {
  const firstL = "Hello!";
  const secL = "I'm Front - End";
  const thirdL = ["Developer", "Designer", "Creator"];

  const Org = (Text) => (
    Text.split("").map((char, index) => (
      <motion.span key={index}
        whileHover={{
          color: "#06b6d4",
          y: -30, transition: { duration: 0.3 }
        }}
        className='inline-block'>
        {char === ' ' ? <span className='inline-block w-2'>{char}</span> : char}
      </motion.span>
    ))
  );

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % thirdL.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [thirdL.length]);

  const slideIn = {
    enter: {
      color: "#FFFF",
      y: 50,
      transition: { duration: 0.8 },
    },
    center: {
      y: 0,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 100,
        when: "beforeChildren",
        duration: 1.1,
      },
    },
    changeColor: {
      color: ["#FFFF", "#9cdbf7", "#06b6d4"],
      transition: { duration: 1.1 },
    },
    exit: {
      y: -100,
      color: "#FFFF",
      transition: { duration: 0.8 },
    },
  };

  return (
    <div name="home" className='relative h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
     
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6 md:flex-row md:space-x-16'>
        <div className='flex flex-col mt-24 justify-between'>
          <h1 className='text-white text-2xl sm:text-5xl font-signature font-bold md:mt-0'>
            {Org(firstL)}
          </h1>
          <h2 className='text-white text-nowrap text-4xl sm:text-7xl font-bold'>
            {Org(secL)}
          </h2>
          {!nav && (
            <div className='flex flex-col text-white text-nowrap text-4xl sm:text-7xl font-bold relative w-full h-12 md:h-24 overflow-hidden'>
              <AnimatePresence initial={false} custom={wordIndex} mode="wait">
                <motion.span
                  key={wordIndex}
                  initial="enter"
                  animate={["center", "changeColor"]}
                  exit="exit"
                  variants={slideIn}
                  className='absolute text-center'>
                  {thirdL[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          )}
          <p className='relative text-gray-500 py-2 max-w-md my-0 text-sm md:text-lg'>I am a passionate front-end developer and designer who loves working on web applications using React.js and Tailwind CSS.</p>
          < Link to='portfolio' smooth duration={500} offset={-50} className='group text-white w-fit px-6 py-3 mt-3 mb-10 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-cyan-800 hover:border-solid hover:border-cyan-500 hover:bg-none border-2 cursor-pointer ' >
            Portfolio
            <span className='group-hover:rotate-90 duration-300'>
              <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
            </span>
            </Link>
         
          </div>
          <img src={myImage} alt="my pic" className='relative rounded-2xl w-2/3 md:w-1/3'></img>
        </div>
       
      </div>
   
  );
}

export default Home;
