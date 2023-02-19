import { ProjectContainer } from './ProjectContainer'
import { ProjectCard } from './ProjectCard'
import { IProjectsSubPages, IProfileInfoSubPages, IContactSubPages, IIsExpandedProject } from '../../interfaces'

interface IProps {
  subPage: IProjectsSubPages | IProfileInfoSubPages | IContactSubPages
  isExpanded: IIsExpandedProject
  setIsExpanded: React.Dispatch<React.SetStateAction<IIsExpandedProject>>
}

export const ProjectsPage: React.FC<IProps> = ({ subPage, isExpanded, setIsExpanded }: IProps) => {
  if (subPage === 'technologies') {
    return <h1>Technologies sub page</h1>
  }
  return (
    <ProjectContainer>
      <>
        <ProjectCard renderIndex={0} isExpanded={isExpanded} projectTitle="portfolio" setIsExpanded={setIsExpanded} />
        <ProjectCard
          renderIndex={1}
          isExpanded={isExpanded}
          projectTitle="dashboardMiranda"
          setIsExpanded={setIsExpanded}
        />
        <ProjectCard
          renderIndex={2}
          isExpanded={isExpanded}
          projectTitle="hotelMiranda"
          setIsExpanded={setIsExpanded}
        />
        <ProjectCard renderIndex={3} isExpanded={isExpanded} projectTitle="scrapAmazon" setIsExpanded={setIsExpanded} />
        <ProjectCard renderIndex={4} isExpanded={isExpanded} projectTitle="imgFinder" setIsExpanded={setIsExpanded} />
        <ProjectCard
          renderIndex={5}
          isExpanded={isExpanded}
          projectTitle="nextJSMeetups"
          setIsExpanded={setIsExpanded}
        />
        <ProjectCard
          renderIndex={6}
          isExpanded={isExpanded}
          projectTitle="paletteGenerator"
          setIsExpanded={setIsExpanded}
        />
        <ProjectCard
          renderIndex={7}
          isExpanded={isExpanded}
          projectTitle="oxygenShop"
          setIsExpanded={setIsExpanded}
          lastCard
        />
      </>
    </ProjectContainer>
  )
}
