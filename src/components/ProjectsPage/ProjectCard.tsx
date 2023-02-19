import styled from 'styled-components'
import { isExpandedProject } from '../../utils'
import { ImgContainer } from '../Styles'
import { IIsExpandedProject } from '../../interfaces'

const CardContainer = styled.div<{ isExpanded: IIsExpandedProject; projectTitle: keyof IIsExpandedProject }>`
  z-index: ${({ isExpanded, projectTitle }) => (isExpanded[projectTitle] ? '3' : '2')};
  position: absolute;
  left: ${({ isExpanded, projectTitle }) => (isExpanded[projectTitle] ? '-281px' : '0')};
  top: ${({ isExpanded, projectTitle }) => (isExpanded[projectTitle] ? '50px' : '0')};
  width: ${({ isExpanded, projectTitle }) => (isExpanded[projectTitle] ? '150%' : '100%')};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 2px 4px 10px rgb(0 0 0 / 15%);
  transition: z-index 0.1s ease-in;
  transition: all 0.5s ease-out;
  &:hover {
    cursor: ${({ isExpanded, projectTitle }) => (isExpanded[projectTitle] ? 'cursor' : 'pointer')};
    box-shadow: 2px 4px 10px rgb(0 0 0 / 40%);
  }
  .content {
    padding: 10px;
    background-color: ${({ theme }) => theme.mainBground};
    &-title {
      text-align: center;
      h3 {
        color: ${({ theme }) => theme.emphasizeColor};
      }
      p {
        color: ${({ theme }) => theme.greyLighter};
      }
    }
    &-techs {
      display: flex;
      align-items: center;
      gap: 5px;
    }
    &-links {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`

const RelativeContainer = styled.div`
  position: relative;
`

const PreviewImg = styled(ImgContainer)`
  border-radius: 0px;
  transition: all 0.5s ease-out;
`

const PUBLIC_URI = process.env.PUBLIC_URL || ''

interface IProps {
  isExpanded: IIsExpandedProject
  projectTitle: keyof IIsExpandedProject
  setIsExpanded: React.Dispatch<React.SetStateAction<IIsExpandedProject>>
}

export const ProjectCard: React.FC<IProps> = ({ isExpanded, projectTitle, setIsExpanded }: IProps) => {
  const switchIsExpanded = ({ title }: { title: keyof IIsExpandedProject }) => {
    const newState = { ...isExpandedProject }
    newState[title] = true
    setIsExpanded(newState)
  }

  return (
    <RelativeContainer>
      <CardContainer
        isExpanded={isExpanded}
        projectTitle={projectTitle}
        onClick={() => switchIsExpanded({ title: projectTitle })}
      >
        <PreviewImg width="100%" height={isExpanded[projectTitle] ? '300px' : '150px'}>
          <img src={`${PUBLIC_URI}/images/jammy-jellyfish-wallpaper.jpg`} alt="Ubuntu folder" />
        </PreviewImg>
        <div className="content">
          <div className="content-title">
            <h3>Title</h3>
            <p>Subtitle</p>
          </div>
          <div className="content-techs">
            <p>Technologies</p>
          </div>
          <div className="content-links">
            <p>Github repo</p>
            <p>Go to page ??</p>
          </div>
        </div>
      </CardContainer>
    </RelativeContainer>
  )
}
