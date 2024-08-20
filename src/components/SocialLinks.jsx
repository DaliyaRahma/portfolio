import React from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    Linkedin<FaLinkedin size={30}></FaLinkedin>
                </>
            ),
            href: "www.linkedin.com/in/daliya-r",
            style: "rounded-tr-md",

        },
        {
            id: 2,
            child: (
                <>
                    GitHub<FaGithub size={30} />
                </>
            ),
            href: "https://github.com/DaliyaRahma",


        },
        {
            id: 3,
            child: (
                <>
                    Mail<HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:daliyarahma95@gmail.com",


        },
        {
            id: 4,
            child: (
                <>
                    Resume<BsFillPersonLinesFill size={30} />
                </>
            ),
            href: "/Daliya CV.pdf",
            style: "rounded-br-md",
            download: true,

        },
    ]
    return (
        <div className='hidden lg:flex flex-col left-0 top-[35%] fixed z-50'>
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li key={id}
                        className={`flex justify-between items-center h-14 w-40 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}>
                        <a href={href} 
                        className='flex justify-between items-center w-full text-white'
                            download={download}
                            target="_blank"
                            rel="noreferrer" 
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default SocialLinks
