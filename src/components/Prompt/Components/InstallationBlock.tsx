import { TypeLineAnimation } from '../TypeAnimations'
import { IPropsElements } from '../../../interfaces/IPropsElements'

export const InstallationBlock: React.FC<IPropsElements> = ({ cbFunction, installingData }: IPropsElements) => {
  return (
    <div className="Terminal__Prompt">
      <span className="Terminal__text">{installingData}</span>
      <TypeLineAnimation sequence={[` `, cbFunction]} />
    </div>
  )
}
