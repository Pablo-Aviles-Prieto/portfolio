import { FC, useCallback } from 'react'
import styled from 'styled-components'
import { IOpenFile } from '../../interfaces'
import { getDayAndHourHelper } from '../../utils'
import { MalePerson, Computer, Chat, GithubRounded, LinkedinSquared, Light, Moon } from '../Icons'

const ActionBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: black;
  color: #cfcfcf;
  padding: 6px 15px;
  overflow: hidden;
  user-select: none;
  cursor: default;
  .activities,
  .icons {
    min-width: 300px;
  }
  .activities {
    display: flex;
    align-items: center;
    gap: 15px;
    &-info {
      display: flex;
      align-items: center;
      gap: 3px;
      svg {
        color: ${({ theme }) => theme.lightEmphasize};
      }
    }
  }
  .time {
    &:hover {
      color: white;
    }
  }
  .icons {
    display: flex;
    align-items: center;
    gap: 30px;
    justify-content: end;
    svg {
      cursor: pointer;
      &:hover {
        transform: scale(1.15);
      }
    }
    &-networks,
    &-page {
      display: flex;
      gap: 10px;
    }
  }
`

type IProps = {
  openFile: IOpenFile
  lightTheme: boolean
  switchThemeHandler: () => void
}

export const ActionBar: FC<IProps> = ({ openFile, lightTheme, switchThemeHandler }) => {
  const activityToRender: () => JSX.Element = useCallback(() => {
    if (openFile === 'profileInfo') {
      return (
        <div className="activities-info">
          <MalePerson width={18} height={18} />
          <p>About me</p>
        </div>
      )
    }
    if (openFile === 'projects') {
      return (
        <div className="activities-info">
          <Computer width={18} height={18} />
          <p>Previous projects</p>
        </div>
      )
    }
    if (openFile === 'contact') {
      return (
        <div className="activities-info">
          <Chat width={18} height={18} />
          <p>Contact me</p>
        </div>
      )
    }
    return <div />
  }, [openFile])

  return (
    <ActionBarContainer>
      <div className="activities">
        <p>Activities</p>
        {activityToRender()}
      </div>
      <div className="time">{getDayAndHourHelper()}</div>
      <div className="icons">
        <div className="icons-networks">
          <GithubRounded
            onClick={() => window.open('https://github.com/Pablo-Aviles-Prieto', '_blank')}
            width={18}
            height={18}
          />
          <LinkedinSquared
            onClick={() => window.open('https://www.linkedin.com/in/pablo-aviles-prieto/?locale=en_US', '_blank')}
            width={18}
            height={18}
          />
        </div>
        <div className="icons-page">
          {lightTheme ? (
            <Moon width={18} height={18} onClick={switchThemeHandler} />
          ) : (
            <Light width={18} height={18} onClick={switchThemeHandler} />
          )}
        </div>
      </div>
    </ActionBarContainer>
  )
}
