import styled from 'styled-components'
import { ImgContainer } from '../Styles'

const ProfileContainer = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`

const PhotoContainer = styled(ImgContainer)<{ introState: boolean }>`
  opacity: ${({ introState }) => (introState ? 0 : 1)};
  transition: opacity 2s ease-in;
  border-radius: 100%;
`

const DetailsContainer = styled.div<{ introState: boolean }>`
  position: relative;
  width: 400px;
  height: 250px;
  font-family: 'Poppins';
  h1 {
    color: ${({ theme }) => theme.emphasizeColor};
    font-size: 53px;
    line-height: 37px;
    position: absolute;
    top: ${({ introState }) => (introState ? '-300px' : '20px')};
    transition: top 1.2s ease-in;
  }
  .description-block {
    position: absolute;
    max-width: 380px;
    bottom: 35px;
    right: ${({ introState }) => (introState ? '-1700px' : '20px')};
    transition: right 1.2s ease-in;
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
    top: ${({ introState }) => (introState ? '-300px' : '62px')};
    animation: ${({ introState }) => (introState ? 'none' : `bounce-in-top 2.6s both`)};
  }
  .developer-animation span:nth-child(even) {
    display: inline-block;
    animation: ${({ introState }) => (introState ? 'none' : `rotate-letters 2.8s ease-in-out`)};
    animation-fill-mode: forwards;
  }

  @keyframes bounce-in-top {
    0% {
      transform: translateY(-500px);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    50% {
      transform: translateY(-500px);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    60% {
      transform: translateY(0);
      animation-timing-function: ease-out;
      opacity: 1;
    }
    66% {
      transform: translateY(-65px);
      animation-timing-function: ease-in;
    }
    76% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    83% {
      transform: translateY(-20px);
      animation-timing-function: ease-in;
    }
    90% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    95% {
      transform: translateY(-8px);
      animation-timing-function: ease-in;
    }
    100% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
  }

  @keyframes rotate-letters {
    0% {
      transform: rotate(0);
    }
    98% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(20deg);
    }
  }
`

const PUBLIC_URI = process.env.PUBLIC_URL || ''

type IProps = {
  introState: boolean
}

export const ProfileHeader: React.FC<IProps> = ({ introState }: IProps) => {
  return (
    <ProfileContainer>
      <PhotoContainer introState={introState} width="250px" height="250px">
        <img src={`${PUBLIC_URI}/images/profile-photo.jpg`} alt="Pablo Avilés Prieto" />
      </PhotoContainer>
      <DetailsContainer introState={introState}>
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
          <p>
            🤗 Hi there, <span className="emphasize-text">I&apos;m Pablo Avilés</span>, Tech enthusiast.
          </p>
          <p>Been working in the IT world for more than 4 years. Now completely focused on web development.</p>
        </div>
      </DetailsContainer>
    </ProfileContainer>
  )
}
