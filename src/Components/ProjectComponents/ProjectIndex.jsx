import React, { useState } from 'react'
import { allProjects } from '../utilities/Projects'
import ProjectCard from './ProjectCard'

let ProjectCategoryName = [
  "Featured",
  "Full Stack",
  "Front-End",
  "Html Css Js ",
  "Html Tailwind-CSS",
  "Html Css"
]

const ProjectIndex = () => {
  console.log(allProjects)
  let [currentTab, setCurrentTab] = useState(ProjectCategoryName[0])
  let [projects, setProjects] = useState(allProjects[0].projects)
  console.log(projects)

  let setProjectCategory = (value) => {
    console.log(value)
    setCurrentTab(value)
    const result = allProjects.filter(project => project.categoryName === value)
    console.log(result);
    if (result.length >= 1) {
      setProjects(result[0].projects)
    } else {
      setProjects([])
    }

  }


  return (
    <section className='pt-[5vh] min-h-[90vh]'>

      <section className=' w-[80vw] bg-[#141517] flex justify-between items-center mx-auto h-[7vh] px-2 rounded-full border-b border-b-[#4a556593]'>
        {
          ProjectCategoryName.map((categoryName, index) => {
            return (
              <p key={index} onClick={() => setProjectCategory(categoryName)}
                className={`cursor-pointer  px-4 py-2 rounded-full   ${categoryName == currentTab ? 'bg-[#000814]' : ''}`}>
                {categoryName}
              </p>
            )
          })
        }
      </section>

      <section className='pb-10  mt-[5vh] flex flex-wrap h-[73vh] w-[80vw] mx-auto overflow-y-scroll gap-16 justify-center'
        style={{
          scrollbarWidth: 'none'
        }}
      >
        {
          projects.map((project, index) => {
            return (
              <ProjectCard project={project} projectNumber={index + 1} />
            )
          })
        }

      </section>
    </section>
  )
}

export default ProjectIndex