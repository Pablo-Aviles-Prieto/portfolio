import { ProjectContainer } from './ProjectContainer'
import { ProjectCardHandler } from './ProjectCardHandler'
import { previousProjects } from '../../utils'
import { IProjectsSubPages, IProfileInfoSubPages, IContactSubPages, IIsExpandedProject } from '../../interfaces'

interface IProps {
  subPage: IProjectsSubPages | IProfileInfoSubPages | IContactSubPages
  isExpanded: IIsExpandedProject
  setIsExpanded: React.Dispatch<React.SetStateAction<IIsExpandedProject>>
}

export const ProjectsPage: React.FC<IProps> = ({ subPage, isExpanded, setIsExpanded }: IProps) => {
  if (subPage === 'technologies') {
    return <h1>test</h1>
  }

  return (
    <ProjectContainer>
      <>
        {previousProjects.map(project => (
          <ProjectCardHandler
            key={project.index}
            project={project}
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
          />
        ))}
      </>
    </ProjectContainer>
  )
}
