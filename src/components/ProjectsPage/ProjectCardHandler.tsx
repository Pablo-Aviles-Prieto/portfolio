import { ProjectCard } from './ProjectCard'
import { IIsExpandedProject, IPreviousProjectObj } from '../../interfaces'

interface IProps {
  project: IPreviousProjectObj
  isExpanded: IIsExpandedProject
  renderIndex: number
  lastCard: boolean
  setIsExpanded: React.Dispatch<React.SetStateAction<IIsExpandedProject>>
}

export const ProjectCardHandler: React.FC<IProps> = ({
  project,
  renderIndex,
  isExpanded,
  lastCard,
  setIsExpanded
}: IProps) => {
  return (
    <ProjectCard
      renderIndex={renderIndex}
      isExpanded={isExpanded}
      projectTitle={project.title}
      setIsExpanded={setIsExpanded}
      project={project}
      lastCard={lastCard}
    />
  )
}
