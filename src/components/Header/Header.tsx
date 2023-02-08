import styled from 'styled-components'

type IProps = {
  introState: boolean
}

const HeaderContainer = styled.div<IProps>`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  height: ${({ introState }) => (introState ? '0px' : '80px')};
  width: 100%;
  box-shadow: 0px 3px 10px #0000006e;
  transition: height 2s ease-in;
`

export const Header: React.FC<IProps> = ({ introState }: IProps) => {
  return <HeaderContainer introState={introState}>Test 123</HeaderContainer>
}
