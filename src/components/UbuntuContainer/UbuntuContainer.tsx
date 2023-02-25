/* eslint-disable max-len */
import styled from 'styled-components'
import { Dock } from './Dock/Dock'
import { IOpenFile } from '../../interfaces'
import { ActionBar } from '../ActionBar/ActionBar'

const UbuntuContainerDiv = styled.div<{ PUBLIC_URI: string }>`
  /* entypo */
  [class*='entypo-']:before {
    font-family: 'entypo', sans-serif;
  }
  /* fontawesome */
  [class*='fontawesome-']:before {
    font-family: 'FontAwesome', sans-serif;
  }
  .app {
    display: inline-block;
    margin: 0;
    padding: 0;
  }
  .windows-layer {
    background-image: ${({ PUBLIC_URI }) => `url(${PUBLIC_URI}/images/jammy-jellyfish-wallpaper.jpg)`};
    background-size: cover;
    width: 100%;
    height: calc(100vh - 30px);
    overflow: hidden;
  }
`

const PUBLIC_URI = process.env.PUBLIC_URL || ''

interface IProps {
  openFile: IOpenFile
  lightTheme: boolean
  switchThemeHandler: () => void
  switchOpenFileState: React.Dispatch<React.SetStateAction<IOpenFile>>
  children: JSX.Element
}

export const UbuntuContainer: React.FC<IProps> = ({
  switchOpenFileState,
  lightTheme,
  switchThemeHandler,
  openFile,
  children
}: IProps) => {
  return (
    <UbuntuContainerDiv PUBLIC_URI={PUBLIC_URI}>
      <ActionBar lightTheme={lightTheme} switchThemeHandler={switchThemeHandler} openFile={openFile} />
      <div className="windows-layer">
        <Dock openFile={openFile} switchOpenFileState={switchOpenFileState} />
        {children}
      </div>
    </UbuntuContainerDiv>
  )
}
