import React from 'react'
import Navbar from '../components/Navbar'
import { FaGraduationCap, FaCalendar  } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RxDownload } from "react-icons/rx";
import gradPic from '../assets/gradPic.JPG';
import about1 from '../assets/about1.jpeg';
import p2022 from '../assets/p2022.png';
import p2023 from '../assets/p2023.png';
import p2024 from '../assets/p2024.png';
import pcnhs from '../assets/pcnhs.png';
import rtuLogo from '../assets/rtuLogo.png';
import pbes from '../assets/pbes.png';
import Footer from '../components/Footer';
const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-main max-w-full overflow-x-hidden overflow-y-auto">
        <p className='text-main'>.</p>
        <div>
            <Navbar />
        </div>
        <div>
            <div className="relative w-auto h-[720px] rounded-2xl ml-8 mr-8 mt-6 overflow-hidden">
                <img src={about1} alt="About Me" className="w-full h-[750px] object-cover" />
                <div className="absolute inset-0 bg-secondary/50"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white px-4">
                    <div data-aos="zoom-in">
                        <p className='text-7xl font-medium text-center'>About Me</p>
                        <p className='text-center font-extralight text-lg opacity-80 xl:w-[500px] w-[450px] mt-4'>
                        Take a moment to get to know the person behind the projects — my story, my passion, and what drives me to create.
                        </p>
                    </div>
                </div>
            </div>


            <div className='bg-secondary w-full h-auto grid lg:grid-cols-2 grid-cols-1 mt-24'>
                
                <div  data-aos="fade-up" className='p-20 flex justify-center lg:items-start items-center md:ml-24 ml-2 flex-col'>
                    <p className='text-main text-2xl font-semibold'>Educational Background</p>
                    <p className='text-main text-md font-extralight mt-4 opacity-70 lg:w-[500px] w-[400px]'>A brief look at the schools and programs that shaped my skills, knowledge, and passion for technology.</p>
                </div>

                <div  data-aos="fade-up" className='flex flex-wrap gap-4 items-center justify-center p-8'>
                    <a href="https://www.facebook.com/pbespasay" className='relative group'>
                        <div className='w-64 h-40 bg-main/80 rounded-2xl  flex flex-col justify-center items-center'>
                            <img
                                src={pbes}
                                alt="school"
                                className="w-h-28 h-28"
                            />
                            <div className="absolute text-center bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-1 py-1 text-sm text-main bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition">
                               <span className='font-semibold text-md'> Visit! </span> Padre Burgos Elementary School
                            </div>
                            <p className='text-xl text-secondary font-semibold mt-1'>Primary</p>
                        </div>
                    </a>

                    <a href="https://www.facebook.com/profile.php?id=100089106735626" className='relative group'>
                        <div className='w-64 h-40 bg-main/80 rounded-2xl  flex flex-col justify-center items-center'>
                            <img
                                src={pcnhs}
                                alt="school"
                                className="w-h-28 h-28"
                            />
                            <div className="absolute text-center bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-1 py-1 text-sm text-main bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition">
                               <span className='font-semibold text-md'> Visit! </span> Pasay City National High School
                            </div>
                            <p className='text-xl text-secondary font-semibold mt-1'>Secondary</p>
                        </div>
                    </a>

                    <a href="https://www.facebook.com/RizTechUniversity" className='relative group'>
                        <div className='w-64 h-40 bg-main/80 rounded-2xl  flex flex-col justify-center items-center'>
                            <img
                                src={rtuLogo}
                                alt="school"
                                className="w-h-28 h-28"
                            />
                            <div className="absolute text-center bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-1 py-1 text-sm text-main bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition">
                               <span className='font-semibold text-md'> Visit! </span> Rizal Technological University
                            </div>
                            <p className='text-xl text-secondary font-semibold mt-1'>Tertiary</p>
                        </div>
                    </a>
                </div>
            </div>

            <div className='grid lg:grid-cols-2 grid-cols-1 mt-24 mb-24 '>
                <div data-aos="fade-right" className='flex lg:justify-end justify-center lg:mr-20 mr-0'>
                     <img src={gradPic} className='lg:w-[500px] lg:h-[500px] w-[400px] h-[400px] rounded-2xl' />
                </div>
                <div className='flex justify-center lg:items-baseline items-center lg:text-start text-center flex-col '>
                    <p className='text-xl mt-4 font-extralight text-secondary'>
                        <span className='text-details text-xl font-normal '>[</span>&nbsp;&nbsp; Graduation Milestone &nbsp;&nbsp;
                        <span className='text-details text-xl font-extralight'>]</span>
                    </p>
                    <p className='text-secondary text-3xl mt-2 '>What Path Did I Take on My Journey?</p>
                    <p className='text-secondary font-light text-lg lg:w-[700px] w-[400px] mt-4'>
                        I completed my journey as a student by earning a 
                        <span className='font-medium'> Bachelor of Science in Information Technology 
                        </span> from <span className='font-medium'>Rizal Technological University</span> , graduating as  
                        <span className='font-medium'> Cum Laude</span>.  
                        Throughout my academic years, I developed strong technical skills, collaborated on real-world projects, and discovered my 
                        passion for using technology to make a positive impact. Graduating was not just a milestone—it was the beginning of a new chapter 
                        in my journey as a developer.
                    </p>
                    <div className='mt-6 flex lg:justify-start justify-center'>
                        <a
                            href="/Roger_Resume.pdf"
                            download
                            className="px-6 py-3 bg-secondary text-white font-medium rounded-2xl shadow hover:bg-details transition flex"
                            >
                            <span className='flex items-center mr-2 text-xl'><RxDownload /></span>Resume
                        </a>
                        <button className='px-6 py-3 border border-secondary rounded-2xl ml-4 hover:bg-secondary hover:text-main text-secondary font-semibold'>
                            Hire me!
                        </button>
                    </div>
                    <div className='flex mt-8 gap-8'>
                        <div>
                            <div className='text-secondary flex justify-center items-center'>
                            <FaLocationDot className='text-3xl'/> 
                                <div className='flex flex-col justify-center ml-2 text-mdd font-semibold'> 
                                    <p>Boni Ave, Mandaluyong City, </p>
                                    <p>1550 Metro Manila</p>
                                </div>
                            </div>    
                        </div>
                        <div>
                            <div className='text-secondary  flex justify-center items-center '>
                                <FaGraduationCap className='text-3xl'/>
                                <p className='flex justify-center ml-2 text-mdd font-semibold'>Batch 2025</p>  
                            </div>
                        </div>
                        <div>
                            <div className='text-secondary  flex justify-center items-center '>
                                <FaCalendar className='text-3xl'/>  
                                <p className='flex justify-center ml-2 text-mdd font-semibold'>2021-2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="10"
     data-aos-offset="0" className='mb-24'>
                <div className='flex flex-col justify-center '>
                    <div className='text-center'>
                       <p className='text-xl mt-4 font-extralight text-secondary'>
                        <span className='text-details text-xl font-normal '>[</span>&nbsp;&nbsp; Educational Achievement &nbsp;&nbsp;
                        <span className='text-details text-xl font-extralight'>]</span>
                    </p>
                        <p className='text-secondary text-3xl mt-2 '>Here are a few of my proudest achievements:</p>
                    </div>
                    <div className='flex justify-center xl:pl-32 xl:pr-32'>
                        <div className='flex flex-wrap mt-12 gap-4 items-center justify-center '>
                            <div className='flex flex-col justify-center items-center w-[350px] h-[250px] rounded-2xl'>
                                <img src={p2022} alt="" className='object-cover rounded-2xl w-full h-full border-secondary/50 border' />
                                <p className='flex justify-center ml-2 text-xl mt-2 font-semibold text-center'>Achademic Achiever<br/> 2022</p>
                            </div>
                            <div className='flex flex-col justify-center items-center w-[350px] h-[250px] rounded-2xl'>
                                <img src={p2023} alt="" className='object-cover rounded-2xl w-full h-full border-secondary/50 border' />
                                <p className='flex justify-center ml-2 text-xl mt-2 font-semibold text-center'>Achademic Achiever<br/> 2023</p>
                            </div>
                            <div className='flex flex-col justify-center items-center w-[350px] h-[250px] rounded-2xl'>
                                <img src={p2024} alt="" className='object-cover rounded-2xl w-full h-full border-secondary/50 border' />
                                <p className='flex justify-center ml-2 text-xl mt-2 font-semibold text-center'>Achademic Achiever<br/> 2024</p>
                            </div>
                            <div className='flex items-center justify-center'>
                                <div>
                                    <p className='text-secondary text-3xl mt-2 font-medium w-[350px]'>
                                        Academic Accomplishments That Shaped Me
                                    </p>
                                    <p className='text-secondary font-light text-lg mt-4 w-[350px]'>
                                        I’ve always aimed for excellence in my studies, 
                                        from earning honors in grade school to graduating 
                                        Cum Laude with a BS in IT from Rizal Technological University. 
                                        A highlight of my journey was leading a capstone project focused 
                                        on student mental health, reflecting my passion for meaningful, 
                                        impactful work.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default About