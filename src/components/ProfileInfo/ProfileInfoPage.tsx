import { AboutmeHeader } from './AboutmeHeader'
import { AboutmeContent } from './AboutmeContent'
import { Experience } from './Experience'
import { IProfileInfoSubPages, IProjectsSubPages, IContactSubPages } from '../../interfaces'

interface IProps {
  subPage: IProfileInfoSubPages | IProjectsSubPages | IContactSubPages
}

export const ProfileInfoPage: React.FC<IProps> = ({ subPage }: IProps) => {
  if (subPage === 'experience') {
    return <Experience />
  }
  if (subPage === 'education') {
    return <h1>Education page component</h1>
  }
  return (
    <>
      <AboutmeHeader />
      <AboutmeContent />
    </>
  )
}
