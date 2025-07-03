import React from 'react'
import programPic from '../assets/programPic.jpeg';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import onephpLogo from '../assets/onephpLogo.jpg';
import sutherLogo from '../assets/sutherLogo.png';
import Suther1 from '../assets/Suther1.jpeg';
import Suther3 from '../assets/Suther3.jpg';
import OnephpMeet from '../assets/OnephpMeet.jpeg';
import ONEPHP from '../assets/ONEPHP.png';
import ONEPHPcoc from '../assets/ONEPHPcoc.png';
import { FaWrench } from "react-icons/fa";
import { VscRemoteExplorer, VscVscode, VscAzure } from "react-icons/vsc";
import { BiSupport } from "react-icons/bi";
import { RiNotionFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
const Internship = () => {
  return (
    <div className="min-h-screen flex flex-col bg-main max-w-full overflow-x-hidden overflow-y-auto">
        <p className='text-main'>.</p>
        <div>
            <Navbar />
        </div>
        <div>
         <div className="relative w-auto h-[720px] rounded-2xl ml-8 mr-8 mt-6 overflow-hidden">
              <img src={programPic} alt="About Me" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-secondary/50"></div>
        
              <div  className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white px-4">
                  <div data-aos="zoom-in">
                    <p className='text-7xl font-medium'>Internship Experience</p>
                    <p className='text-center font-extralight text-lg opacity-80 xl:w-[650px] w-[450px] mt-4'>
                    Discover the experience that shaped my growth — the challenges I faced, the skills I honed, and the lessons I gained throughout my internship journey.
                    </p>
                  </div>
              </div>
          </div>

          <div data-aos="fade-up" className='flex justify-center items-center mt-12 flex-col mb-24'>
            <div>
                <div className='text-center flex justify-center items-center flex-col'>
                    <p className='text-xl mt-4 font-extralight text-secondary'>
                      <span className='text-details text-xl font-normal '>[</span>&nbsp;&nbsp; Companies I've Been &nbsp;&nbsp;
                      <span className='text-details text-xl font-extralight'>]</span>
                   </p>
                      <p className='text-secondary text-3xl mt-2 '>Explore the companies that defined my growth as a professional.</p>
                      <p className='text-secondary text-lg font-light mt-2 lg:w-[820px] w-[420px]'>A look into the teams and workplaces where I applied what I’ve learned, embraced new challenges, and grew as a future professional.</p>
                </div>
            </div>
            <div className='mt-8 '>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
                      <div className='col-span-2 w-full h-64 rounded-2xl bg-secondary'>
                        <img src={Suther1} className='object-cover h-64 w-full rounded-2xl' alt="" />
                      </div>
                      <div className='w-full h-64 rounded-2xl bg-white'>
                        <img src={sutherLogo} alt="" className='object-cover h-64 w-full rounded-2xl'/>
                      </div>
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 mt-4'>
                      <div className=' w-full h-64 rounded-2xl '>
                        <img src={onephpLogo} alt="" className='object-cover h-64 w-full rounded-2xl'/>
                      </div>
                      <div className='col-span-2 w-full h-64 rounded-2xl bg-secondary'>
                        <img src={OnephpMeet} className='object-cover h-64 w-full rounded-2xl' alt="" />
                      </div>
                </div>
            </div>
          </div>
                      

          <div className='flex justify-center items-center mt-12 flex-col'>
              <div className='w-full bg-secondary h-auto p-12 '>
                <div className='flex justify-center items-center w-full'>
                  <div className='grid lg:grid-cols-3 grid-cols-1 gap-4  place-items-center'>
                        <div data-aos="fade-right" className='flex justify-center items-center w-full '>
                          <div>
                            <div>
                              <p className='text-xlfont-extralight text-main'>
                                  <span className='text-details text-xl font-normal '>[</span>&nbsp;&nbsp; Internship Journey &nbsp;&nbsp;
                                  <span className='text-details text-xl font-extralight'>]</span>
                              </p>
                              <p className='text-main text-3xl mt-2 '>My Experiences as an Intern</p>
                              <p className='text-main text-md mb-2 font-thin mt-2 lg:w-[350px] w-[400px]'>From tech innovation at OnePHP to client-focused operations at Sutherland, each internship shaped my skills, work ethic, and passion for continuous growth in the professional world.</p>
                            </div>
                          </div>
                        </div>

                        <div data-aos="fade-down" className='h-[450px] w-80 bg-main rounded-2xl xl:ml-8 ml-0 '>
                          <div className='h-full'>
                              <div className='h-1/2 w-auto'>
                                <img src={ONEPHP} alt="" className='rounded-2xl object-cover h-full w-full'/>
                              </div>
                              <div className='h-1/2 mt-2 ml-2'>
                                <p className='text-xlfont-extralight text-secondary'>
                                    <span className='text-details text-xl font-normal '>[</span>&nbsp;&nbsp; OnePhp Experience &nbsp;&nbsp;
                                    <span className='text-details text-xl font-extralight'>]</span>
                                </p>
                                <p className='text-secondary text-sm  font-light mt-1 mr-2'>
                                 As a Full Stack Developer intern, I worked on building dynamic web applications using ASP.NET MVC. I gained hands-on experience in deploying projects to Microsoft Azure, contributing to real-world development cycles from backend logic to front-end implementation.
                                </p>
                                 <div className='flex mt-2 gap-2'>
                                    <div className='bg-details w-8 h-8 rounded-full flex justify-center items-center'>
                                      <VscVscode  className='text-main text-lg'/>
                                    </div>
                                    <div className='bg-details w-8 h-8 rounded-full flex justify-center items-center'>
                                      <VscAzure  className='text-main text-lg'/>
                                    </div>
                                    <div className='bg-details w-8 h-8 rounded-full flex justify-center items-center'>
                                      <RiNotionFill  className='text-main text-lg'/>
                                    </div>
                                     <div className='bg-details w-8 h-8 rounded-full flex justify-center items-center'>
                                      <DiMysql   className='text-main text-xl'/>
                                    </div>
                                  </div>
                              </div>
                          </div>
                        </div>

                        <div  data-aos="fade-left" className='h-[450px] w-80 bg-main rounded-2xl '>
                          <div className='h-full'>
                              <div className='h-1/2 w-auto'>
                                <img src={Suther3} alt="" className='rounded-2xl object-cover h-full w-full'/>
                              </div>
                              <div className='h-1/2 mt-2 ml-2'>
                                <p className='text-xlfont-extralight text-secondary'>
                                    <span className='text-details text-xl font-normal '>[</span>&nbsp;&nbsp; Sutherland Experience &nbsp;&nbsp;
                                    <span className='text-details text-xl font-extralight'>]</span>
                                </p>
                                <p className='text-secondary text-sm  font-light mt-1 mr-2'>
                                  At Sutherland, I assisted in troubleshooting remote setups for call center agents, ensuring smooth and secure work-from-home operations. My responsibilities included device reimaging and resolving technical issues to maintain agent productivity and system reliability.
                                </p>
                                <div className='flex mt-2 gap-2'>
                                  <div className='bg-details w-8 h-8 rounded-full flex justify-center items-center'>
                                    <VscRemoteExplorer  className='text-main text-lg'/>
                                  </div>
                                  <div className='bg-details w-8 h-8 rounded-full flex justify-center items-center'>
                                    <BiSupport  className='text-main text-lg'/>
                                  </div>
                                  <div className='bg-details w-8 h-8 rounded-full flex justify-center items-center'>
                                    <FaWrench  className='text-main text-lg'/>
                                  </div>
                                </div>
                              </div>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
        <div className='mt-12'>
        <Footer/>
        </div>
    </div>
  )
}

export default Internship