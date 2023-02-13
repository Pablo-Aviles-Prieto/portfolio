import { IProjectsSubPages, IProfileInfoSubPages, IContactSubPages } from '../../interfaces'

interface IProps {
  subPage: IProjectsSubPages | IProfileInfoSubPages | IContactSubPages
}

export const ContactPage: React.FC<IProps> = ({ subPage }: IProps) => {
  return <h1>ContactPage</h1>
}
