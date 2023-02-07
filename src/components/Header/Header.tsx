import styled from 'styled-components'

interface IProps {
  mainBground: string
  mainColor: string
}

const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  height: 150px;
  color: ${({ theme }) => theme.mainColor};
  width: 100%;
  box-shadow: 0px 3px 10px #0000006e;
`
export const Header: React.FC = () => {
  return <HeaderContainer>Test 123</HeaderContainer>
}
