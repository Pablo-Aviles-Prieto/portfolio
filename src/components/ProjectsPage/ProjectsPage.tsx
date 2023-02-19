import { ProjectContainer } from './ProjectContainer'
import { ProjectCard } from './ProjectCard'
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
        <ProjectCard isExpanded={isExpanded} projectTitle="portfolio" setIsExpanded={setIsExpanded} />
        <ProjectCard isExpanded={isExpanded} projectTitle="dashboardMiranda" setIsExpanded={setIsExpanded} />
      </>
    </ProjectContainer>
  )
}
