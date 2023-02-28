import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { ImgContainer } from '../Styles'

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`

const PhotoContainer = styled(ImgContainer)`
  border-radius: 100%;
`

const DetailsContainer = styled.div`
  position: relative;
  width: 400px;
  height: 250px;
  font-family: 'Poppins';
  h1 {
    color: ${({ theme }) => theme.emphasizeColor};
    font-size: 53px;
    line-height: 37px;
    position: absolute;
    top: 20px;
  }
  .description-block {
    position: absolute;
    max-width: 380px;
    bottom: 35px;
    right: 20px;
    .emphasize-text {
      color: ${({ theme }) => theme.emphasizeColor};
    }
    p {
      text-align: justify;
    }
  }
  .developer-animation {
    display: inline;
    color: ${({ theme }) => theme.emphasizeColor};
    font-size: 53px;
    line-height: 37px;
    position: absolute;
    top: 62px;
  }
  .developer-animation span:nth-child(even) {
    display: inline-block;
    transform: rotate(20deg);
  }
`

const PUBLIC_URI = process.env.PUBLIC_URL || ''

export const AboutmeHeader: React.FC = () => {
  const { t, i18n } = useTranslation('aboutMe')

  return (
    <ProfileContainer>
      <PhotoContainer width="250px" height="250px">
        <img src={`${PUBLIC_URI}/images/profile-photo2.jpeg`} alt="Pablo Avilés Prieto" />
      </PhotoContainer>
      <DetailsContainer>
        <h1>Full stack web</h1>
        <h1 className="developer-animation">
          <span>d</span>
          <span>e</span>
          <span>v</span>
          <span>e</span>
          <span>l</span>
          <span>o</span>
          <span>p</span>
          <span>e</span>
          <span>r</span>
        </h1>
        <div className="description-block">
          <p dangerouslySetInnerHTML={{ __html: t('title') }} />
          <p>{t('titleDescription')}</p>
        </div>
      </DetailsContainer>
    </ProfileContainer>
  )
}
