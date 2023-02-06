import { TypeAnimation } from 'react-type-animation'

interface IProps {
  sequence: (string | number | ((element: HTMLElement | null) => void | Promise<void>))[]
  styleClass?: string
}

export const TypeLineAnimationFast: React.FC<IProps> = ({ sequence, styleClass }: IProps) => {
  return (
    <TypeAnimation speed={70} sequence={sequence} className={styleClass} wrapper="span" cursor={false} repeat={0} />
  )
}

TypeLineAnimationFast.defaultProps = {
  styleClass: 'Terminal__text'
}
