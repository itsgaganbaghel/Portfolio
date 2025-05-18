import { RiArrowUpDoubleFill, } from 'react-icons/ri'
import { TbCircleArrowUpRight } from 'react-icons/tb'
import { allProjects } from "../utilities/Projects.js"
import { NavLink } from 'react-router-dom'
import { FaCode } from 'react-icons/fa'
import { BsArrowUpRightCircle } from 'react-icons/bs'
import { FaArrowRightLong } from 'react-icons/fa6'
import { motion } from 'motion/react'
import { IoEarth, IoLogoGithub } from 'react-icons/io5'

const fadeInLeft = {
    hidden: { opacity: 0, left: -500 },
    show: {
        opacity: 1,
        left: -100,
        transition: { duration: 0.7, ease: 'easeOut', }
    }
}

const fadeInRight = {
    hidden: { opacity: 0, right: -500 },
    show: {
        opacity: 1,
        right: -100,
        transition: { duration: 0.7, ease: 'easeOut', }
    }
}

const zoomIn = {
    hidden: { scale: 0.5, opacity: 0, y: 50 },
    show: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: { duration: 0.7 }
    }
}

const ProjectsSection = () => {
    console.log(allProjects[0].projects)
    return (
        <>
            <section className="relative w-full flex justify-center  lg:mt-52 mt-32 mb-20 lg:h-[45vh] overflow-hidden   ">
                <motion.section
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="hidden lg:block absolute -left-16 bottom-0 h-[300px]  w-1/2 bg-primary overflow-hidden">
                    <section className="sloped-panel w-[100%] h-full absolute top-0 left-0 bg-gradient-to-b from-[#141517] to-primary" ></section>
                </motion.section>

                <motion.section
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="hidden lg:block absolute -right-16 bottom-0 h-[300px] w-1/2 bg-primary overflow-hidden">
                    <section className="sloped-panel-reverse w-[100%] h-full absolute top-0 right-0 bg-gradient-to-b from-[#141517] to-primary" />
                </motion.section>

                <motion.section
                    variants={zoomIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className=" z-30">
                    <button className=" border border-gray-800 bg-primary rounded-xl lg:text-6xl text-4xl font-serif px-8  py-3 mb-4">Featured Projects</button>
                    <h3 className=" mb-2 text-center">
                        Study Notion
                        <span className='px-3'>—</span>
                        Rhythm
                        <span className='px-3'>—</span>
                        Portfolio website
                    </h3>
                </motion.section>

            </section>


            <section className='relative w-full flex flex-col h-[300vh]  gap-[30vh] lg:px-12 px-4'>
                {
                    allProjects[0].projects.map((project, index) => {
                        return (
                            <section className={`sticky lg:top-24  top-32 w-full md:w-[80%] lg:w-full  md:mx-auto lg:h-[80vh] h-[70vh] bg-primary grid grid-cols-1 grid-rows-[14%_46%_40%] md:grid-rows-[14%_56%_30%] lg:grid-rows-[25%_75%] lg:grid-cols-[40%_60%]  pt-3 border-2 border-secondary rounded-xl `}>

                                <section className='  relative flex items-center  lg:text-6xl text-4xl font-serif lg:pl-10 pl-4  gap-6 '>
                                    <p> 0{index + 1}. {project?.name}</p>
                                </section>

                                <figure className=' overflow-hidden lg:row-span-2  flex justify-center items-center'>
                                    <img src={project?.src} alt='Project Image' className='w-full h-full  lg:rounded-4xl  rounded-xl lg:h-[80%] px-2 ' />
                                </figure>

                                <section className='flex flex-col justify-start  md:justify-center pt-4 gap-6  px-5 '>
                                    <article className=' flex flex-col gap-4'>
                                        <p className='hidden md:block text-xl font-serif'>These are all the main Technologies used in this project.</p>

                                        <ul className='text-gray-400 font-mono flex flex-wrap lg:block '>{
                                            project?.CoreStack &&
                                            project?.CoreStack.map((tech, index) => {
                                                return (
                                                    <>
                                                        <li className='lg:hidden inline '>{tech + `${index != project?.CoreStack.length - 1 ? ", " : "."}`}</li>
                                                        <li className='hidden lg:block' > {index + 1}. {tech + `${index != project?.CoreStack.length - 1 ? ", " : "."}`}</li>
                                                    </>
                                                )
                                            })
                                        }</ul>

                                        <section className='flex flex-col  items-center gap-5 md:flex-row'>
                                            <article className='lg:hidden flex gap-4 w-[90%] md:w-[60%] justify-between md:justify-start items-center'>
                                                <a href={project?.Github} target='_blank'
                                                    className='border border-zinc-600 px-6 py-2 rounded-lg flex items-center gap-2' >
                                                    <FaCode /> Code</a>
                                                <a href={project?.LiveUrl} target='_blank'
                                                    className='border border-zinc-600 px-6 py-2 rounded-lg flex items-center gap-2'>
                                                    <IoEarth /> Live demo</a>

                                            </article>

                                            <NavLink className='flex items-center px-4 py-2  border border-zinc-700 gap-4 rounded-lg w-[90%] md:w-[40%] lg:w-fit' to={'/Projects/ProjectOverView'} state={{ project, projectNumber: index + 1 }} >
                                                Explore The Project <FaArrowRightLong />
                                            </NavLink>
                                        </section>

                                        <section className='hidden lg:flex  border border-zinc-700 rounded-lg justify-evenly items-center py-10'>
                                            <a href={project?.Github} target='_blank' className='flex flex-col items-center justify-center gap-2 text-gray-500 ' >
                                                <p className=' text-7xl'> <IoLogoGithub /></p>
                                                <p className='lg:text-xl font-bold tracking-wider font-mono'>GitHub Code</p>
                                            </a>
                                            <a href={project?.LiveUrl} target='_blank' className='flex flex-col items-center justify-center gap-2 text-gray-500' >
                                                <p className='text-7xl'> <BsArrowUpRightCircle /></p>
                                                <p className='lg:text-xl font-bold tracking-wider font-mono'>Live Demo</p>
                                            </a>
                                        </section>



                                    </article>
                                </section>

                            </section>
                        )
                    })
                }
            </section>

            <NavLink to={"Projects"} className='flex justify-center transition-all duration-600  items-center gap-2 text-3xl mb-20 mt-10   py-4 rounded-2xl' >
                <p>Explore All Projects</p>
                <p><TbCircleArrowUpRight /></p>
            </NavLink>
        </>
    )
}

export default ProjectsSection