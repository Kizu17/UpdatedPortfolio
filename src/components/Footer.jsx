import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo2 from '../assets/logo2.png';
import { FaFacebook, FaInstagram, FaGithub   } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const Footer = () => {
    const navigate = useNavigate();
  return (
    <div className='bg-tertiary mb-4'>
      <div className='flex flex-row text-center items-center justify-center mt-4'>
         <img
            src={logo2}
            alt="Profile"
            className='w-24'/>
            <p className='text-secondary font-cursive text-xl lg:ml-0 ml-4'>R<span className='text-details text-2xl'>.</span></p>
      </div>
      <div className='flex justify-center items-center'>
        <div className='flex flex-row gap-8 mt-4'>
          <div className='relative group cursor-pointer'  onClick={() => navigate('/')}>
             <span className="text-secondary font-semibold ">Home</span>
             <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-details transition-all duration-300 group-hover:w-full"></span>
          </div>
          <div className='relative group cursor-pointer'  onClick={() => navigate('/about')}>
             <span className="text-secondary font-semibold ">About</span>
             <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-details transition-all duration-300 group-hover:w-full"></span>
          </div>
           <div className='relative group cursor-pointer'  onClick={() => navigate('/internship')}>
             <span className="text-secondary font-semibold ">Internship</span>
             <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-details transition-all duration-300 group-hover:w-full"></span>
          </div>
           <div className='relative group cursor-pointer'  onClick={() => navigate('/projects')}>
             <span className="text-secondary font-semibold ">Projects</span>
             <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-details transition-all duration-300 group-hover:w-full"></span>
          </div>
        </div>
      </div>
      <div className="border-b-1 border-secondary/25 w-full mt-4"></div>
      <div className='mt-2 flex justify-center items-center flex-col'>
        <p className='text-secondary text-xl font-semibold'>
            Stay in Touch
        </p>
        <div className='flex flex-row gap-8 mt-4'>
          <a href="https://www.facebook.com/rogerray.cruz/"  target="_blank">
            <div>
              <FaFacebook className='text-3xl text-secondary cursor-pointer'/>
            </div>
          </a>

          <a href="https://www.instagram.com/_.k_i_z_u._/"  target="_blank">
            <div>
              <FaInstagram className='text-3xl text-secondary cursor-pointer'/>
            </div>
          </a>
          
          <a href="https://github.com/Kizu17"  target="_blank">
            <div>
              <FaGithub className='text-3xl text-secondary cursor-pointer'/>
            </div>
          </a>

          <a
            href="mailto:rogerraycruz@gmail.com?subject=Job%20Application&body=Hi%20there%2C"
            target="_blank"
            rel="noopener noreferrer"
            >
            <div>
              <MdOutlineEmail className='text-3xl text-secondary cursor-pointer'/>
            </div>
          </a>

        </div>
        <p className='text-secondary/75 font-extralight mt-2'>  © 2025 Roger Ray R. Cruz. All rights reserved. </p>
      </div>
    </div>
  )
}

export default Footer