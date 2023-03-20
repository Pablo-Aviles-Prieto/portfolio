import { FC, useCallback } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { IOpenFile } from '../../interfaces'
import { getDayAndHourHelper } from '../../utils'
import { MalePerson, Computer, Chat, GithubRoundedHeader, LinkedinSquared, Light, Moon } from '../Icons'

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
  const { i18n } = useTranslation()
  const { t } = useTranslation('common')

  const changeLanguageHandler = (language: string) => {
    // eslint-disable-next-line no-void
    void i18n.changeLanguage(language)
  }

  const activityToRender: () => JSX.Element = useCallback(() => {
    if (openFile === 'profileInfo') {
      return (
        <div className="activities-info">
          <MalePerson width={18} height={18} />
          <p>{t('aboutMe')}</p>
        </div>
      )
    }
    if (openFile === 'projects') {
      return (
        <div className="activities-info">
          <Computer width={18} height={18} />
          <p>{t('prevWorks.projects')}</p>
        </div>
      )
    }
    if (openFile === 'contact') {
      return (
        <div className="activities-info">
          <Chat width={18} height={18} />
          <p>{t('contactMe')}</p>
        </div>
      )
    }
    return <div />
  }, [openFile])

  return (
    <ActionBarContainer>
      <div className="activities">
        <p>{t('activities')}</p>
        {activityToRender()}
      </div>
      <div className="time">{getDayAndHourHelper()}</div>
      <div className="icons">
        <div className="icons-networks">
          <GithubRoundedHeader
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
          <button
            style={{ height: '18px' }}
            type="button"
            onClick={() => {
              if (i18n.language === 'en') {
                changeLanguageHandler('es')
                return
              }
              changeLanguageHandler('en')
            }}
          >
            {t('language')}: {i18n.language}
          </button>
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
