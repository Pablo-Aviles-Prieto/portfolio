import { TypeLineAnimation } from '../TypeAnimations'

interface IProps {
  cbFunction: (element: HTMLElement | null) => void | Promise<void>
  installingData: string
}

export const InstallationBlock: React.FC<IProps> = ({ cbFunction, installingData }: IProps) => {
  return (
    <div className="Terminal__Prompt">
      <span className="Terminal__text">{installingData}</span>
      <TypeLineAnimation sequence={[` `, cbFunction]} />
    </div>
  )
}
