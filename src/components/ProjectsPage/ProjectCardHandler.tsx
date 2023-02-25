import { ProjectCard } from './ProjectCard'
import { previousProjects } from '../../utils'
import { IIsExpandedProject, IPreviousProjectObj } from '../../interfaces'

interface IProps {
  project: IPreviousProjectObj
  isExpanded: IIsExpandedProject
  renderIndex: number
  setIsExpanded: React.Dispatch<React.SetStateAction<IIsExpandedProject>>
}

export const ProjectCardHandler: React.FC<IProps> = ({ project, renderIndex, isExpanded, setIsExpanded }: IProps) => {
  return (
    <ProjectCard
      renderIndex={renderIndex}
      isExpanded={isExpanded}
      projectTitle={project.title}
      setIsExpanded={setIsExpanded}
      project={project}
      lastCard={project.index === previousProjects.length - 1}
    />
  )
}
