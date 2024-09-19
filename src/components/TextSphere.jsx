import TagCloud from 'TagCloud';
import React, { useEffect, useRef } from 'react'

const TextSphere = () => {
    const tagCloudRef = useRef(null);
    const initializedRef = useRef(false);
    useEffect(() => {
        if (initializedRef.current) return;
        const myTags = [
            'JavaScript', 'CSS', 'HTML', 'React',
             'git', 'Node.js',
            'Wordpress', 'Netlify', 'JavaScript', 'CSS', 'HTML', 'Next.Js', 'React',
            'git', 'Node.js',
           'Express', 'MongoDB',
        ]
        const radius = window.innerWidth < 640 ? 150 : 240;
        const options = {
            radius: radius,
            maxSpeed: 'fast',
            initSpeed: 'fast',
            direction: 135,
            keep: true

        }
        if(tagCloudRef.current) {
            TagCloud(tagCloudRef.current, myTags, options)
            initializedRef.current = true;

        }
        const colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', '#FFBA01', '#01A6F0'];
        const tags = document.querySelectorAll('.tagcloud--item');
        tags.forEach(tag => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)]
            tag.style.color = randomColor
        });
    }, []);
    return (
        <div className='flex justify-center items-center h-full'>
            <div className='w-full h-full'>
                <div className='tagcloud h-full' ref={tagCloudRef}>

                </div>
            </div>

        </div>
    )
}

export default TextSphere
