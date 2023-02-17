import styled from 'styled-components'

export const InputContainer = styled.div<{ width?: string }>`
  width: ${({ width }) => width || 'auto'};
  .error-input {
    height: 20px;
    color: red;
    font-size: 13px;
    margin-top: 5px;
  }
  .error-input.tarea {
    margin-top: 0;
  }
`
