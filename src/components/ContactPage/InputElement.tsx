import styled from 'styled-components'

export const CustomLabel = styled.label`
  display: block;
  color: ${({ theme }) => theme.emphasizeColor};
`

const CustomInput = styled.input<{
  padding: string
  borderRadius: string
}>`
  padding: ${({ padding }) => padding};
  border: 1px solid ${({ theme }) => theme.emphasizeColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  color: ${({ theme }) => theme.mainColor};
  background-color: transparent;
`

interface IProps {
  title: string
  label: string
  inputType?: string
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputElement: React.FC<IProps> = ({ title, label, inputType, onChangeHandler }: IProps) => {
  return (
    <div className="input-block">
      <CustomLabel htmlFor={title}>{label}</CustomLabel>
      <CustomInput
        borderRadius="6px"
        padding="5px"
        name={title}
        placeholder={`${title}...`}
        id={title}
        type={inputType}
        step={inputType === 'number' ? '0.01' : ''}
        min={inputType === 'number' ? '0' : ''}
        onChange={onChangeHandler}
      />
    </div>
  )
}

InputElement.defaultProps = {
  inputType: 'text'
}
