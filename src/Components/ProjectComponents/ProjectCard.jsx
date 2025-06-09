import React, { useState } from 'react'
import { FaCode, FaInfoCircle } from 'react-icons/fa'
import { IoEarth } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

const ProjectCard = ({ project, projectNumber }) => {
    const [imageLoaded, setImageLoaded] = useState(false)

    return (
        <section className='w-full lg:w-[37vw] h-fit flex flex-col gap-5 py-6 border-2 border-secondary rounded-xl px-4'>
            <section>
                <p className='text-3xl font-serif mb-2'>{project?.name}</p>
                <p className='text-gray-400 font-mono'>
                    {
                        project?.CoreStack?.map((tech, index) => (
                            <span key={index}>{tech + `${index !== project?.CoreStack.length - 1 ? ", " : "."}`}</span>
                        ))
                    }
                </p>
            </section>

            <figure className='relative w-full md:h-[35vh] overflow-hidden rounded-2xl'>
                {/* Shimmer Placeholder */}
                {!imageLoaded && (
                    <div className='absolute inset-0 shimmer-bg rounded-2xl'></div>
                )}
                {/* Actual Image */}
                <img
                    src={project?.src}
                    alt='Project'
                    loading='lazy'
                    onLoad={() => setImageLoaded(true)}
                    className={`w-full h-full object-cover rounded-2xl transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
            </figure>

            <article className='flex md:gap-10 justify-center flex-wrap gap-4'>
                <a href={project?.Github} target='_blank'
                    className='border border-zinc-600 px-4 py-1 rounded-lg flex items-center gap-2'>
                    <FaCode /> Code
                </a>
                <a href={project?.LiveUrl} target='_blank'
                    className='border border-zinc-600 px-4 py-1 rounded-lg flex items-center gap-2'>
                    <IoEarth /> Live demo
                </a>
                <NavLink
                    className='border flex items-center gap-2 border-zinc-600 px-4 py-1 rounded-lg'
                    to={'/Projects/ProjectOverView'}
                    state={{ project, projectNumber }}>
                    <FaInfoCircle /> Explore
                </NavLink>
            </article>
        </section>
    )
}

export default ProjectCard
