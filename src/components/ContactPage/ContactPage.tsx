import { ContactMe } from './ContactMe'
import { IProjectsSubPages, IProfileInfoSubPages, IContactSubPages } from '../../interfaces'

interface IProps {
  subPage: IProjectsSubPages | IProfileInfoSubPages | IContactSubPages
}

export const ContactPage: React.FC<IProps> = ({ subPage }: IProps) => {
  return <ContactMe />
}
