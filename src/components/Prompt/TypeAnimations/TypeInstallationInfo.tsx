import styled from 'styled-components'
import { TypeLineAnimation } from './TypeLineAnimation'
import { TypePercentageAnimation } from './TypePercentageAnimation'

const TerminalText = styled.span`
  margin-right: 10px;
`

interface IProps {
  cbFunction: (element: HTMLElement | null) => void | Promise<void>
  packageName: string
}

export const TypeInstallationInfo: React.FC<IProps> = ({ cbFunction, packageName }: IProps) => {
  return (
    <div className="Terminal__Prompt">
      <span className="Terminal__Prompt--spacer" />
      <TerminalText className="Terminal__text">{packageName}</TerminalText>
      <span style={{ width: '152px' }}>
        <TypeLineAnimation sequence={[`[=================>`]} />
      </span>
      <TerminalText className="Terminal__text">]</TerminalText>
      <TypePercentageAnimation cbFunction={cbFunction} />
    </div>
  )
}
