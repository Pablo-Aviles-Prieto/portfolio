import styled from 'styled-components'

export const LeftBlockContainer = styled.div<{ introState: boolean }>`
  height: 30vh;
  width: 100%;
  background-color: ${({ theme }) => theme.mainBground};
  margin-left: ${({ introState }) => (introState ? '-100%' : '0')};
  transition: margin-left 0.5s ease-in;
`
