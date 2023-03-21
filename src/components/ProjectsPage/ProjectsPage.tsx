import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Trans } from 'react-i18next'
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

const ProjectContainer = styled.div`
  position: relative;
  .projects__count {
    margin: 20px 0;
    text-align: center;
    font-weight: 700;
    font-size: 18px;
    span {
      color: ${({ theme }) => theme.emphasizeColor};
    }
  }
`

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
        <p className="projects__count">
          <Trans
            i18nKey="common:showingProjects"
            values={{ count: projectsArray.length }}
            components={{ 1: <span /> }}
          />
        </p>
        {projectsArray.map((project, i) => (
          <ProjectCardHandler
            key={project.index}
            project={project}
            renderIndex={i}
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
            lastCard={projectsArray.length - 1 === i}
          />
        ))}
      </>
    </ProjectContainer>
  )
}
