import { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { BigArrowDown } from '../Icons'

type ICloseOpen = 'close' | 'open'

type IOpenedSectionState = {
  oxygen: ICloseOpen
  react: ICloseOpen
  freeCodeCamp: ICloseOpen
  fullStack: ICloseOpen
  fp2: ICloseOpen
}

const HeaderContainer = styled.div`
  text-align: center;
  h1 {
    color: ${({ theme }) => theme.emphasizeColor};
    font-size: 45px;
  }
`

const ContentContainer = styled.div<{ openedSection: IOpenedSectionState }>`
  margin-top: 20px;
  .block {
    margin: 40px 0;
    overflow: hidden;
    &__txt-right {
      text-align: right;
    }
    &-header {
      display: inline-flex;
      align-items: center;
      gap: 20px;
      svg {
        color: ${({ theme }) => theme.emphasizeColor};
      }
      .arrow-oxygen {
        transition: transform 0.5s ease;
        transform: ${({ openedSection }) => (openedSection.oxygen === 'close' ? 'rotate(0deg)' : 'rotate(180deg)')};
      }
      .arrow-react {
        transition: transform 0.5s ease;
        transform: ${({ openedSection }) => (openedSection.react === 'close' ? 'rotate(0deg)' : 'rotate(180deg)')};
      }
      .arrow-freeCodeCamp {
        transition: transform 0.5s ease;
        transform: ${({ openedSection }) =>
          openedSection.freeCodeCamp === 'close' ? 'rotate(0deg)' : 'rotate(180deg)'};
      }
      .arrow-fullStack {
        transition: transform 0.5s ease;
        transform: ${({ openedSection }) => (openedSection.fullStack === 'close' ? 'rotate(0deg)' : 'rotate(180deg)')};
      }
      .arrow-fp2 {
        transition: transform 0.5s ease;
        transform: ${({ openedSection }) => (openedSection.fp2 === 'close' ? 'rotate(0deg)' : 'rotate(180deg)')};
      }
      &:hover {
        cursor: pointer;
        svg {
          fill: ${({ theme }) => theme.emphasizeColor};
        }
      }
      .subtitle {
        font-size: 14px;
        span {
          margin-left: 10px;
        }
      }
      .certificate-block {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        a {
          font-weight: 700;
          text-decoration: none;
          color: ${({ theme }) => theme.mainColor};
          &:hover {
            color: ${({ theme }) => theme.darkEmphasize};
          }
        }
      }
    }
    &-content {
      margin-top: 10px;
      margin-bottom: 30px;
      font-size: 15px;
    }
    .content__oxygen {
      transition: all 0.5s;
      height: ${({ openedSection }) => (openedSection.oxygen === 'close' ? '0' : '100px')};
      margin-top: ${({ openedSection }) => (openedSection.oxygen === 'close' ? '40px' : '10px')};
      margin-bottom: ${({ openedSection }) => (openedSection.oxygen === 'close' ? '0' : '40px')};
    }
    .content__react {
      transition: all 0.5s;
      height: ${({ openedSection }) => (openedSection.react === 'close' ? '0' : '240px')};
      margin-top: ${({ openedSection }) => (openedSection.react === 'close' ? '40px' : '10px')};
      margin-bottom: ${({ openedSection }) => (openedSection.react === 'close' ? '0' : '40px')};
    }
    .content__freeCodeCamp {
      transition: all 0.5s;
      height: ${({ openedSection }) => (openedSection.freeCodeCamp === 'close' ? '0' : '60px')};
      margin-top: ${({ openedSection }) => (openedSection.freeCodeCamp === 'close' ? '40px' : '10px')};
      margin-bottom: ${({ openedSection }) => (openedSection.freeCodeCamp === 'close' ? '0' : '40px')};
    }
    .content__fullStack {
      transition: all 0.5s;
      height: ${({ openedSection }) => (openedSection.fullStack === 'close' ? '0' : '170px')};
      margin-top: ${({ openedSection }) => (openedSection.fullStack === 'close' ? '40px' : '10px')};
      margin-bottom: ${({ openedSection }) => (openedSection.fullStack === 'close' ? '0' : '40px')};
    }
    .content__fp2 {
      transition: all 0.5s;
      height: ${({ openedSection }) => (openedSection.fp2 === 'close' ? '0' : '125px')};
      margin-top: ${({ openedSection }) => (openedSection.fp2 === 'close' ? '30px' : '10px')};
      margin-bottom: ${({ openedSection }) => (openedSection.fp2 === 'close' ? '0' : '30px')};
    }
    &__separator {
      width: 70%;
      border-bottom: 1px solid;
      border-color: ${({ theme }) => theme.darkEmphasize};
      margin-left: calc(50% - (70% / 2));
    }
    &:first-of-type {
      margin-top: 0;
    }
    &:last-of-type {
      margin-bottom: 10px;
      .block__separator {
        display: none;
      }
    }
  }
  .emphasize-content {
    color: ${({ theme }) => theme.darkEmphasize};
  }
  .emphasize-grey {
    color: ${({ theme }) => theme.greyLighter};
  }
  .emphasize-dark-grey {
    color: ${({ theme }) => theme.greyPerma};
  }
`

const openedSectionState: IOpenedSectionState = {
  oxygen: 'close',
  react: 'close',
  freeCodeCamp: 'close',
  fullStack: 'close',
  fp2: 'close'
}

export const Education: React.FC = () => {
  const [openedSection, setOpenedSection] = useState<IOpenedSectionState>(openedSectionState)
  const { t } = useTranslation('education')
  const { t: tDictionary } = useTranslation('dictionary')

  const switchSectionState = ({ prop }: { prop: keyof IOpenedSectionState }) => {
    setOpenedSection(prevState => {
      const prevValue = prevState[prop]
      return { ...prevState, [prop]: prevValue === 'close' ? 'open' : 'close' }
    })
  }

  return (
    <>
      <HeaderContainer>
        <h1>{t('title')}</h1>
      </HeaderContainer>
      <ContentContainer openedSection={openedSection}>
        <div className="block">
          <div className="block__txt-right">
            <div className="block-header" onClick={() => switchSectionState({ prop: 'oxygen' })}>
              <div className="block-header-title">
                <h3 className="emphasize-content">OXYGEN training</h3>
                <p className="emphasize-grey subtitle">
                  <span>OXYGEN</span>
                  <span className="emphasize-dark-grey">Sep 2022</span>
                </p>
              </div>
              <BigArrowDown className="arrow-oxygen" width={30} height={30} />
            </div>
          </div>
          <div className="block-content content__oxygen">
            <p>{t('oxygenContent1')}</p>
            <p>{t('oxygenContent2')}</p>
            <p>{t('oxygenContent3')}</p>
            <p>{t('oxygenContent4')}</p>
          </div>
          <div className="block__separator" />
        </div>
        <div className="block">
          <div className="block__txt-right">
            <div className="block-header" onClick={() => switchSectionState({ prop: 'react' })}>
              <div className="block-header-title">
                <h3 className="emphasize-content">{t('reactTitle')} (49H)</h3>
                <div className="certificate-block">
                  <a
                    href="https://www.udemy.com/certificate/UC-886c1d14-97a6-4638-8a27-089b481d3c12/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="emphasize-content"
                    onClick={e => e.stopPropagation()}
                  >
                    {tDictionary('certificate')}
                  </a>
                  <p className="emphasize-grey subtitle">
                    <span className="organization">Udemy</span>
                    <span className="emphasize-dark-grey datetime">Sep 2022</span>
                  </p>
                </div>
              </div>
              <BigArrowDown className="arrow-react" width={30} height={30} />
            </div>
          </div>
          <div className="block-content content__react">
            <p>· {t('reactContent1')}</p>
            <p>· {t('reactContent2')}</p>
            <p>· {t('reactContent3')}</p>
            <p>· {t('reactContent4')}</p>
            <p>· {t('reactContent5')}</p>
            <p>· {t('reactContent6')}</p>
            <p>· {t('reactContent7')}</p>
          </div>
          <div className="block__separator" />
        </div>
        <div className="block">
          <div className="block__txt-right">
            <div className="block-header" onClick={() => switchSectionState({ prop: 'freeCodeCamp' })}>
              <div className="block-header-title">
                <h3 className="emphasize-content">{t('freeCodeTitle')} (300H)</h3>
                <div className="certificate-block">
                  <a
                    // eslint-disable-next-line max-len
                    href="https://www.freecodecamp.org/certification/Pablo-Aviles/javascript-algorithms-and-data-structures"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="emphasize-content"
                    onClick={e => e.stopPropagation()}
                  >
                    {tDictionary('certificate')}
                  </a>
                  <p className="emphasize-grey subtitle">
                    <span className="organization">freeCodeCamp</span>
                    <span className="emphasize-dark-grey datetime">{tDictionary('aug')} 2022</span>
                  </p>
                </div>
              </div>
              <BigArrowDown className="arrow-freeCodeCamp" width={30} height={30} />
            </div>
          </div>
          <div className="block-content content__freeCodeCamp">
            <p style={{ textAlign: 'justify' }}>· {t('freeCodeContent')}</p>
          </div>
          <div className="block__separator" />
        </div>
        <div className="block">
          <div className="block__txt-right">
            <div className="block-header" onClick={() => switchSectionState({ prop: 'fullStack' })}>
              <div className="block-header-title">
                <h3 className="emphasize-content">{t('fullStackUdemyTitle')} (80H)</h3>
                <div className="certificate-block">
                  <a
                    href="https://www.udemy.com/certificate/UC-9d849ce7-0aea-4172-b78d-ea3f0ae81ed9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="emphasize-content"
                    onClick={e => e.stopPropagation()}
                  >
                    {tDictionary('certificate')}
                  </a>
                  <p className="emphasize-grey subtitle">
                    <span className="organization">Udemy</span>
                    <span className="emphasize-dark-grey datetime">{tDictionary('july')} 2022</span>
                  </p>
                </div>
              </div>
              <BigArrowDown className="arrow-fullStack" width={30} height={30} />
            </div>
          </div>
          <div className="block-content content__fullStack">
            <p>· {t('fullStackUdemyContent1')}</p>
            <p>· {t('fullStackUdemyContent2')}</p>
            <p>· {t('fullStackUdemyContent3')}</p>
            <p>· {t('fullStackUdemyContent4')}</p>
            <p>· {t('fullStackUdemyContent5')}</p>
          </div>
          <div className="block__separator" />
        </div>
        <div className="block">
          <div className="block__txt-right">
            <div className="block-header" onClick={() => switchSectionState({ prop: 'fp2' })}>
              <div className="block-header-title">
                <h3 className="emphasize-content">{t('fp2Title')} (FPII)</h3>
                <p className="emphasize-grey subtitle">
                  <span className="organization">IES Fernando Wirtz</span>
                  <span className="emphasize-dark-grey datetime">2012-2014</span>
                </p>
              </div>
              <BigArrowDown className="arrow-fp2" width={30} height={30} />
            </div>
          </div>
          <div className="block-content content__fp2">
            <p>· {t('fp2Content1')}</p>
            <p>· {t('fp2Content2')} (IoT)</p>
            <p>· {t('fp2Content3')}</p>
            <p>· {t('fp2Content4')}</p>
            <p>· {t('fp2Content5')}</p>
          </div>
          <div className="block__separator" />
        </div>
      </ContentContainer>
    </>
  )
}
