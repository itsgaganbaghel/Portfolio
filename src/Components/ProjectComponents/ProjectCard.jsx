import React from 'react'
import { FaCode, FaInfoCircle } from 'react-icons/fa'
import { IoEarth } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

const ProjectCard = ({ project, projectNumber, }) => {
    return (
        <section className='w-full lg:w-[37vw]  h-fit flex flex-col gap-5 py-6 border-2 border-secondary rounded-xl px-4'>
            <section className=''>
                <p className='text-3xl font-serif mb-2'>{project?.name}</p>
                <p className='text-gray-400 font-mono'>{
                    project?.CoreStack &&
                    project?.CoreStack.map((tech, index) => {
                        return (
                            <span >{tech + `${index != project?.CoreStack.length - 1 ? ", " : "."}`}</span>
                        )
                    })
                }</p>
            </section>

            <figure>
                <img src={project?.src} alt='Project Image' className='w-full rounded-2xl md:h-[35vh]  ' />
            </figure>

            <article className=' flex md:gap-10 justify-center flex-wrap gap-4'>
                <a href={project?.Github} target='_blank'
                    className='border border-zinc-600 px-4 py-1 rounded-lg flex items-center gap-2' >
                    <FaCode /> Code</a>
                <a href={project?.LiveUrl} target='_blank'
                    className='border border-zinc-600 px-4 py-1 rounded-lg flex items-center gap-2'>
                    <IoEarth /> Live demo</a>
                <NavLink className='border flex items-center gap-2 border-zinc-600 px-4 py-1 rounded-lg' to={'/Projects/ProjectOverView'} state={{ project, projectNumber }} >
                    <FaInfoCircle /> Explore</NavLink>
            </article>
        </section>
    )
}

export default ProjectCard