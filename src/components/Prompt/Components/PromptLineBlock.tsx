import { TypeLineAnimation } from '../TypeAnimations'
import { IPropsElements } from '../../../interfaces/IPropsElements'

export const PromptLineBlock: React.FC<IPropsElements> = ({ installingData, cbFunction }: IPropsElements) => {
  return (
    <div className="Terminal__Prompt">
      <span className="Prompt__user">aviles@ubuntu:</span>
      <span className="Prompt__location">~</span>
      <span className="Prompt__dollar">$</span>
      <span className="Prompt__cursor" />
      <TypeLineAnimation sequence={[` `, 1000, cbFunction]} />
    </div>
  )
}
