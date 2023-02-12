import styled from 'styled-components'

export const RightBlockContainer = styled.div<{ introState: boolean }>`
  height: 40vh;
  background-color: ${({ theme }) => theme.mainBground};
  margin-left: ${({ introState }) => (introState ? '100%' : '0')};
  transition: margin-left 0.5s ease-in;
`
