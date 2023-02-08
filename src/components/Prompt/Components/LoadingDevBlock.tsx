import { TypeLineAnimation } from '../TypeAnimations'
import { IPropsElements } from '../../../interfaces/IPropsElements'

export const LoadingDevBlock: React.FC<IPropsElements> = ({ installingData, cbFunction }: IPropsElements) => {
  return (
    <div className="Terminal__Prompt">
      <span className="Terminal__text">
        Loading developer <span className="Prompt__user">Pablo Avilés</span>
      </span>
      <TypeLineAnimation sequence={[` `, 500, cbFunction]} />
    </div>
  )
}
