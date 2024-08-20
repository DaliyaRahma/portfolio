import React from 'react';
import { useLocation } from 'react-router-dom';

const DesignDemo = () => {
  const location = useLocation();
  const { type, images } = location.state;

  return (
    <div className="bg-black text-white min-h-screen p-8 justify-center py-24">
      <div className="text-center mb-8">

          <h1 className='text-2xl md:text-4xl font-bold inline border-b-4 border-gray-500'>
          Design Details
          </h1>
          <p className='md:text-lg py-4 text-sm text-gray-500'>Experience the depth and beauty of design</p>
        </div>
        <div className='flex flex-col justify-center  space-y-9'>
        {images.map((src, index) => (
          type === 'video' ? (
            <video key={index} className="w-full h-full object-cover" controls autoPlay loop>
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            
              <img key={index} src={src} alt='' className='w-full h-full object-cover rounded-xl' />
            ))
          )}
        </div>
      </div>
  
  );
}

export default DesignDemo;
