import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { ImgContainer } from '../Styles'

const ContentContainer = styled.div`
  margin-top: 50px;
  p {
    text-align: justify;
  }

  .gaming-section {
    margin: 25px 0;
    display: flex;
    gap: 10px;
  }

  .footer-section {
    &-final {
      margin-top: 15px;
    }
  }

  .notation {
    display: inline-block;
    margin-top: 25px;
    color: ${({ theme }) => theme.greyPerma};
  }
`

const GamingImg = styled(ImgContainer)`
  img {
    filter: grayscale(50%);
  }
`

const PUBLIC_URI = process.env.PUBLIC_URL || ''

export const AboutmeContent: React.FC = () => {
  const { t } = useTranslation('aboutMe')

  return (
    <ContentContainer>
      <p dangerouslySetInnerHTML={{ __html: t('contentDescription') }} />
      <div className="gaming-section">
        <GamingImg width="90%" height="auto">
          <img src={`${PUBLIC_URI}/images/gaming.jpg`} alt="Myself competing on a gaming tournament" />
        </GamingImg>
        <p dangerouslySetInnerHTML={{ __html: t('contentGaming') }} />
      </div>
      <div className="footer-section">
        <p dangerouslySetInnerHTML={{ __html: t('contentDev') }} />
        <p className="footer-section-final">
          {t('contentFinalPart1')} <span className="emphasize-content">geek</span> {t('contentFinalPart2')}
        </p>
      </div>
    </ContentContainer>
  )
}
