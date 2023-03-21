import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Trans, useTranslation } from 'react-i18next'
import { ProjectCardHandler } from './ProjectCardHandler'
import { previousProjectsEN, previousProjectsES } from '../../utils'
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
  const { language: i18nLanguage } = useTranslation().i18n

  useEffect(() => {
    const previousProjectsData = i18nLanguage === 'en' ? previousProjectsEN : previousProjectsES
    if (subPage === 'introduction') {
      setProjectsArray(previousProjectsData)
      return
    }
    if (!Array.isArray(subPage)) return
    const newProjectsFiltered = previousProjectsData.filter(project => {
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
      return setProjectsArray(previousProjectsData)
    }
    setProjectsArray(newProjectsFiltered)
  }, [subPage, i18nLanguage])

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
