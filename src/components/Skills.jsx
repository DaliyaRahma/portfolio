import React from 'react';
import html from '../assets/portfolio/html.png';
import css from '../assets/portfolio/css.png';
import javascript from '../assets/portfolio/javascript.png';
import react from '../assets/portfolio/react.png';
import github from '../assets/portfolio/github.png';
import tailwind from '../assets/portfolio/tailwind.png';
import node from '../assets/portfolio/node.png'
import Express from '../assets/portfolio/express-2.png'
import Mongodb from '../assets/portfolio/mongodb-2.png'

const Skills = () => {
    const skills = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500',
        },
        {
            id: 4,
            src: react,
            title: 'React',
            style: 'shadow-blue-600',
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400',
        },
        {
            id: 6,
            src: node,
            title: 'Node.Js',
            style: 'shadow-green-400',
        },
        {
            id: 7,
            src: Express,
            title: 'Express',
            style: 'shadow-gray-400',

        },
        {
            id: 8,
            src: Mongodb,
            title: 'Mongodb',
            style: 'shadow-green-400',

        },
        {
            id: 9,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400',

        },
    ];

    return (
        <div name='skills' className='min-h-screen py-12 w-full bg-gradient-to-b from-gray-800 to-black'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center text-center text-white h-full w-full'>
                <div>
                    <p className='text-2xl md:text-4xl  font-bold border-b-4 border-gray-500 p-2 inline'>Tools & Technologies</p>
                    <p className='md:text-lg py-4 text-sm '>These are the technologies I work with</p>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 px-12 py-4 sm:px-0 text-center gap-8'>
                    {skills.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt={title} className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
