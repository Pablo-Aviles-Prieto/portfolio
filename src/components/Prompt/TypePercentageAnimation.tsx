import { TypeAnimation } from 'react-type-animation'

interface IProps {
  cbFunction: (element: HTMLElement | null) => void | Promise<void>
}

export const TypePercentageAnimation: React.FC<IProps> = ({ cbFunction }: IProps) => {
  return (
    <TypeAnimation
      sequence={[
        100,
        `12%`,
        70,
        `23%`,
        100,
        `38%`,
        50,
        `49%`,
        50,
        `62%`,
        50,
        `74%`,
        50,
        `81%`,
        110,
        `100%`,
        cbFunction
      ]}
      className="Terminal__text"
      speed={90}
      wrapper="span"
      cursor={false}
      repeat={0}
    />
  )
}
