import { FC } from 'react'
import styled from 'styled-components'
import { ImgContainer } from '../Styles'
import { DownRightArrow, GithubRounded, Web } from '../Icons'
import { technologiesSVG } from '../../utils'
import { technologies } from '../../enums/technologies'
import { IIsExpandedProject, IPreviousProjectObj } from '../../interfaces'

const CardContainer = styled.div<{
  projectTitle: keyof IIsExpandedProject
}>`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 2px 4px 10px rgb(0 0 0 / 25%);
  transition: all 0.5s ease-out, z-index 0.1s ease-in;
  margin-bottom: 40px;
  &:hover {
    box-shadow: 2px 4px 10px rgb(0 0 0 / 45%);
  }
  .content {
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.mainBground};
    height: auto;
    &-title {
      margin-bottom: 30px;
      margin-top: 20px;
      text-align: justify;
      h3 {
        font-size: 36px;
        color: ${({ theme }) => theme.emphasizeColor};
      }
      p {
        padding-left: 35px;
        color: ${({ theme }) => theme.greyLighter};
        font-size: 17px;
      }
    }
    &-techs {
      display: flex;
      align-items: center;
      gap: 10px;

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
        color: ${({ theme }) => theme.mainColor};
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
        padding-left: 35px;
        &-line {
          position: relative;
          svg {
            position: absolute;
            top: 2px;
            left: 0px;
            color: ${({ theme }) => theme.emphasizeColor};
          }
        }
      }
    }
    &-links {
      font-size: 18px;
      &-github,
      &-webpage {
        color: ${({ theme }) => theme.mainColor};
        display: flex;
        align-items: center;
        gap: 5px;
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
    &__grouped {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
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

const ImgPreview = styled(ImgContainer)`
  transition: all 0.5s ease-out;
  border-radius: 0px;
`

interface IProps {
  projectTitle: keyof IIsExpandedProject
  project: IPreviousProjectObj
}

export const ProjectCard: FC<IProps> = ({ projectTitle, project }) => {
  const technologiesSVGRender = (projectTechs: Array<technologies>) => {
    const allTechs = technologiesSVG
    return projectTechs.map(projTechName => {
      const selectedTech = allTechs.find(tech => tech.title === projTechName)
      return selectedTech!.SVG
    })
  }

  return (
    <CardContainer projectTitle={projectTitle}>
      <ImgPreview className="img-container" width="100%" height="250px">
        <img src={project.images[0].path} alt={project.images[0].description} />
      </ImgPreview>
      <div className="content">
        <div className="content-links content__grouped">
          <a
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
            className="content-links-github"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubRounded width={18} height={18} />
            <span>Github repo</span>
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
              <span>Project demo</span>
            </a>
          )}
          <div className="content-techs">
            {technologiesSVGRender(project.technologies).map(TechComponent => (
              <div key={TechComponent.name} className="tech-container">
                <TechComponent width={25} height={25} />
                <p className="tooltip">{TechComponent.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="content-title">
          <h3>{project.titleText}</h3>
          <p>{project.subtitle}</p>
        </div>
        <div className="content-features">
          <h3>Features of the project:</h3>
          <div className="content-features-block">
            {project.features.map(feature => (
              <div className="content-features-block-line" key={feature}>
                <DownRightArrow width={20} height={20} />
                <p>
                  <span style={{ width: '25px', display: 'inline-block' }} />
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CardContainer>
  )
}
