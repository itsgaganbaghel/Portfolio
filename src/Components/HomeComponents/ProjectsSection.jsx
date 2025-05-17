import { RiArrowUpDoubleFill, } from 'react-icons/ri'
import { TbCircleArrowUpRight } from 'react-icons/tb'
import allProjects from "../utilities/Projects"
import { NavLink } from 'react-router-dom'
import { FaCode } from 'react-icons/fa'
import { BsArrowUpRightCircle } from 'react-icons/bs'
import { FaArrowRightLong } from 'react-icons/fa6'

import second from "../../assets/ProjectsFullPage/studyNotion.png"

import { motion } from 'motion/react'

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
    return (
        <>
            <section className="relative w-full flex justify-center  mt-52 h-[45vh] overflow-hidden  ">
                <motion.section
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="absolute -left-16 bottom-0 h-[300px]  w-1/2 bg-primary overflow-hidden">
                    <section className="sloped-panel w-[100%] h-full absolute top-0 left-0 bg-gradient-to-b from-[#141517] to-primary" ></section>
                </motion.section>

                <motion.section
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="absolute -right-16 bottom-0 h-[300px] w-1/2 bg-primary overflow-hidden">
                    <section className="sloped-panel-reverse w-[100%] h-full absolute top-0 right-0 bg-gradient-to-b from-[#141517] to-primary" />
                </motion.section>

                <motion.section
                    variants={zoomIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className=" z-30">
                    <button className=" border border-gray-800 bg-primary rounded-xl text-6xl font-serif px-8  py-3 mb-4">Featured Projects</button>
                    <h3 className=" mb-2 text-center">
                        Study Notion
                        <span className='px-3'>—</span>
                        Rhythm
                        <span className='px-3'>—</span>
                        Portfolio website
                    </h3>
                </motion.section>

            </section>


            <section className='relative w-full flex flex-col h-[300vh]  gap-[30vh] md:px-12 px-4'>
                {
                    allProjects[0].projects.map((project, index) => {
                        return (
                            <section className={`sticky top-24 w-full h-[80vh] bg-primary grid grid-rows-[25%_75%] grid-cols-[60%_40%]  pt-3 border-2 border-secondary rounded-xl`}>

                                <section className=' flex flex-col items-center  gap-6 '>
                                    <p className='text-6xl font-serif'> 0{index + 1}. {project?.name}</p>
                                    <p className='text-gray-400 font-mono'>{
                                        project?.CoreStack &&
                                        project?.CoreStack.map((tech, index) => {
                                            return (
                                                <span >{tech + `${index != project?.CoreStack.length - 1 ? ", " : "."}`}</span>
                                            )
                                        })
                                    }</p>


                                </section>

                                <section className='flex justify-end pr-10 '>
                                    <a className=' rounded-full text-9xl' href='#'>
                                        <BsArrowUpRightCircle /></a>
                                </section>

                                <figure>
                                    <img src={project?.src} alt='Project Image' className='w-full rounded-2xl md:h-full  ' />
                                </figure>

                                <section className=' flex flex-col  justify-end gap-5  px-5'>
                                    <article className=' flex gap-10 justify-evenly'>
                                        <a className='border border-zinc-700 px-4 py-2 rounded-lg flex items-center gap-2' href='#'>
                                            <FaCode /> GitHub Code
                                        </a>
                                        <NavLink className='flex items-center px-4 py-2 w-fit border border-zinc-700 gap-4 rounded-lg' to={'/Projects/ProjectOverView'} state={{ project, index }} >
                                            Explore The Project <FaArrowRightLong /> </NavLink>
                                    </article>
                                    <img src={second} className='w-full h-[80%]' />
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