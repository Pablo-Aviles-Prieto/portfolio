import { useMemo } from 'react'
import styled from 'styled-components'
import { isExpandedProject } from '../../utils'
import { ImgContainer } from '../Styles'
import { IIsExpandedProject } from '../../interfaces'

const CardContainer = styled.div<{
  isExpanded: IIsExpandedProject
  projectTitle: keyof IIsExpandedProject
  contentHeight: number
  amountOfTopPixels: number
}>`
  z-index: ${({ isExpanded, projectTitle }) => (isExpanded[projectTitle] ? '3' : '2')};
  position: ${({ isExpanded, projectTitle }) => (isExpanded[projectTitle] ? 'fixed' : 'absolute')};
  left: ${({ isExpanded, projectTitle }) => (isExpanded[projectTitle] ? 'calc(50% - (120% / 2))' : '0')};
  top: ${({ isExpanded, projectTitle, amountOfTopPixels }) =>
    isExpanded[projectTitle] ? '50px' : `${amountOfTopPixels}px`};
  width: ${({ isExpanded, projectTitle }) => (isExpanded[projectTitle] ? '120%' : '100%')};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 2px 4px 10px rgb(0 0 0 / 15%);
  transition: all 0.5s ease-out, z-index 0.1s ease-in;
  &:hover {
    cursor: ${({ isExpanded, projectTitle }) => (isExpanded[projectTitle] ? 'cursor' : 'pointer')};
    box-shadow: 2px 4px 10px rgb(0 0 0 / 40%);
  }
  .content {
    padding: 10px;
    background-color: ${({ theme }) => theme.mainBground};
    height: ${({ isExpanded, projectTitle }) => (isExpanded[projectTitle] ? `${contentHeight}px` : 'auto')};
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

const PreviewImg = styled(ImgContainer)`
  border-radius: 0px;
  transition: all 0.5s ease-out;
`

interface IProps {
  renderIndex: number
  isExpanded: IIsExpandedProject
  projectTitle: keyof IIsExpandedProject
  setIsExpanded: React.Dispatch<React.SetStateAction<IIsExpandedProject>>
}

const PUBLIC_URI = process.env.PUBLIC_URL || ''
const contentHeight = 125
const imageHeight = 200
const marginBetweenCards = 20

export const ProjectCard: React.FC<IProps> = ({ renderIndex, isExpanded, projectTitle, setIsExpanded }: IProps) => {
  const switchIsExpanded = ({ title }: { title: keyof IIsExpandedProject }) => {
    const newState = { ...isExpandedProject }
    newState[title] = true
    setIsExpanded(newState)
  }

  const amountOfTopPixels: number = useMemo(() => {
    return renderIndex * (contentHeight + imageHeight + marginBetweenCards)
  }, [renderIndex])

  return (
    <CardContainer
      isExpanded={isExpanded}
      projectTitle={projectTitle}
      contentHeight={contentHeight}
      amountOfTopPixels={amountOfTopPixels}
      onClick={() => switchIsExpanded({ title: projectTitle })}
    >
      <PreviewImg width="100%" height={isExpanded[projectTitle] ? '350px' : `${imageHeight}px`}>
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
  )
}
