import styled from 'styled-components'
import { TypeLineAnimation } from './TypeLineAnimation'
import { TypePercentageAnimation } from './TypePercentageAnimation'
import { IPropsElements } from '../../../interfaces/IPropsElements'

const TerminalText = styled.span`
  margin-right: 10px;
`

export const TypeInstallationInfo: React.FC<IPropsElements> = ({ cbFunction, installingData }: IPropsElements) => {
  return (
    <div className="Terminal__Prompt">
      <span className="Terminal__Prompt--spacer" />
      <TerminalText className="Terminal__text">{installingData}</TerminalText>
      <span style={{ width: '152px' }}>
        <TypeLineAnimation sequence={[`[=================>`]} />
      </span>
      <TerminalText className="Terminal__text">]</TerminalText>
      <TypePercentageAnimation cbFunction={cbFunction} />
    </div>
  )
}
