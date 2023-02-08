import styled from 'styled-components'

export const BottomBlockContainer = styled.div<{ introState: boolean }>`
  /* height: 30vh; */
  height: ${({ introState }) => (introState ? '0' : '30vh')};
  width: 100%;
  background-color: ${({ theme }) => theme.mainBground};
  transform: translateY(${({ introState }) => (introState ? '100%' : '0')});
  transition: height 2s ease-out, transform 0.5s ease-in;
`

// export const BottomBlockContainer = styled.div<{ introState: boolean }>`
//   /* height: 30vh; */
//   height: ${({ introState }) => (introState ? '0' : '30vh')};
//   width: 100%;
//   background-color: ${({ theme }) => theme.mainBground};
//   transform: translateY(${({ introState }) => (introState ? '100%' : '0')});
//   transition: height 0.5s ease-out, transform 0.5s ease-in;
//   position: absolute;
//   bottom: 0;
// `
