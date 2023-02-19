import { ProjectContainer } from './ProjectContainer'
import { ProjectCard } from './ProjectCard'
import { IProjectsSubPages, IProfileInfoSubPages, IContactSubPages } from '../../interfaces'

interface IProps {
  subPage: IProjectsSubPages | IProfileInfoSubPages | IContactSubPages
  isExpanded: boolean
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>
}

export const ProjectsPage: React.FC<IProps> = ({ subPage, isExpanded, setIsExpanded }: IProps) => {
  if (subPage === 'technologies') {
    return <h1>Technologies sub page</h1>
  }
  return (
    <ProjectContainer>
      <>
        <ProjectCard isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        {/* <ProjectCard /> */}
      </>
    </ProjectContainer>
  )
}
