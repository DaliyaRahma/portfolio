
import React from 'react';
import website from '../assets/portfolio/mywebsite.png';
import crud from '../assets/portfolio/crud.png'


const DeveloperPortfolio = () => {
  const portfolios = [
    { id: 1, src: website , title: 'Portfolio', demoLink:'https://daliya.netlify.app' , codeLink:'https://github.com/DaliyaRahma/portfolio' },
    { id: 2, src: crud , title: 'User Management System', demoLink:'https://crud-inky-eight.vercel.app' , codeLink:'https://github.com/DaliyaRahma/Crud-' },

  ];

  return (
    <div name='DeveloperPortfolio'className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen text-white">
      <div className='max-w-screen-lg mx-auto py-24 flex flex-col justify-center text-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-2xl md:text-4xl font-bold inline border-b-4 border-gray-500'>
          My Developer Portfolio
          </p>
          <p className='md:text-lg py-4 text-sm text-gray-500'>Explore My Code Creations</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0 px-12'>
          {portfolios.map(({ id, src , demoLink , codeLink, title }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg overflow-hidden hover:scale-105 duration-500'>
              <img src={src} alt='' className='w-full h-48 object-cover' />
              <h2 className='flex flex-col items-center text-sm font-medium underline  md:text-lg p-2 '>
                {title}</h2>
              <div className='flex justify-center items-center'>
                <button onClick={()=>window.open(demoLink ,'_blank')} className='w-1/2 text-white shadow-sm shadow-gray-600  px-6 py-2 m-4 rounded-md hover:scale-110 duration-200 hover:border-solid hover:shadow-cyan-500'>Demo</button>
                <button onClick={()=>window.open(codeLink,'_blank')} className='w-1/2 shadow-sm shadow-gray-600   text-white px-6 py-2 m-4 rounded-md hover:scale-110 duration-200 hover:border-solid hover:shadow-cyan-500 '>Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DeveloperPortfolio;

