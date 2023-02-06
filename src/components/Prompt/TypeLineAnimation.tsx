import { TypeAnimation } from 'react-type-animation'

interface IProps {
  sequence: (string | number | ((element: HTMLElement | null) => void | Promise<void>))[]
}

export const TypeLineAnimation: React.FC<IProps> = ({ sequence }: IProps) => {
  return <TypeAnimation sequence={sequence} className="Terminal__text" wrapper="div" cursor={false} repeat={1} />
}
