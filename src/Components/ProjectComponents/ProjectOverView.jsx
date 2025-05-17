import React from 'react'
import { FaRegDotCircle } from 'react-icons/fa'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { IoEarth } from 'react-icons/io5'
import { useLocation, useNavigate } from 'react-router-dom'
import studyNotionWebsite from "../../assets/ProjectsFullPage/studyNotionWebsite.png"

const ProjectOverView = () => {
    let { state } = useLocation()
    let navigate = useNavigate()
    // console.log(state)
    let { project, projectNumber } = state
    // console.log(project)
    // console.log(projectNumber)
    return (
        <>
            {
                project &&
                <section className='w-full  h-[90vh] pt-6 flex px-6 justify-between '>
                    <article className='w-[35%] h-full  '>
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
                                            <li key={index} className='pl-16     flex items-center gap-4 mt-1'>
                                                <FaRegDotCircle />  {tech}</li>
                                        )
                                    })
                                }
                            </ul>

                            <a href={project?.liveUrl} className='border border-zinc-600 px-8 py-2 mt-3 rounded-lg flex gap-3 items-center'>
                                <IoEarth /> View Live site
                            </a>
                        </section>

                    </article>

                    <figure className='min-h-full w-[60%] overflow-x-hidden overflow-y-scroll projectFullImage'

                    >
                        <img src={studyNotionWebsite} />
                    </figure>
                </section>
            }

        </>
    )
}

export default ProjectOverView