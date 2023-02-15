import { Aboutme } from './Aboutme'
import { Experience } from './Experience'
import { Education } from './Education'
import { IProfileInfoSubPages, IProjectsSubPages, IContactSubPages } from '../../interfaces'

interface IProps {
  subPage: IProfileInfoSubPages | IProjectsSubPages | IContactSubPages
}

export const ProfileInfoPage: React.FC<IProps> = ({ subPage }: IProps) => {
  if (subPage === 'experience') {
    return <Experience />
  }
  if (subPage === 'education') {
    return <Education />
  }
  return <Aboutme />
}
