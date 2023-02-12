import { TypeAnimation } from 'react-type-animation'

interface IProps {
  cbFunction: (element: HTMLElement | null) => void | Promise<void>
}

export const TypePercentageAnimationFast: React.FC<IProps> = ({ cbFunction }: IProps) => {
  return (
    <TypeAnimation
      sequence={[100, `17%`, 30, `29%`, 50, `42%`, 50, `58%`, 50, `71%`, 50, `83%`, 50, `100%`, cbFunction]}
      className="Terminal__text"
      speed={99}
      wrapper="span"
      cursor={false}
      repeat={0}
    />
  )
}
