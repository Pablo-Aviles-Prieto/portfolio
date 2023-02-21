import { useMemo, Fragment } from 'react'
import styled from 'styled-components'
import { isExpandedProject, technologiesSVG } from '../../utils'
import { ImgContainer } from '../Styles'
import { SlideContainer } from './SlideContainer'
import { technologies } from '../../enums/technologies'
import { GithubRounded, Web } from '../Icons'
import { IIsExpandedProject, IPreviousProjectObj } from '../../interfaces'

const CardContainer = styled.div<{
  isExpanded: IIsExpandedProject
  projectTitle: keyof IIsExpandedProject
  contentHeight: number
  amountOfTopPixels: number
}>`
  --card-top: ${({ amountOfTopPixels }) => `${amountOfTopPixels}px`};

  z-index: ${({ isExpanded, projectTitle }) => (isExpanded[projectTitle] ? '3' : '2')};
  position: fixed;
  left: ${({ isExpanded, projectTitle }) => (isExpanded[projectTitle] ? 'calc(50% - (120% / 2))' : '0')};
  top: ${({ isExpanded, projectTitle, amountOfTopPixels }) =>
    isExpanded[projectTitle] ? '50px' : `${amountOfTopPixels}px`};
  width: ${({ isExpanded, projectTitle }) => (isExpanded[projectTitle] ? '120%' : '100%')};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 2px 4px 10px rgb(0 0 0 / 15%);
  transition: all 0.5s ease-out, z-index 0.1s ease-in;
  .img-container {
    cursor: ${({ isExpanded, projectTitle }) => (isExpanded[projectTitle] ? 'cursor' : 'pointer')};
  }
  &.expanded {
    animation: animationBottomTop 0.5s forwards, positionAbsoluteToFixed 0.5s forwards;
  }
  &.not-expanded {
    animation: animationTopBottom 0.5s forwards, positionFixedToAbsolute 0.5s forwards;
  }
  &:hover {
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
      gap: 10px;
      margin: 20px 0;
      padding: 0 20px;

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
    &-links {
      display: flex;
      align-items: end;
      justify-content: space-between;
      font-size: 16px;
      &-github,
      &-webpage {
        color: ${({ theme }) => theme.mainColor};
        display: flex;
        align-items: center;
        gap: 5px;
      }
      &-more-info {
        cursor: ${({ isExpanded, projectTitle }) => (isExpanded[projectTitle] ? 'cursor' : 'pointer')};
      }
      .links__block {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
      a,
      p {
        position: relative;
        text-decoration: none;
        span {
          color: ${({ theme }) => theme.lightEmphasize};
        }
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
      top: 0;
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
  project: IPreviousProjectObj
  lastCard?: boolean
  setIsExpanded: React.Dispatch<React.SetStateAction<IIsExpandedProject>>
}

const contentHeight = 190
const imageHeight = 250
const marginBetweenCards = 20

export const ProjectCard: React.FC<IProps> = ({
  renderIndex,
  isExpanded,
  projectTitle,
  project,
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
          <div className="content-links">
            <p className="content-links-more-info" onClick={() => switchIsExpanded({ title: projectTitle })}>
              💻 More info about the project
            </p>
            <div className="links__block">
              <a
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
                className="content-links-github"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubRounded width={18} height={18} />
                <span>Github repo 👀</span>
              </a>
              {project.webpage && (
                <a
                  className="content-links-webpage"
                  href={project.webpage}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
                >
                  <Web width={18} height={18} />
                  <span>Take a look to the project 👀</span>
                </a>
              )}
            </div>
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
