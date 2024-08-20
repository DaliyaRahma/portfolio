import React from 'react';
import { useNavigate } from "react-router-dom";
import pizza from '../asset/portfolio/pizza.png';
import App from '../asset/portfolio/design temp.png';
import furniture from '../asset/portfolio/furniture.jpg';
import logogreen from '/Users/daliyarahma/Desktop/my-project/src/asset/portfolio/MacBook Pro 16_ - 2.jpg';
import banner from '/Users/daliyarahma/Desktop/my-project/src/asset/portfolio/MacBook Pro Mockup on the Table.jpg';
import banner1 from '/Users/daliyarahma/Desktop/my-project/src/asset/portfolio/web banner.jpg';
import logogreen1 from '/Users/daliyarahma/Desktop/my-project/src/asset/portfolio/Frame 9.png';
import Cake from '/Users/daliyarahma/Desktop/my-project/src/asset/portfolio/CAKE WALK LOGO.png';
import cake1 from '/Users/daliyarahma/Desktop/my-project/src/asset/portfolio/cake walk.png';
import App1 from '/Users/daliyarahma/Desktop/my-project/src/asset/portfolio/MacBook Air - 1.jpg';
import App2 from '/Users/daliyarahma/Desktop/my-project/src/asset/portfolio/MacBook Air - 2.jpg';
import App3 from '/Users/daliyarahma/Desktop/my-project/src/asset/portfolio/MacBook Air - 3.jpg';
import App4 from '/Users/daliyarahma/Desktop/my-project/src/asset/portfolio/MacBook Air - 4.jpg';
import App5 from '/Users/daliyarahma/Desktop/my-project/src/asset/portfolio/MacBook Air - 5-1.jpg';
import App6 from '/Users/daliyarahma/Desktop/my-project/src/asset/portfolio/MacBook Air - 6.jpg';
import App7 from '/Users/daliyarahma/Desktop/my-project/src/asset/portfolio/MacBook Air - 7.jpg';
import blender from '/Users/daliyarahma/Desktop/my-project/src/asset/portfolio/video0001-0330.mp4';
import shoe from '/Users/daliyarahma/Desktop/my-project/src/asset/portfolio/shoewebsite.png'
import shoe1 from '/Users/daliyarahma/Desktop/my-project/src/asset/portfolio/shoewebsite1.jpg'
import denzo from '/Users/daliyarahma/Desktop/my-project/src/asset/portfolio/denzo1.jpg'
import denzo1 from '/Users/daliyarahma/Desktop/my-project/src/asset/portfolio/denzo.png'
const DesignerPortfolio = () => {
  const navigate = useNavigate();

  const designs = [
 
    { id: 5, type: 'image', src: App, images: [App, App1, App2, App3, App4, App5, App6, App7] },
    { id: 9, type: 'image', src: denzo, images: [denzo, denzo1] },
    { id: 8, type: 'image', src: shoe, images: [shoe1] },
    { id: 7, type: 'video', src: blender, images: [blender] },
    { id: 1, type: 'image', src: pizza, images: [pizza] },
    { id: 2, type: 'image', src: banner, images: [banner1, banner] },
    { id: 3, type: 'image', src: furniture, images: [furniture] },
    { id: 4, type: 'image', src: logogreen, images: [logogreen, logogreen1] },

    { id: 6, type: 'image', src: Cake, images: [Cake, cake1] },
  ];

  const demoClick = (type, images) => {
    navigate('/designdemo', { state: { type, images } });
  }

  return (
    <div name='designdemo' className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen text-white">
      <div className='max-w-screen-lg mx-auto py-24 flex flex-col justify-center text-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-2xl md:text-4xl font-bold inline border-b-4 border-gray-500'>
            My Design Portfolio
          </p>
          <p className='md:text-lg py-4 text-sm text-gray-500'>Explore My Visual Creations</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0 px-12'>
          {designs.map(({ id, type, src, images }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg overflow-hidden hover:scale-105 duration-500'>
              {type === 'video' ? (
                <video className="w-full h-48 object-cover" controls autoPlay loop>
                  <source src={src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={src} alt='' className={`w-full h-48 object-cover ${[3, 9].includes(id) ? 'object-left-top' : 'object-center'}`} />
              )}
              <div className='flex justify-center items-center'>
                <button onClick={() => demoClick(type, images)} className='w-full px-6 py-3 m-4 hover:scale-125 duration-200'>
                  Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DesignerPortfolio;
