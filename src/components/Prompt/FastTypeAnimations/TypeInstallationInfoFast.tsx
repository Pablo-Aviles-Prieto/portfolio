import styled from 'styled-components'
import { TypeLineAnimationFast } from './TypeLineAnimationFast'
import { TypePercentageAnimationFast } from './TypePercentageAnimationFast'
import { IPropsElements } from '../../../interfaces/IPropsElements'

const TerminalText = styled.span`
  margin-right: 10px;
`

export const TypeInstallationInfoFast: React.FC<IPropsElements> = ({ cbFunction, installingData }: IPropsElements) => {
  return (
    <div className="Terminal__Prompt">
      <span className="Terminal__Prompt--spacer" />
      <TerminalText className="Terminal__text">{installingData}</TerminalText>
      <span style={{ width: '152px' }}>
        <TypeLineAnimationFast sequence={[`[=================>`]} />
      </span>
      <TerminalText className="Terminal__text">]</TerminalText>
      <TypePercentageAnimationFast cbFunction={cbFunction} />
    </div>
  )
}
