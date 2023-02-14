import { AboutmeHeader } from './AboutmeHeader'
import { AboutmeContent } from './AboutmeContent'
import { IProfileInfoSubPages, IProjectsSubPages, IContactSubPages } from '../../interfaces'

interface IProps {
  subPage: IProfileInfoSubPages | IProjectsSubPages | IContactSubPages
}

export const ProfileInfoPage: React.FC<IProps> = ({ subPage }: IProps) => {
  if (subPage === 'experience') {
    return <h1>Experience page component</h1>
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
