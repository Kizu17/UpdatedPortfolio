import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';
import { RxDownload } from "react-icons/rx";
import { FaReact } from "react-icons/fa";
import { FaLocationArrow, FaFigma, FaCode } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { SiKrita } from "react-icons/si";
import picME from '../assets/picME.png';
import picMe2 from '../assets/picMe2.png';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-main max-w-full overflow-x-hidden overflow-y-auto">
        <p className='text-main'>Home</p>
        <div>
            <Navbar />
        </div>
        
        <div className='grid lg:grid-cols-2 grid-cols-1'> 
                <div data-aos="fade-right" className='flex flex-col lg:pl-28 lg:mt-28 mt-4 lg:mb-0 mb-14'>
                    <div className='flex lg:justify-start justify-center'>
                        <p className='text-4xl mt-4'>
                            <span className='text-details text-4xl font-extralight '>[</span>&nbsp;&nbsp;Hello There&nbsp;&nbsp; 
                            <span className='text-details text-4xl font-extralight'>]</span>
                        </p>
                    </div>
                    <div className='w-full mt-3 flex justify-center lg:pr-28 pr-14 lg:pl-0 pl-14 '>
                        <h1 className='lg:text-6xl text-5xl font-medium lg:text-start text-center text-dark'>I'm <span className='text-details underline' style={{ textDecorationThickness: '3px' }} >Roger Cruz,</span><br/>a fresh graduate from Rizal Technological University.</h1>
                    </div>
                    <div className='w-full mt-4 flex lg:pr-52 pr-14 lg:pl-0 pl-14 justify-center'>
                        <h1 className='lg:text-lg  text-md font-extralight text-secondary opacity-70 lg:text-start text-center'>
                            I have solid skills in both web development and technical support, and I’m confident in applying them to real-world situations.
                        </h1>
                    </div>
                    <div className='mt-4 flex lg:justify-start justify-center'>
                        <a
                            href="/Roger_Resume.pdf"
                            download
                            className="px-6 py-3 bg-secondary text-white font-medium rounded-2xl shadow hover:bg-details transition flex"
                            >
                            <span className='flex items-center mr-2 text-xl'><RxDownload /></span>Resume
                        </a>
                            <a
                            href="mailto:rogerraycruz@gmail.com?subject=Job%20Application&body=Hi%20there%2C"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <button className='px-6 py-3 border border-secondary rounded-2xl ml-4 hover:bg-secondary hover:text-main text-secondary font-semibold'>
                                Hire me!
                            </button>
                        </a>
                    </div>
            </div>

                <div  data-aos="fade-left" className=' flex justify-center items-center '>
                    <div className="relative lg:w-[500px] lg:h-[400px] w-[400px] h-[325px]">
                        {/* SVG Blob */}
                    <svg
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-[800px] lg:h-[800px] w-[700px] h-[700px] z-0"
                            >
                            <path
                                fill="#FA9D3D"
                                d="M59.3,-30.4C71.3,-13.4,71.7,14.1,59.9,36.9C48.1,59.6,24,77.6,1.2,76.9C-21.5,76.2,-43.1,56.7,-55.4,33.7C-67.7,10.7,-70.8,-16,-60,-32.3C-49.3,-48.6,-24.6,-54.5,-0.5,-54.2C23.6,-53.9,47.3,-47.4,59.3,-30.4Z"
                                transform="translate(100 100)"
                            />
                        </svg>


                        {/* Image Overlay */}
                        <img
                            src={picME}
                            alt="Profile"
                            className="absolute top-64 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-[550px] lg:h-[750px] w-[600px] h-[650px]  z-10"
                        />

                        <div className='bg-secondary rounded-full w-24 h-24 flex justify-center items-center border-4 border-main absolute  top-22 left-[-30px] z-10 '>
                            <FaReact className=' w-[40px] h-[40px]  z-10 text-tertiary' />
                        </div>
                        <div className='bg-secondary w-40 h-12 rounded-4xl absolute z-10 border-3 border-main lg:top-[200px] lg:left-[450px] top-[350px] left-[255px] text-center justify-center items-center flex'>
                            <p className='text-tertiary text-lg font-semibold'>Web Developer</p>
                        </div>

                        <div className='bg-details w-40 h-12 rounded-4xl absolute z-10 border-3 border-main lg:top-[500px] lg:left-[-50px] top-[500px] left-[0px] text-center justify-center items-center flex'>
                            <p className='text-tertiary text-lg font-semibold'>Tech Support</p>
                        </div>

                        <FaLocationArrow className='text-details scale-x-[-1] text-2xl absolute z-10  lg:top-[485px] lg:left-[-70px] top-[485px] left-[-15px]'/>
                        <FaLocationArrow className='text-secondary text-2xl absolute z-10  lg:top-[185px] lg:left-[605px] top-[330px] left-[410px]'/>
                    </div>
                </div>
            </div>
    
        
    <Banner />
    <div data-aos="fade-up">
        <div className='mt-24 flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center flex-col'>
                <p className='lg:text-2xl text-xl text-dark font-medium'><span className='text-details'>[</span> &nbsp;&nbsp;What I Do&nbsp;&nbsp; <span className='text-details'>]</span></p>
                <p className='lg:text-5xl text-4xl text-dark font-semibold text-center ml-2 mr-2'>Frameworks & Tools I Rely On</p>
            </div>
        <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-12 gap-8  mx-auto'>
                <div className='w-80 h-64 bg-details border border-pink-100 rounded-2xl'>
                    <div className='w-18 h-18 bg-main shadow-secondary rounded-full flex justify-center items-center mt-4 ml-4'>
                    <FaReact className=' w-[40px] h-[40px]  z-10 text-secondary opacity-80 ' /> 
                    </div>
                    <div className='mt-6 ml-4'>
                        <p className='text-main text-2xl'>
                            <span className='text-secondary'>[</span> React Js + Vite <span className='text-secondary'>]</span>
                        </p>
                        <p className='text-main mt-2 text-lg'>
                        I use React.js with Vite to build fast, modern, and scalable web applications efficiently.
                        </p>
                    </div>
                </div>
                <div className='w-80 h-64 bg-secondary border border-pink-100 rounded-2xl'>
                    <div className='w-18 h-18 bg-main shadow-secondary rounded-full flex justify-center items-center mt-4 ml-4'>
                    <RiTailwindCssFill className=' w-[40px] h-[40px]  z-10 text-details ' /> 
                    </div>
                    <div className='mt-6 ml-4'>
                        <p className='text-main text-2xl'>
                            <span className='text-details'>[</span> Tailwind Css <span className='text-details'>]</span>
                        </p>
                        <p className='text-main mt-2 text-lg'>
                        With Tailwind CSS, I design responsive, utility-first interfaces using clean, scalable code.
                        </p>
                    </div>
                </div>
                <div className='w-80 h-64 bg-secondary border border-pink-100 rounded-2xl'>
                    <div className='w-18 h-18 bg-main shadow-secondary rounded-full flex justify-center items-center mt-4 ml-4'>
                    <FaFigma  className=' w-[40px] h-[40px]  z-10 text-details ' /> 
                    </div>
                    <div className='mt-6 ml-4'>
                        <p className='text-main text-2xl'>
                        <span className='text-details'>[</span> Figma <span className='text-details'>]</span>
                        </p>
                        <p className='text-main mt-2 text-lg'>
                        Figma allows for collaborative UI/UX design, wireframing, and interface prototyping.
                        </p>
                    </div>
                </div>
                <div className='w-80 h-64 bg-secondary border border-pink-100 rounded-2xl'>
                    <div className='w-18 h-18 bg-main shadow-secondary rounded-full flex justify-center items-center mt-4 ml-4'>
                    <SiKrita className=' w-[40px] h-[40px]  z-10 text-details ' /> 
                    </div>
                    <div className='mt-6 ml-4'>
                        <p className='text-main text-2xl'>
                            <span className='text-details'>[</span> Krita <span className='text-details'>]</span>
                        </p>
                        <p className='text-main mt-2 text-lg'>
                        Krita helps me craft detailed digital illustrations and custom graphics for my projects.
                        </p>
                    </div>
                </div>
        </div>
        <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-4 gap-8  mx-auto '>
            <div className='w-80 md:block hidden'></div>
            <div className='w-80 md:block hidden'></div>
            <div className='w-80 md:block hidden'></div>
            <div className='w-full flex justify-end items-end'>
                <button className='bg-details hover:bg-secondary w-44 h-12 rounded-4xl flex items-center'>
                    <div className='bg-secondary hover:bg-details hover:border-secondary h-12 w-32 border-2 border-details  rounded-4xl flex justify-center items-center text-main font-semibold'>
                        Learn More
                    </div>
                    <IoIosArrowDroprightCircle className='text-main text-4xl'/>
                </button>
        </div>
        </div>
        </div>
    </div>

    
        <div className='h-full w-full bg-secondary mt-24'>
            <div className='h-full w-full grid lg:grid-cols-2 grid-cols-1 lg:mt-0 mt-24'>
                <div className='flex justify-center items-center'>
                    <div data-aos="fade-right">
                        <div className="relative lg:w-[500px] lg:h-[400px] w-[400px] h-[325px]">
                            <svg
                                viewBox="0 0 200 200"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-56 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 w-[700px] h-[620px]"
                            >
                                <path
                                fill="#FA9D3D"
                                d="M68.3,-22.4C76.9,4.4,64.4,37.9,40.9,54.6C17.3,71.3,-17.2,71.2,-39.9,54.7C-62.7,38.2,-73.7,5.3,-65.1,-21.4C-56.5,-48.2,-28.3,-68.8,0.8,-69.1C29.8,-69.4,59.7,-49.2,68.3,-22.4Z"
                                transform="translate(100 100)"
                                />
                            </svg>

                            <img
                                src={picMe2}
                                alt="Profile"
                                className="w-[445px] h-[540px] absolute top-42 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-full"
                            />
                            <div className='bg-main  rounded-full  w-16 h-16 border-4 border-secondary absolute z-10  lg:top-[200px] lg:left-[450px] top-[200px] left-[375px] flex justify-center items-center'>
                                <FaCode className='text-secondary scale-x-[-1] text-3xl '/>
                            </div>
                            <div className='bg-main rounded-full w-38 h-11 border-4 border-secondary  absolute z-10  lg:top-[100px] lg:left-[20px] top-[100px] left-[-15px] flex justify-center items-center'>
                                <p className='text-secondary text-lg font-semibold'> Latin Honor</p>
                            </div>
                            <div className='bg-main  rounded-full  w-32 h-10 border-4 border-secondary absolute z-10  lg:top-[325px] lg:left-[20px] top-[325px] left-[-15px] flex justify-center items-center'>
                                <p className='text-secondary text-lg font-semibold'>Cum Laude</p>
                            </div>
                        </div>
                     </div>
                </div>
                <div className='w-full h-[600px] flex lg:justify-start items-center text-center justify-center'>
                    <div className='flex flex-col lg:text-start text-center '>
                        <p className='text-main font-extralight text-4xl'>
                            <span className='text-details font-normal'>[</span> Know me <span className='text-details font-normal'>]</span>
                        </p>
                        <h1 className='text-main text-5xl mt-2 font-semibold'>Who is <span className='text-details underline font-normal' style={{ textDecorationThickness: '2px' }}> Roger Cruz?</span></h1>
                        <p className='mt-4 text-main text-xl lg:mr-64 lg:ml-0 mr-12 ml-12  '>I'm a versatile and creative individual with a passion for technology, design, and problem-solving. I enjoy turning ideas into functional and visually engaging digital experiences.</p>
                        <div className='w-full mt-8 flex lg:justify-start justify-center' >
                            <button className='bg-details  w-44 h-12 rounded-4xl flex items-center' onClick={() => navigate('/about')}>
                                <div className='bg-secondary hover:bg-main  h-12 w-32 border-2 border-details  rounded-4xl flex justify-center items-center text-main hover:text-secondary font-semibold'>
                                    Explore
                                </div>
                                <IoIosArrowDroprightCircle className='text-main text-4xl'/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
    <Footer />

    </div>
    
  )
}

export default Home