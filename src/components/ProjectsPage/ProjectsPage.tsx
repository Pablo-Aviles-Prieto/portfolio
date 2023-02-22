import { useState, useEffect } from 'react'
import { ProjectContainer } from './ProjectContainer'
import { ProjectCardHandler } from './ProjectCardHandler'
import { previousProjects } from '../../utils'
import {
  IProjectsSubPages,
  IProfileInfoSubPages,
  IContactSubPages,
  IIsExpandedProject,
  IPreviousProjectObj
} from '../../interfaces'
import { technologies } from '../../enums/technologies'

interface IProps {
  subPage:
    | IProfileInfoSubPages
    | IProjectsSubPages
    | IContactSubPages
    | (IProfileInfoSubPages | IProjectsSubPages | IContactSubPages)[]
  isExpanded: IIsExpandedProject
  setIsExpanded: React.Dispatch<React.SetStateAction<IIsExpandedProject>>
}

export const ProjectsPage: React.FC<IProps> = ({ subPage, isExpanded, setIsExpanded }: IProps) => {
  const [projectsArray, setProjectsArray] = useState<IPreviousProjectObj[]>([])

  useEffect(() => {
    if (subPage === 'introduction') {
      setProjectsArray(previousProjects)
      return
    }
    if (!Array.isArray(subPage)) return
    const newProjectsFiltered = previousProjects.filter(project => {
      // project.technologies are values of technologies enum
      return project.technologies.find(projectTech => {
        // subPage are keys of technologies enum
        return subPage.find(techSubPage => {
          return technologies[techSubPage as keyof typeof technologies] === projectTech
        })
      })
    })
    // In case all techs are removed, we show all the projects
    if (newProjectsFiltered.length === 0) {
      return setProjectsArray(previousProjects)
    }
    setProjectsArray(newProjectsFiltered)
  }, [subPage])

  return (
    <ProjectContainer>
      <>
        <p style={{ textAlign: 'center', fontWeight: 700, fontSize: '18px' }}>
          Showing <span style={{ color: '#ff8e00' }}>{projectsArray.length} projects</span>
        </p>
        {projectsArray.map((project, i) => (
          <ProjectCardHandler
            key={project.index}
            project={project}
            renderIndex={i}
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
          />
        ))}
      </>
    </ProjectContainer>
  )
}
