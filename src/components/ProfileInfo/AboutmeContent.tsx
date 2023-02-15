import styled from 'styled-components'
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
  return (
    <ContentContainer>
      <p>
        Since <span className="emphasize-content">early age</span> I&apos;ve been curious with all that surrounds the
        <span className="emphasize-content"> computer world</span>, from trying to understand how the hardware
        interacted with each other until understanding how{' '}
        <span className="emphasize-content">systems communicated</span> through the{' '}
        <span className="emphasize-content">web</span> and different methods.
      </p>
      <div className="gaming-section">
        <GamingImg width="90%" height="auto">
          <img src={`${PUBLIC_URI}/images/gaming.jpg`} alt="Myself competing on a gaming tournament" />
        </GamingImg>
        <p>
          After graduate as Higher Technician in Computer Network Systems Management and{' '}
          <span className="emphasize-content">work</span> for some years as{' '}
          <span className="emphasize-content">IT Support Specialist</span>, I could work and live from my passion and
          hobbie, competing in <span className="emphasize-content">esports</span> at the top Spanish and European level.
          <span className="notation">Good old days 😊</span>
        </p>
      </div>
      <div className="footer-section">
        <p>
          <span className="emphasize-content">Now</span>, after more than a year into{' '}
          <span className="emphasize-content">web development</span>. I thrive to be better{' '}
          <span className="emphasize-content">working hard</span> day after day 💪 with all the{' '}
          <span className="emphasize-content">passion</span> and <span className="emphasize-content">motivation</span> I
          have for the dev world.
        </p>
        <p className="footer-section-final">
          I guess I am and always have been a <span className="emphasize-content">geek</span> for technologies 🤓
        </p>
      </div>
    </ContentContainer>
  )
}
