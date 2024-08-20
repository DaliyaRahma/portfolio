
import React from 'react';
import pizza from '/Users/daliyarahma/Desktop/my-project/src/asset/portfolio/pizza.png';


const DeveloperPortfolio = () => {
  const portfolios = [
    { id: 1, src: pizza , demoLink:'https://dribbble.com/daliyarahma' , codeLink:'https://github.com/DaliyaRahma?tab=repositories' },

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
          {portfolios.map(({ id, src , demoLink , codeLink }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg overflow-hidden hover:scale-105 duration-500'>
              <img src={src} alt='' className='w-full h-48 object-cover' />
              <div className='flex justify-center items-center'>
                <button onClick={()=>window.open(demoLink ,'_blank')} className='w-1/2 px-6 py-3 m-4 hover:scale-125 duration-200'>Demo</button>
                <button onClick={()=>window.open(codeLink,'_blank')} className='w-1/2 px-6 py-3 m-4 hover:scale-125 duration-200'>Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DeveloperPortfolio;

