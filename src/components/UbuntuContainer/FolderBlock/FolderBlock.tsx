import styled from 'styled-components'
import { Code } from '../../Icons'

const FolderBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Ubuntu mono';
  font-size: 16px;
  .folder {
    position: relative;
    img {
      width: 60px;
    }
    svg {
      position: absolute;
      top: 23px;
      left: 17px;
      color: #b85c01;
    }
  }
`

const PUBLIC_URI = process.env.PUBLIC_URL || ''

export const FolderBlock: React.FC = () => {
  return (
    <FolderBlockContainer>
      <div className="folder">
        <img src={`${PUBLIC_URI}/images/ubuntu-folder.png`} alt="Ubuntu folder" />
        <Code width={25} height={25} />
      </div>
      <span>Pablo Avilés</span>
    </FolderBlockContainer>
  )
}
