import styled from 'styled-components'

const GridContainer = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 10px;
  position: relative;
`

interface IProps {
  children: JSX.Element
}

export const ProjectContainer: React.FC<IProps> = ({ children }: IProps) => {
  return <GridContainer>{children}</GridContainer>
}
