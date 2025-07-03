
import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { IoIosCall } from "react-icons/io";
import { CiHome } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { GoProjectRoadmap } from "react-icons/go";
import { CiRollingSuitcase } from "react-icons/ci";
const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className='h-24 w-auto flex justify-center items-center lg:mr-24 lg:ml-24 p-4'>
        <div className='bg-secondary rounded-4xl w-full h-full flex items-center justify-between'>
            <div className='flex items-center'>
                <div className='ml-4 lg:block hidden '>
                    <img className="w-20 h-12 object-cover" src={logo} alt="School" />
                </div>
                <p className='text-tertiary font-cursive text-xl lg:ml-0 ml-4'>R<span className='text-details text-2xl'>.</span></p>
            </div>
            <div className='flex'>
                <div className='grid grid-cols-4 gap-8 lg:ml-0 ml-8'>
                    {/* Home */}
                    <div className="relative group cursor-pointer w-fit" onClick={() => navigate('/')}>
                        <span className="text-tertiary font-semibold lg:block hidden">Home</span>
                        <span className='lg:hidden block relative'>
                        <CiHome className='text-2xl text-main' />
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition">
                            Home
                        </div>
                        </span>
                        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-details transition-all duration-300 group-hover:w-full"></span>
                    </div>

                    {/* About */}
                    <div className="relative group cursor-pointer w-fit" onClick={() => navigate('/about')}>
                        <span className="text-tertiary font-semibold lg:block hidden">About</span>
                        <span className='lg:hidden block relative'>
                        <CiCircleInfo className='text-2xl text-main' />
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition">
                            About
                        </div>
                        </span>
                        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-details transition-all duration-300 group-hover:w-full"></span>
                    </div>

                    {/* Internship */}
                    <div className="relative group cursor-pointer w-fit" onClick={() => navigate('/internship')}>
                        <span className="text-tertiary font-semibold lg:block hidden">Internship</span>
                        <span className='lg:hidden block relative'>
                        <GoProjectRoadmap className='text-2xl text-main' />
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition">
                            Internship
                        </div>
                        </span>
                        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-details transition-all duration-300 group-hover:w-full"></span>
                    </div>

                    {/* Projects */}
                    <div className="relative group cursor-pointer w-fit "onClick={() => navigate('/projects')}>
                        <span className="text-tertiary font-semibold lg:block hidden">Projects</span>
                        <span className='lg:hidden block relative'>
                        <CiRollingSuitcase className='text-2xl text-main' />
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition">
                            Projects
                        </div>
                        </span>
                        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-details transition-all duration-300 group-hover:w-full"></span>
                    </div>
                </div>
            </div>
           <div className='mr-4'>
                <a
                href="mailto:rogerraycruz@gmail.com?subject=Job%20Application&body=Hi%20there%2C"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <div className='lg:w-32 w-12 h-11 bg-main rounded-2xl flex items-center justify-center cursor-pointer hover:bg-details group relative'>
                        <p className='text-secondary text-md font-bold hover:text-main lg:block hidden'>Contact Me</p>
                        
                        {/* Icon + Tooltip on small screens */}
                        <span className='lg:hidden block relative'>
                        <IoIosCall className='text-secondary text-2xl hover:text-main' />
                        
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition">
                            Contact Me
                        </div>
                        </span>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}
 
export default Navbar