import React, { useState } from 'react'
import { FaRegDotCircle } from 'react-icons/fa'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { IoEarth } from 'react-icons/io5'
import { useLocation, useNavigate } from 'react-router-dom'

const ProjectOverView = () => {
    let { state } = useLocation()
    let navigate = useNavigate()
    let { project, projectNumber } = state;
    const [imageLoaded, setImageLoaded] = useState(false)
    return (
        <>
            {
                project &&
                <section className='w-full  mt-[10vh] md:mt-0 lg:h-[90vh] md:pt-6 flex flex-col lg:flex-row  gap-10 px-6 justify-between '>
                    <article className='lg:w-[35%] h-full  '>
                        <section onClick={() => navigate(-1)}
                            className='border border-zinc-600  px-4 py-2 rounded-xl flex  items-center gap-3 w-fit cursor-pointer'
                        > <IoMdArrowRoundBack />Go Back</section>

                        <section className='pl-8 pt-6 flex flex-col items-start gap-5  '>
                            <h2 className='text-2xl font-bold tracking-wider'>
                                {'0' + projectNumber + '.'}  {project?.name}
                            </h2>
                            <h3 className='text-sm text-justify'>{project?.description}</h3>
                            <h3 className='text-lg font-semibold'>Tech Stack's : </h3>
                            <ul>
                                {
                                    project?.TechStack &&
                                    project?.TechStack.map((tech, index) => {
                                        return (
                                            <li key={index} className='pl-16 flex items-center gap-4 mt-1'>
                                                <FaRegDotCircle />  {tech}</li>
                                        )
                                    })
                                }
                            </ul>

                            <a href={project?.LiveUrl} target='_blank' className='border border-zinc-600 px-8 py-2 mt-3 rounded-lg flex gap-3 items-center'>
                                <IoEarth /> View Live site
                            </a>
                        </section>

                    </article>

                    <figure className='min-h-full lg:w-[60%] overflow-x-hidden lg:overflow-y-scroll projectFullImage relative rounded-lg'

                    >
                        {/* Shimmer Placeholder */}
                        {!imageLoaded && (
                            <div className='absolute inset-0 shimmer-bg '></div>
                        )}
                        <img src={project?.Explore}
                            alt='Project Explore'
                            loading='lazy'
                            onLoad={() => setImageLoaded(true)} 
                            className={` rounded-2xl transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                            />
                    </figure>
                </section>
            }

        </>
    )
}

export default ProjectOverView