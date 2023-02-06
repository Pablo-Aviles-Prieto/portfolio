import styled from 'styled-components'
import { TypeLineAnimationFast } from './TypeLineAnimationFast'
import { TypePercentageAnimationFast } from './TypePercentageAnimationFast'

const TerminalText = styled.span`
  margin-right: 10px;
`

interface IProps {
  cbFunction: (element: HTMLElement | null) => void | Promise<void>
  packageName: string
}

export const TypeInstallationInfoFast: React.FC<IProps> = ({ cbFunction, packageName }: IProps) => {
  return (
    <div className="Terminal__Prompt">
      <span className="Terminal__Prompt--spacer" />
      <TerminalText className="Terminal__text">{packageName}</TerminalText>
      <span style={{ width: '152px' }}>
        <TypeLineAnimationFast sequence={[`[=================>`]} />
      </span>
      <TerminalText className="Terminal__text">]</TerminalText>
      <TypePercentageAnimationFast cbFunction={cbFunction} />
    </div>
  )
}
