import styled from 'styled-components'
import { ImgContainer } from '../Styles'

const ProfileContainer = styled.div`
  margin-top: 50px;
`

const PhotoContainer = styled(ImgContainer)<{ introState: boolean }>`
  opacity: ${({ introState }) => (introState ? 0 : 1)};
  transition: opacity 2s ease-in;
  margin: 0 auto;
  border-radius: 100%;
`

const PUBLIC_URI = process.env.PUBLIC_URL || ''

type IProps = {
  introState: boolean
}

export const ProfileHeader: React.FC<IProps> = ({ introState }: IProps) => {
  return (
    <ProfileContainer>
      <PhotoContainer introState={introState} width="300px" height="300px">
        <img src={`${PUBLIC_URI}/images/profile-photo.jpg`} alt="Pablo Avilés Prieto" />
      </PhotoContainer>
      <h3>Full stack web developer</h3>
      <p>Tech enthusiast </p>
    </ProfileContainer>
  )
}
