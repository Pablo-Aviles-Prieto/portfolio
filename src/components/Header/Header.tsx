import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  height: 80px;
  width: 100%;
  box-shadow: 0px 3px 10px #0000006e;
`
export const Header: React.FC = () => {
  return <HeaderContainer>Test 123</HeaderContainer>
}
