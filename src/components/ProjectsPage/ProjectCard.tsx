import styled from 'styled-components'
import { ImgContainer } from '../Styles'

const CardContainer = styled.div`
  border-radius: 8px;
  /* width: 49%; */
  overflow: hidden;
  box-shadow: 2px 4px 10px rgb(0 0 0 / 15%);
  &:hover {
    cursor: pointer;
    box-shadow: 2px 4px 10px rgb(0 0 0 / 50%);
  }
  .content {
    padding: 10px;
    &-title {
      text-align: center;
      h3 {
        color: ${({ theme }) => theme.emphasizeColor};
      }
      p {
        color: ${({ theme }) => theme.greyLighter};
      }
    }
    &-techs {
      display: flex;
      align-items: center;
      gap: 5px;
    }
    &-links {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`

const PreviewImg = styled(ImgContainer)`
  border-radius: 0px;
`

const PUBLIC_URI = process.env.PUBLIC_URL || ''

export const ProjectCard: React.FC = () => {
  return (
    <CardContainer>
      <PreviewImg width="100%" height="150px">
        <img src={`${PUBLIC_URI}/images/jammy-jellyfish-wallpaper.jpg`} alt="Ubuntu folder" />
      </PreviewImg>
      <div className="content">
        <div className="content-title">
          <h3>Title</h3>
          <p>Subtitle</p>
        </div>
        <div className="content-techs">
          <p>Technologies</p>
        </div>
        <div className="content-links">
          <p>Github repo</p>
          <p>Go to page ??</p>
        </div>
      </div>
    </CardContainer>
  )
}
