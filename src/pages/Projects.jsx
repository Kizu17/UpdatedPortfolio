import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
//import './styles.css';
import { Pagination } from 'swiper/modules';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import art1 from '../assets/art1.png';
import art4 from '../assets/art4.png';
import art5 from '../assets/art5.jpg';

import art7 from '../assets/art7.jpg';
import art3 from '../assets/art3.png';
import art6 from '../assets/art6.jpg';
import art8 from '../assets/art8.png';
import art9 from '../assets/art9.png';
import art2 from '../assets/art2.jpg';
import art17 from '../assets/art17.png';
import art12 from '../assets/art12.jpg';
import art15 from '../assets/art15.jpg';
import program1 from '../assets/program1.png';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import CapstoneProject from '../assets/CapstoneProject.jpg';
import OldPortfolio from '../assets/OldPortfolio.png';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { SiKrita } from "react-icons/si";
import { FaEye, FaReact  } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { BsFiletypeHtml, BsFiletypeCss  } from "react-icons/bs";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col bg-main max-w-full overflow-x-hidden overflow-y-auto">
        <p className='text-main'>.</p>
        <div>
            <Navbar />
        </div>
            <div className="relative w-auto h-[620px] rounded-2xl ml-8 mr-8 mt-6 overflow-hidden ">
                <img src={program1} alt="About Me" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-secondary/75"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white p-12">
                    <div data-aos="zoom-in">
                      <p className='lg:text-6xl text-5xl text-center font-semibold'>Projects I Developed and Designed</p>
                      <p className='text-center font-extralight lg:text-lg text-m opacity-80 xl:w-[900px] w-[325px] mt-4'>
                      A personal project that visualizes fleeting thoughts and emotions through Web Development and Digital Art.
                      </p>
                    </div>
                </div>
            </div>
            <div  data-aos="fade-up" className='flex justify-center items-end w-full h-auto mb-12 mt-4'>
              <div className='grid 2xl:grid-cols-6 xl:grid-cols-4 md:grid-cols-6 grid-cols-3 gap-4'>
                  <div className='bg-secondary h-auto xl:w-68 w-32 p-8 rounded-2xl flex items-center justify-center'>
                    <div className='bg-details w-12 h-12 rounded-full flex justify-center items-center'>
                        <FaReact  className='text-main text-2xl'/>
                    </div>
                    <p className='text-xl  text-main ml-3 font-semibold hidden xl:block'>
                        <span className='text-details text-xl font-extralight '>[</span>&nbsp; React JS &nbsp;
                        <span className='text-details text-xl font-extralight'>]</span>
                    </p>
                  </div>
                  <div className='bg-secondary/25 h-auto xl:w-68 w-32 p-8 rounded-2xl flex items-center justify-center'>
                    <div className='bg-secondary w-12 h-12 rounded-full flex justify-center items-center'>
                       <RiTailwindCssFill  className='text-main text-2xl'/>
                     </div>
                      <p className='text-xl  text-secondary ml-3 font-semibold hidden xl:block'>
                        <span className='text-details text-xl font-extralight '>[</span>&nbsp; Tailwind CSS &nbsp;
                        <span className='text-details text-xl font-extralight'>]</span>
                    </p>
                  </div>
                  <div className='bg-secondary/25 h-auto xl:w-68 w-32 p-8 rounded-2xl flex items-center justify-center'>
                    <div className='bg-secondary w-12 h-12 rounded-full flex justify-center items-center'>
                       <GrMysql  className='text-main text-2xl'/>
                     </div>
                      <p className='text-xl  text-secondary ml-3 font-semibold hidden xl:block'>
                        <span className='text-details text-xl font-extralight '>[</span>&nbsp; MySQL &nbsp;
                        <span className='text-details text-xl font-extralight'>]</span>
                      </p>
                  </div>
                  <div className='bg-secondary/25 h-auto xl:w-68 w-32 p-8 rounded-2xl flex items-center justify-center'>
                     <div className='bg-secondary w-12 h-12 rounded-full flex justify-center items-center'>
                        <BsFiletypeHtml  className='text-main text-2xl'/>
                      </div>
                       <p className='text-xl  text-secondary ml-3 font-semibold hidden xl:block'>
                        <span className='text-details text-xl font-extralight '>[</span>&nbsp;HTML &nbsp;
                        <span className='text-details text-xl font-extralight'>]</span>
                     </p>
                  </div>
                  <div className='bg-secondary/25 h-auto xl:w-68 w-32 p-8 rounded-2xl flex items-center justify-center'>
                    <div className='bg-secondary w-12 h-12 rounded-full flex justify-center items-center'>
                       <BsFiletypeCss  className='text-main text-2xl'/>
                     </div>
                      <p className='text-xl  text-secondary ml-3 font-semibold hidden xl:block'>
                        <span className='text-details text-xl font-extralight '>[</span>&nbsp; CSS &nbsp;
                        <span className='text-details text-xl font-extralight'>]</span>
                      </p>
                  </div>
                  <div className='bg-secondary/25 h-auto xl:w-68 w-32 p-8 rounded-2xl flex items-center justify-center'>
                    <div className='bg-secondary w-12 h-12 rounded-full flex justify-center items-center'>
                       <SiKrita  className='text-main text-2xl'/>
                     </div>
                      <p className='text-xl  text-secondary ml-3 font-semibold hidden xl:block'>
                        <span className='text-details text-xl font-extralight '>[</span>&nbsp; Krita &nbsp;
                        <span className='text-details text-xl font-extralight'>]</span>
                      </p>
                  </div>
              </div>
            </div>
        <div>
          <div className='flex flex-col justify-center text-center items-center'>
            <p className='text-xl mt-4 font-extralight text-secondary'>
                <span className='text-details text-xl font-normal '>[</span>&nbsp;&nbsp; My Creations &nbsp;&nbsp;
                <span className='text-details text-xl font-extralight'>]</span>
            </p>
            <p className='text-secondary text-3xl mt-2 '>Take a look at the projects that shaped who I am.</p>
            <p className='text-secondary text-lg font-light mt-2 lg:w-[620px] w-[420px]'>These creations are more than just projects — they represent the challenges I’ve faced, the skills I’ve developed, and the passion I’ve poured into every detail.</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000" className="flex justify-center items-center min-h-screen mt-12">
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-fit">
              <div className='md:w-[400px] w-[375px] md:h-[600px] h-[650px] bg-secondary   rounded-2xl'>
                  <div className='h-full'>
                    <div className='h-1/2'>
                      <div className='flex justify-end mr-2 mt-2'>
                         <div className='flex pl-4 gap-2'>
                          <div className='bg-details w-12 h-12 rounded-full flex justify-center items-center'>
                            <FaReact  className='text-main text-2xl'/>
                          </div>
                          <div className='bg-details w-12 h-12 rounded-full flex justify-center items-center'>
                            <RiTailwindCssFill  className='text-main text-2xl'/>
                          </div>
                          <div className='bg-details w-12 h-12 rounded-full flex justify-center items-center'>
                            <GrMysql  className='text-main text-2xl'/>
                          </div>
                        </div>
                      </div>
                      <div className='pl-4'>
                         <p className='text-sm mt-4 font-extralight text-main'>
                              <span className='text-details text-xl font-normal '>[</span>&nbsp;&nbsp; Path-Tulong &nbsp;&nbsp;
                              <span className='text-details text-xl font-extralight'>]</span>
                          </p>
                           <p className='text-main text-xl mt-2 '>We proudly built Path-Tulong - a solution for student support and well-being</p>
                           <p className='text-main text-sm  font-light mt-1 mr-2'>These works helped shape Path-Tulong — our capstone project created for the students of Pasay City National High School, aiming to provide accessible mental health support and guidance that every learner deserves.</p>
                      </div>
                      <div className='mt-2 ml-2 w-24'>
                        <a href="https://capstone-path-tulong.vercel.app/" target="_blank" rel="noopener noreferrer">
                          <button className='px-4 py-2 flex items-center bg-details font-semibold text-main hover:text-details hover:bg-main rounded-2xl'><span><FaEye className='text-xl mr-1'/></span> View</button>
                        </a>
                      </div>
                    </div>
                    <div className='h-1/2 rounded-2xl'>
                      <img src={CapstoneProject} className='object-cover rounded-2xl h-full w-full' alt="" />
                    </div>
                  </div>
                </div>


               <div className='md:w-[400px] w-[375px] md:h-[600px] h-[650px] bg-secondary   rounded-2xl'>
                  <div className='h-full'>
                    <div className='h-1/2'>
                    <div className='flex justify-end mr-2 mt-2'>
                         <div className='flex pl-4 gap-2'>
                          <div className='bg-details w-12 h-12 rounded-full flex justify-center items-center'>
                            <FaReact  className='text-main text-2xl'/>
                          </div>
                          <div className='bg-details w-12 h-12 rounded-full flex justify-center items-center'>
                            <RiTailwindCssFill  className='text-main text-2xl'/>
                          </div>
                        </div>
                      </div>
                      <div className='pl-4'>
                         <p className='text-sm mt-4 font-extralight text-main'>
                              <span className='text-details text-xl font-normal '>[</span>&nbsp;&nbsp;Old Portfolio &nbsp;&nbsp;
                              <span className='text-details text-xl font-extralight'>]</span>
                          </p>
                           <p className='text-main text-xl mt-2 '>A look back at my earlier portfolio — where my development journey began.</p>
                           <p className='text-main text-sm  font-light mt-1 mr-2'>This section features my first portfolio, built while learning React, Vite, and Tailwind CSS. It marks the start of my journey as a front-end developer, highlighting my early skills and passion for design and development.</p>
                      </div>
                      <div className='mt-2 ml-2 w-24'>
                        <a href="https://kizu17.github.io/portfolio/" target="_blank" rel="noopener noreferrer">
                          <button className='px-4 py-2 flex items-center bg-details font-semibold text-main hover:text-details hover:bg-main rounded-2xl'><span><FaEye className='text-xl mr-1'/></span> View</button>
                        </a>
                      </div>
                    </div>
                    <div className='h-1/2 rounded-2xl'>
                      <img src={OldPortfolio} alt=""  className='object-cover  rounded-2xl h-full w-full' />
                    </div>
                  </div>
              </div>


                <div className='md:w-[400px] w-[375px] md:h-[600px] h-[650px] bg-secondary   rounded-2xl'>
                  <div className='h-full'>
                    <div className='h-1/2'>
                      <div className='flex justify-end mr-2 mt-2'>
                          <div className='flex pl-4 gap-2'>
                            <div className='bg-details w-12 h-12 rounded-full flex justify-center items-center'>
                              <BsFiletypeHtml  className='text-main text-2xl'/>
                            </div>
                            <div className='bg-details w-12 h-12 rounded-full flex justify-center items-center'>
                              <BsFiletypeCss  className='text-main text-2xl'/>
                            </div>
                          </div>
                        </div>
                        <div className='pl-4'>
                          <p className='text-sm mt-4 font-extralight text-main'>
                                <span className='text-details text-xl font-normal '>[</span>&nbsp;&nbsp; Business Project &nbsp;&nbsp;
                                <span className='text-details text-xl font-extralight'>]</span>
                            </p>
                            <p className='text-main text-xl mt-2 '>A project on advertising a bakery product through promotion and engagement.</p>
                            <p className='text-main text-sm  font-light mt-1 mr-2'>This is a simple business project that creatively promotes a bakery product using only HTML and CSS. It focuses on presenting the product with a clean layout and visually engaging design.</p>
                        </div>
                        <div className='mt-2 ml-2 w-24'>
                          <a href="https://drive.google.com/file/d/1QCfxtQRl1wQuhsGrGJDikqKh37EiQjiC/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button className='px-4 py-2 flex items-center bg-details font-semibold text-main hover:text-details hover:bg-main rounded-2xl'><span><FaEye className='text-xl mr-1'/></span> View</button>
                          </a>
                        </div>
                      </div>
                    <div className='h-1/2 rounded-2xl'>
                      <img src={project1} alt="" className='object-cover rounded-2xl h-full w-full' />
                    </div>
                  </div>
              </div>


                <div className='md:w-[400px] w-[375px] md:h-[600px] h-[650px] bg-secondary   rounded-2xl'>
                  <div className='h-full'>
                    <div className='h-1/2'>
                      <div className='flex justify-end mr-2 mt-2'>
                          <div className='flex pl-4 gap-2'>
                            <div className='bg-details w-12 h-12 rounded-full flex justify-center items-center'>
                              <BsFiletypeHtml  className='text-main text-2xl'/>
                            </div>
                            <div className='bg-details w-12 h-12 rounded-full flex justify-center items-center'>
                              <BsFiletypeCss  className='text-main text-2xl'/>
                            </div>
                          </div>
                        </div>
                        <div className='pl-4'>
                          <p className='text-sm mt-4 font-extralight text-main'>
                                <span className='text-details text-xl font-normal '>[</span>&nbsp;&nbsp; E-commerce Project &nbsp;&nbsp;
                                <span className='text-details text-xl font-extralight'>]</span>
                            </p>
                            <p className='text-main text-xl mt-2 '>E-commerce website - a platform designed to showcase products with ease and style.</p>
                            <p className='text-main text-sm  font-light mt-1 mr-2'>This project reflects my early experience in web development, focusing on creating a user-friendly interface and a smooth shopping experience using simple tools and clean design.</p>
                        </div>
                        <div className='mt-2 ml-2 w-24'>
                          <a href="https://drive.google.com/file/d/1tWQRGhN0ua7BbC391ahqCz_Oe_aNJLuH/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button className='px-4 py-2 flex items-center bg-details font-semibold text-main hover:text-details hover:bg-main rounded-2xl'><span><FaEye className='text-xl mr-1'/></span> View</button>
                          </a>
                        </div>
                      </div>
                    <div className='h-1/2 rounded-2xl'>
                      <img src={project2} alt="" className='object-cover rounded-2xl h-full w-full' />
                    </div>
                  </div>
              </div>


                <div className='md:w-[400px] w-[375px] md:h-[600px] h-[650px] bg-secondary   rounded-2xl'>
                  <div className='h-full'>
                    <div className='h-1/2'>
                      <div className='flex justify-end mr-2 mt-2'>
                          <div className='flex pl-4 gap-2'>
                            <div className='bg-details w-12 h-12 rounded-full flex justify-center items-center'>
                              <BsFiletypeHtml  className='text-main text-2xl'/>
                            </div>
                            <div className='bg-details w-12 h-12 rounded-full flex justify-center items-center'>
                              <BsFiletypeCss  className='text-main text-2xl'/>
                            </div>
                          </div>
                        </div>
                        <div className='pl-4'>
                          <p className='text-sm mt-4 font-extralight text-main'>
                                <span className='text-details text-xl font-normal '>[</span>&nbsp;&nbsp; RTU Project &nbsp;&nbsp;
                                <span className='text-details text-xl font-extralight'>]</span>
                            </p>
                            <p className='text-main text-xl mt-2 '>This project was designed as a creative portfolio website to showcase visual work and personal branding.</p>
                            <p className='text-main text-sm  font-light mt-1 mr-2'>This project marked an early exploration of front-end development using only HTML and CSS, focusing on layout, style, and impactful visual presentation.</p>
                        </div>
                        <div className='mt-2 ml-2 w-24'>
                          <a href="https://drive.google.com/file/d/1qd7IO6FM3tYAj1dY8yBut-U1Cm5JiEsB/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button className='px-4 py-2 flex items-center bg-details font-semibold text-main hover:text-details hover:bg-main rounded-2xl'><span><FaEye className='text-xl mr-1'/></span> View</button>
                          </a>
                        </div>  
                      </div>
                    <div className='h-1/2 rounded-2xl'>
                      <img src={project3} alt="" className='object-cover rounded-2xl h-full w-full' />
                    </div>
                  </div>
              </div>


                <div className='md:w-[400px] w-[375px] md:h-[600px] h-[650px] bg-secondary   rounded-2xl'>
                  <div className='h-full'>
                    <div className='h-1/2'>
                      <div className='flex justify-end mr-2 mt-2'>
                          <div className='flex pl-4 gap-2'>
                            <div className='bg-details w-12 h-12 rounded-full flex justify-center items-center'>
                              <BsFiletypeHtml  className='text-main text-2xl'/>
                            </div>
                            <div className='bg-details w-12 h-12 rounded-full flex justify-center items-center'>
                              <BsFiletypeCss  className='text-main text-2xl'/>
                            </div>
                            <div className='bg-details w-12 h-12 rounded-full flex justify-center items-center'>
                              <GrMysql  className='text-main text-2xl'/>
                            </div>
                          </div>
                        </div>
                        <div className='pl-4'>
                          <p className='text-sm mt-4 font-extralight text-main'>
                                <span className='text-details text-xl font-normal '>[</span>&nbsp;&nbsp; RTU Project &nbsp;&nbsp;
                                <span className='text-details text-xl font-extralight'>]</span>
                            </p>
                            <p className='text-main text-xl mt-2 '>This RTU page was developed to provide incoming students with a simple, informative landing experience.</p>
                            <p className='text-main text-sm  font-light mt-1 mr-2'>Built with basic HTML and CSS, it demonstrates how clear structure and design can effectively represent school identity and guide new users.</p>
                        </div>
                        <div className='mt-2 ml-2 w-24'>
                          <a href="https://drive.google.com/file/d/1q-TFUyhLiFVJfjgt04ivntGrMjC7v2yi/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='w-auto'>
                            <button className='px-4 py-2 flex items-center bg-details font-semibold text-main hover:text-details hover:bg-main rounded-2xl'><span><FaEye className='text-xl mr-1'/></span> View</button>
                          </a>
                        </div>
                      </div>
                    <div className='h-1/2 rounded-2xl'>
                      <img src={project4} alt="" className='object-cover rounded-2xl h-full w-full' />
                    </div>
                  </div>
              </div>

            </div>
          </div>
        </div>

        <div className='bg-secondary w-full h-auto mt-24 p-8'>
            <div className='grid md:grid-cols-2 grid-cols-1'>
                <div data-aos="zoom-in-right" className='flex justify-end items-center'>
                  <div>
                    <p className='text-xlfont-extralight text-main'>
                      <span className='text-details text-xl font-normal '>[</span>&nbsp;&nbsp; Krita Projects &nbsp;&nbsp;
                      <span className='text-details text-xl font-extralight'>]</span>
                  </p>
                   <p className='text-main text-3xl mt-2 '>Digital artworks brought to life with Krita.</p>
                   <p className='text-main text-md mb-2 font-thin mt-2 lg:w-[500px] w-[370px]'>A collection of digital artworks created in Krita using a pen tablet during free time. This hobby of mine showcases imaginative visuals brought to life through detailed and expressive design.</p>
                  </div>
                </div>
                <div data-aos="zoom-in-left" className='flex justify-center items-start'>
                  <div>
                    <Swiper
                        slidesPerView={'auto'}
                        centeredSlides={true}
                        spaceBetween={30}
                        pagination={{
                          dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper rounded-2xl  w-[400px] h-[400px]"
                      >
                        <SwiperSlide>
                          <img src={art2} alt="" className=' w-[600px] h-[400px]' />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={art6} alt="" className='object-contain w-[600px] h-[400px]' />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={art3} alt="" className='object-contain w-[600px] h-[400px]' />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={art7} alt="" className='object-contain w-[600px] h-[400px]' />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={art8} alt="" className='object-contain w-[600px] h-[400px]' />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={art9} alt="" className='object-contain w-[600px] h-[400px]' />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={art17} alt="" className='object-contain w-[600px] h-[600px]' />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={art12} alt="" className='object-contain w-[600px] h-[400px]' />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={art15} alt="" className='object-contain w-[600px] h-[400px]' />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                </div>
            </div>
        </div>


        <div data-aos="fade-down">
          <div  className=' flex flex-col xl:flex-row justify-between xl:items-center items-start mt-24 2xl:ml-64 xl:ml-12 2xl:mr-64 xl:mr-12 ml-4'>
              <div className='flex flex-col'>
                  <p className='text-xl mt-4 font-extralight text-secondary'>
                      <span className='text-details text-xl font-normal '>[</span>&nbsp;&nbsp; Art Works &nbsp;&nbsp;
                      <span className='text-details text-xl font-extralight'>]</span>
                  </p>
                  <p className='text-secondary text-3xl mt-2 '>Explore the artworks that brought my imagination to life</p>
                  <p className='text-secondary text-lg font-light mt-2 lg:w-[620px] w-[420px]'>From concept to canvas, these works highlight my skills in digital illustration and creative expression.</p>
              </div>
              <div className='flex xl:justify-center justify-start xl:items-center items-start'>
                <div className='w-full flex justify-start xl:justify-end items-start xl:items-center xl:mt-2 mt-4'>
                   <a
                      href="https://drive.google.com/drive/folders/1ZP1zkb6aGYxMbGAeTy_Aeo3L2ZxPkfJD?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className='bg-details hover:bg-secondary w-44 h-12 rounded-4xl flex items-center'>
                        <div className='bg-secondary hover:bg-details hover:border-secondary h-12 w-32 border-2 border-details rounded-4xl flex justify-center items-center text-main font-semibold'>
                          See More
                        </div>
                        <IoIosArrowDroprightCircle className='text-main text-4xl' />
                      </button>
                    </a>
                </div>
              </div>
          </div>
          
          <div className="flex justify-center items-center mt-8 mb-24">
            <div className='grid xl:grid-cols-2 grid-cols-1 gap-2'>
                <div>
                  <img src={art1} className='lg:w-[700px]  w-[600px]' alt="" />
                </div>
                <div className='grid lg:grid-rows-2 grid-rows-1 gap-2'>
                    <div>
                      <img src={art5} className='lg:w-[700px] w-[600px]  lg:h-[425px] h-[325px] ' alt="" />
                    </div>
                    <div>
                      <img src={art4} className='lg:w-[700px] w-[600px]  lg:h-[425px] h-[325px] ' alt="" />
                    </div>
                </div>
            </div>
          </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Projects