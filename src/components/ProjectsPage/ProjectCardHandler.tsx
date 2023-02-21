import { ProjectCard } from './ProjectCard'
import { previousProjects } from '../../utils'
import { IIsExpandedProject, IPreviousProjectObj } from '../../interfaces'

interface IProps {
  project: IPreviousProjectObj
  isExpanded: IIsExpandedProject
  setIsExpanded: React.Dispatch<React.SetStateAction<IIsExpandedProject>>
}

export const ProjectCardHandler: React.FC<IProps> = ({ project, isExpanded, setIsExpanded }: IProps) => {
  return (
    <ProjectCard
      renderIndex={project.index}
      isExpanded={isExpanded}
      projectTitle={project.title}
      setIsExpanded={setIsExpanded}
      project={project}
      lastCard={project.index === previousProjects.length - 1}
    />
  )
}
