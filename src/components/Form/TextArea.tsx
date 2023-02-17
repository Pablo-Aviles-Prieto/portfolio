import styled from 'styled-components'
import { CustomLabel, InputContainer } from '../Styles'

const DescriptionTextArea = styled.textarea<{
  padding: string
  borderRadius: string
}>`
  padding: ${({ padding }) => padding};
  border: 1px solid ${({ theme }) => theme.emphasizeColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  color: ${({ theme }) => theme.mainColor};
  background: transparent;
`

interface IProps {
  title: string
  label: string
  width?: string
  children: JSX.Element
}

export const TextArea: React.FC<IProps> = ({ title, label, width, children }: IProps) => {
  return (
    <InputContainer width={width}>
      <CustomLabel htmlFor={title}>{label}</CustomLabel>
      <DescriptionTextArea
        borderRadius="4px"
        padding="8px"
        placeholder={`${label}...`}
        id={title}
        name={title}
        rows={5}
      />
      {children}
    </InputContainer>
  )
}

TextArea.defaultProps = {
  width: 'auto'
}
