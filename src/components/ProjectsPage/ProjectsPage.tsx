import { ProjectContainer } from './ProjectContainer'
import { IProjectsSubPages, IProfileInfoSubPages, IContactSubPages } from '../../interfaces'

interface IProps {
  subPage: IProjectsSubPages | IProfileInfoSubPages | IContactSubPages
}

export const ProjectsPage: React.FC<IProps> = ({ subPage }: IProps) => {
  if (subPage === 'technologies') {
    return <h1>Technologies sub page</h1>
  }
  return <ProjectContainer />
}
