import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const HeaderContainer = styled.div`
  text-align: center;
  h1 {
    color: ${({ theme }) => theme.emphasizeColor};
    font-size: 45px;
  }
`

const ContentContainer = styled.div`
  color: ${({ theme }) => theme.greyLighter};
  text-align: justify;
  .block {
    display: flex;
    &-left,
    &-right {
      padding-bottom: 35px;
    }
    &-left {
      border-right: 2px solid;
      border-color: ${({ theme }) => theme.experienceBorder};
      width: 210px;
      padding-right: 20px;
      text-align: right;
      &-period {
        color: ${({ theme }) => theme.greyPerma};
      }
    }
    &-right {
      padding-left: 20px;
      max-width: 470px;
      font-size: 15px;
      &-title {
        color: ${({ theme }) => theme.lightEmphasize};
        font-weight: 700;
        font-size: 18px;
      }
    }
    &:first-of-type {
      padding-top: 20px;
      text-align: left;
    }
    &:last-of-type {
      .block {
        &-left,
        &-right {
          padding-bottom: 0;
        }
      }
    }
  }
  .emphasize-white {
    color: ${({ theme }) => theme.mainColor};
  }
  .identation-block {
    display: flex;
    gap: 4px;
    &-symbol {
      color: ${({ theme }) => theme.mainColor};
      padding-left: 16px;
    }
  }
`

export const Experience: React.FC = () => {
  const { t } = useTranslation('experience')
  const { t: tDictionary } = useTranslation('dictionary')

  return (
    <>
      <HeaderContainer>
        <h1>{t('title')}</h1>
      </HeaderContainer>
      <ContentContainer>
        <div className="block">
          <div className="block-left">
            <p className="emphasize-content">Flat 101</p>
            <p>
              <span className="block-left-period">Mar 2023 - {tDictionary('now')}</span>
            </p>
          </div>
          <div className="block-right">
            <p className="block-right-title">{t('flatTitle')}</p>
            <p>{t('flatContent')}</p>
          </div>
        </div>
        <div className="block">
          <div className="block-left">
            <p className="emphasize-content">OXYGEN</p>
            <p>
              <span className="block-left-period">Sep 2022 - Feb 2023</span>
            </p>
          </div>
          <div className="block-right">
            <p className="block-right-title">{t('oxygenTitle')}</p>
            <p>{t('oxygenContent1')}</p>
            <p>{t('oxygenContent2')}</p>
            <p className="emphasize-white identation-block">
              <span className="identation-block-symbol">+</span> SPA: #ReactJS, #TypeScript, #JavaScript,
              #Styled-Componentes, #Jest, #Cypress
            </p>{' '}
            <p className="emphasize-white identation-block">
              <span className="identation-block-symbol">+</span> REST API: #NodeJS, #ExrpressJS, #TypeScript,
              #JavaScript, #MongoDB, #JWT, #Jest, #SuperTest
            </p>
            <p>{t('oxygenContent3')}</p>
            <div className="identation-block">
              <span className="identation-block-symbol">+</span>
              <p dangerouslySetInnerHTML={{ __html: t('oxygenContent4') }} />
            </div>
          </div>
        </div>
        <div className="block">
          <div className="block-left">
            <p className="emphasize-content">Indra</p>
            <p>
              <span className="block-left-period">Sep 2019 - Sep 2022</span>
            </p>
          </div>
          <div className="block-right">
            <p className="block-right-title">{t('indraTitle')}</p>
            <p>{t('indraContent')}</p>
          </div>
        </div>
        <div className="block">
          <div className="block-left">
            <p className="emphasize-content">{t('esportsJob')}</p>
            <p>
              <span className="block-left-period">Mar 2016 - {tDictionary('june')} 2019</span>
            </p>
          </div>
          <div className="block-right">
            <p className="block-right-title">{t('esportsTitle')}</p>
            <p>{t('esportsContent1')}</p>
          </div>
        </div>
        <div className="block">
          <div className="block-left">
            <p className="emphasize-content">Convergys</p>
            <p>
              <span className="block-left-period">Sep 2015 - {tDictionary('june')} 2016</span>
            </p>
          </div>
          <div className="block-right">
            <p className="block-right-title">{t('convergysTitle')}</p>
            <p>{t('convergysContent')}</p>
          </div>
        </div>
      </ContentContainer>
    </>
  )
}
