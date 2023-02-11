import styled from 'styled-components'

export const GenericButton = styled.button`
  cursor: pointer;
  font-family: 'Poppins';
  padding: 10px 25px;
  background-color: ${({ theme }) => theme.emphasizeColor};
  font-weight: 700;
  border-radius: 8px;
  border: none;
  &:hover {
    background-color: ${({ theme }) => theme.lightEmphasize};
  }
`
