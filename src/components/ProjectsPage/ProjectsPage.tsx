import { ProjectContainer } from './ProjectContainer'
import { ProjectCard } from './ProjectCard'
import { previousProjects } from '../../utils'
import { IProjectsSubPages, IProfileInfoSubPages, IContactSubPages, IIsExpandedProject } from '../../interfaces'

interface IProps {
  subPage: IProjectsSubPages | IProfileInfoSubPages | IContactSubPages
  isExpanded: IIsExpandedProject
  setIsExpanded: React.Dispatch<React.SetStateAction<IIsExpandedProject>>
}

export const ProjectsPage: React.FC<IProps> = ({ subPage, isExpanded, setIsExpanded }: IProps) => {
  if (subPage === 'technologies') {
    return <h1>Technologies sub page</h1>
  }
  return (
    <ProjectContainer>
      <>
        {previousProjects.map(project => (
          <ProjectCard
            key={project.index}
            renderIndex={project.index}
            isExpanded={isExpanded}
            projectTitle={project.title}
            setIsExpanded={setIsExpanded}
            prevProject={project}
            lastCard={project.index === previousProjects.length - 1}
          />
        ))}
      </>
    </ProjectContainer>
  )
}
