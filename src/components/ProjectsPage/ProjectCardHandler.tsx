import { ProjectCard } from './ProjectCard'
import { IIsExpandedProject, IPreviousProjectObj } from '../../interfaces'

interface IProps {
  project: IPreviousProjectObj
  isExpanded: IIsExpandedProject
  renderIndex: number
  setIsExpanded: React.Dispatch<React.SetStateAction<IIsExpandedProject>>
}

export const ProjectCardHandler: React.FC<IProps> = ({ project, renderIndex, isExpanded, setIsExpanded }: IProps) => {
  return <ProjectCard projectTitle={project.title} project={project} />
}
