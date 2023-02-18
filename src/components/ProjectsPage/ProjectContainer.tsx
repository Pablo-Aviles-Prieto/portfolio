import styled from 'styled-components'
import { ProjectCard } from './ProjectCard'

const PrevWorks = styled.div`
  margin-top: 10px;
`

export const ProjectContainer: React.FC = () => {
  return (
    <PrevWorks>
      <ProjectCard />
    </PrevWorks>
  )
}
