import { useMemo, FC } from 'react'
import styled from 'styled-components'
import { ContentLinksExpanded } from './ContentLinksExpanded'
import { ContentLinks } from './ContentLinks'
import { DownRightArrow, Close } from '../Icons'
import { isExpandedProject, technologiesSVG } from '../../utils'
import { ImgContainer } from '../Styles'
import { SlideContainer } from './SlideContainer'
import { technologies } from '../../enums/technologies'
import { IIsExpandedProject, IPreviousProjectObj } from '../../interfaces'

const CardContainer = styled.div<{
  isExpanded: IIsExpandedProject
  projectTitle: keyof IIsExpandedProject
  contentHeight: number
  amountOfTopPixels: number
}>`
  --card-top: ${({ amountOfTopPixels }) => `${amountOfTopPixels}px`};

  z-index: ${({ isExpanded, projectTitle }) => (isExpanded[projectTitle] ? '3' : '2')};
  background-color: ${({ theme }) => theme.blackBground};
  position: fixed;
  left: ${({ isExpanded, projectTitle }) => (isExpanded[projectTitle] ? 'calc(50% - (120% / 2))' : '0')};
  top: ${({ isExpanded, projectTitle, amountOfTopPixels }) =>
    isExpanded[projectTitle] ? '50px' : `${amountOfTopPixels}px`};
  width: ${({ isExpanded, projectTitle }) => (isExpanded[projectTitle] ? '120%' : '100%')};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 2px 4px 10px rgb(0 0 0 / 20%);
  transition: all 0.5s ease-out, z-index 0.1s ease-in;
  .img-container {
    cursor: ${({ isExpanded, projectTitle }) => (isExpanded[projectTitle] ? 'cursor' : 'pointer')};
  }
  &.expanded {
    animation: animationBottomTop 0.5s forwards, positionAbsoluteToFixed 0.5s forwards;
    overflow: auto;
  }
  &.not-expanded {
    animation: animationTopBottom 0.5s forwards, positionFixedToAbsolute 0.5s forwards;
  }
  &:hover {
    box-shadow: 2px 4px 10px rgb(204 204 204 / 5%);
  }
  .content {
    padding: ${({ isExpanded, projectTitle }) => (isExpanded[projectTitle] ? '10px 30px' : '10px 20px')};
    height: ${({ isExpanded, projectTitle }) => (isExpanded[projectTitle] ? 'auto' : `${contentHeight}px`)};
    height: auto;
    &-close {
      cursor: pointer;
      position: absolute;
      width: 35px;
      height: 35px;
      right: 10px;
      top: 10px;
      background-color: ${({ theme }) => theme.greyBground};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      &:hover {
        transform: scale(1.05);
        transition: transform 0.3s ease;
        svg {
          transform: scale(1.1);
          color: ${({ theme }) => theme.emphasizeColor};
          transition: transform 0.3s ease;
        }
      }
    }
    &-title {
      font-size: 17px;
      h3 {
        font-size: 32px;
        text-align: center;
        color: ${({ theme }) => theme.emphasizeColor};
      }
      p {
        color: ${({ theme }) => theme.greyLighter};
      }
    }
    &-techs {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: ${({ isExpanded, projectTitle }) => (isExpanded[projectTitle] ? '10px 0' : '20px 0 30px 0')};

      .tech-container {
        position: relative;
        width: 25px;
        height: 25px;
      }

      .tooltip {
        position: absolute;
        top: calc(100% + 5px);
        left: 50%;
        transform: translateX(-50%);
        background-color: ${({ theme }) => theme.blackBground};
        color: white;
        font-size: 14px;
        padding: 5px;
        border-radius: 5px;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s ease-in-out;
      }

      .tech-container:hover .tooltip {
        opacity: 1;
        pointer-events: auto;
      }
    }
    &-features {
      margin: 10px 0;
      h3 {
        font-size: 18px;
        font-weight: 400;
        color: ${({ theme }) => theme.emphasizeColor};
      }
      &-block {
        padding-left: 195px;
        &-line {
          display: flex;
          align-items: center;
          gap: 8px;
          svg {
            color: ${({ theme }) => theme.lightEmphasize};
          }
        }
      }
    }
    &-links {
      display: flex;
      align-items: end;
      justify-content: space-between;
      font-size: ${({ isExpanded, projectTitle }) => (isExpanded[projectTitle] ? '18px' : '16px')};
      &-github,
      &-webpage {
        color: ${({ theme }) => theme.mainColor};
        display: flex;
        align-items: center;
        gap: 5px;
      }
      &-more-info {
        cursor: ${({ isExpanded, projectTitle }) => (isExpanded[projectTitle] ? 'cursor' : 'pointer')};
        display: flex;
        align-items: center;
        gap: 5px;
      }
      .links__block {
        display: flex;
        flex-direction: column;
      }
      a,
      p {
        position: relative;
        text-decoration: none;
        &:hover {
          color: ${({ theme }) => theme.lightEmphasize};
        }
        &::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 0;
          height: 2px;
          background-color: ${({ theme }) => theme.emphasizeColor};
          border-radius: 30px;
          transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
        }
        &:hover::before {
          width: 100%;
          left: 0;
          font-weight: 700;
        }
      }
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
      max-height: auto;
    }
    49.9% {
      position: absolute;
    }
    50% {
      position: fixed;
      max-height: auto;
    }
    100% {
      position: fixed;
      max-height: 100%;
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
      top: 0;
    }
  }
  @keyframes positionFixedToAbsolute {
    0% {
      position: fixed;
      max-height: auto;
    }
    49.9% {
      position: fixed;
    }
    50% {
      position: absolute;
    }
    100% {
      position: absolute;
      max-height: auto;
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
  project: IPreviousProjectObj
  lastCard?: boolean
  setIsExpanded: React.Dispatch<React.SetStateAction<IIsExpandedProject>>
}

const contentHeight = 200
const imageHeight = 250
const marginBetweenCards = 20

export const ProjectCard: FC<IProps> = ({
  renderIndex,
  isExpanded,
  projectTitle,
  project,
  lastCard,
  setIsExpanded
}) => {
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

  const technologiesSVGRender = (projectTechs: Array<technologies>) => {
    const allTechs = technologiesSVG
    return projectTechs.map(projTechName => {
      const selectedTech = allTechs.find(tech => tech.title === projTechName)
      return selectedTech!.SVG
    })
  }

  return (
    <>
      <CardContainer
        className={isExpanded[projectTitle] ? 'expanded' : 'not-expanded'}
        isExpanded={isExpanded}
        projectTitle={projectTitle}
        contentHeight={contentHeight}
        amountOfTopPixels={amountOfTopPixels}
      >
        {isExpanded[projectTitle] ? (
          <SlideContainer projectImages={project.images} />
        ) : (
          <PreviewImg
            onClick={() => switchIsExpanded({ title: projectTitle })}
            className="img-container"
            width="100%"
            height={`${imageHeight}px`}
          >
            <img src={project.images[0].path} alt={project.images[0].description} />
          </PreviewImg>
        )}
        <div className="content">
          {isExpanded[projectTitle] && (
            <div className="content-close" onClick={() => setIsExpanded(isExpandedProject)}>
              <Close width={25} height={25} />
            </div>
          )}
          <div className="content-title">
            <h3>{project.titleText}</h3>
            <p>{project.subtitle}</p>
          </div>
          <div className="content-techs">
            {technologiesSVGRender(project.technologies).map(TechComponent => (
              <div key={TechComponent.name} className="tech-container">
                <TechComponent width={25} height={25} />
                <p className="tooltip">{TechComponent.name}</p>
              </div>
            ))}
          </div>
          {isExpanded[projectTitle] && (
            <div className="content-features">
              <h3>Features of the project:</h3>
              <div className="content-features-block">
                {project.features.map(feature => (
                  <div className="content-features-block-line" key={feature}>
                    <DownRightArrow width={20} height={20} />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {isExpanded[projectTitle] ? (
            <ContentLinksExpanded project={project} switchIsExpanded={switchIsExpanded} />
          ) : (
            <ContentLinks project={project} projectTitle={projectTitle} switchIsExpanded={switchIsExpanded} />
          )}
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
