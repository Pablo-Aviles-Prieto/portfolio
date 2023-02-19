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
  /* --card-top: ${({ isExpanded, projectTitle, amountOfTopPixels }) =>
    isExpanded[projectTitle] ? '50px' : `${amountOfTopPixels}px`}; */
  --card-top: ${({ amountOfTopPixels }) => `${amountOfTopPixels}px`};

  z-index: ${({ isExpanded, projectTitle }) => (isExpanded[projectTitle] ? '3' : '2')};
  position: fixed;
  left: ${({ isExpanded, projectTitle }) => (isExpanded[projectTitle] ? 'calc(50% - (120% / 2))' : '0')};
  top: ${({ isExpanded, projectTitle, amountOfTopPixels }) =>
    isExpanded[projectTitle] ? '50px' : `${amountOfTopPixels}px`};
  /* top: 50px; */
  width: ${({ isExpanded, projectTitle }) => (isExpanded[projectTitle] ? '120%' : '100%')};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 2px 4px 10px rgb(0 0 0 / 15%);
  transition: all 0.5s ease-out, z-index 0.1s ease-in;
  &.expanded {
    animation: animationBottomTop 0.5s forwards, positionAbsoluteToFixed 0.5s forwards;
  }
  &.not-expanded {
    animation: animationTopBottom 0.5s forwards, positionFixedToAbsolute 0.5s forwards;
  }
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
  @keyframes animationTopBottom {
    0% {
      top: 50px;
    }
    49.9% {
      top: -600px;
    }
    50% {
      top: calc(var(--card-top) + 1300px);
    }
    100% {
      top: var(--card-top);
    }
  }
  @keyframes positionAbsoluteToFixed {
    0% {
      position: absolute;
    }
    49.9% {
      position: absolute;
    }
    50% {
      position: fixed;
    }
    100% {
      position: fixed;
    }
  }
  @keyframes animationBottomTop {
    0% {
      top: var(--card-top);
    }
    49.9% {
      top: calc(var(--card-top) + 900px);
    }
    50% {
      top: -600px;
    }
    100% {
      top: 50px;
    }
  }
  @keyframes positionFixedToAbsolute {
    0% {
      position: fixed;
    }
    49.9% {
      position: fixed;
    }
    50% {
      position: absolute;
    }
    100% {
      position: absolute;
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
  lastCard?: boolean
  setIsExpanded: React.Dispatch<React.SetStateAction<IIsExpandedProject>>
}

const PUBLIC_URI = process.env.PUBLIC_URL || ''
const contentHeight = 125
const imageHeight = 200
const marginBetweenCards = 20

export const ProjectCard: React.FC<IProps> = ({
  renderIndex,
  isExpanded,
  projectTitle,
  lastCard,
  setIsExpanded
}: IProps) => {
  const switchIsExpanded = ({ title }: { title: keyof IIsExpandedProject }) => {
    const newState = { ...isExpandedProject }
    newState[title] = true
    setIsExpanded(newState)
  }

  const amountOfTopPixels: number = useMemo(() => {
    return renderIndex * (contentHeight + imageHeight + marginBetweenCards)
  }, [renderIndex])

  const lastSeparatorTopPixels: number = useMemo(() => {
    return amountOfTopPixels + (contentHeight + imageHeight + marginBetweenCards)
  }, [amountOfTopPixels])

  return (
    <>
      <CardContainer
        className={isExpanded[projectTitle] ? 'expanded' : 'not-expanded'}
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
      {lastCard && (
        <div style={{ height: '1px', width: '100%', position: 'absolute', top: `${lastSeparatorTopPixels}px` }} />
      )}
    </>
  )
}

ProjectCard.defaultProps = {
  lastCard: false
}
