import { TypeAnimation } from 'react-type-animation'

interface IProps {
  sequence: (string | number | ((element: HTMLElement | null) => void | Promise<void>))[]
  styleClass?: string
}

export const TypeLineAnimation: React.FC<IProps> = ({ sequence, styleClass }: IProps) => {
  return <TypeAnimation sequence={sequence} className={styleClass} wrapper="span" cursor={false} repeat={0} />
}

TypeLineAnimation.defaultProps = {
  styleClass: 'Terminal__text'
}
