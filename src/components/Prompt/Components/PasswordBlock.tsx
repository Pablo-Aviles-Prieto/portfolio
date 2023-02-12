import { TypeLineAnimation } from '../TypeAnimations'
import { IPropsElements } from '../../../interfaces/IPropsElements'

export const PasswordBlock: React.FC<IPropsElements> = ({ installingData, cbFunction, typingLine }: IPropsElements) => {
  return (
    <div className="Terminal__Prompt">
      <span className="Terminal__text" style={{ marginRight: '2px' }}>
        {installingData}
      </span>
      <TypeLineAnimation sequence={[400, `*****`, 500, cbFunction]} />
      {typingLine === 3 && <span className="Prompt__cursor" />}
    </div>
  )
}
