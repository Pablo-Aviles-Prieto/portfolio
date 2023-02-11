import { useState, useEffect } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Prompt, UbuntuContainer, ProfileHeader } from './components'
import { LIGHT_THEME, DARK_THEME } from './themes'
import { GenericButton } from './components/Styles'
import { Code } from './components/Icons'
import { WindowLayer } from './components/UbuntuContainer/WindowLayer/WindowLayer'

const IntroContainer = styled.div<{ introState: boolean }>`
  text-align: center;
  animation: ${({ introState }) => (introState ? 'none' : `slide-out-elliptic-bottom-bck 1s ease-in both`)};
  button {
    opacity: ${({ introState }) => (introState ? 1 : 0)};
    transition: opacity 0.3s ease-out;
  }

  @keyframes slide-out-elliptic-bottom-bck {
    0% {
      transform: translateY(0) rotateX(0) scale(1);
      transform-origin: 50% -1400px;
      opacity: 1;
    }
    100% {
      transform: translateY(600px) rotateX(30deg) scale(0);
      transform-origin: 50% 100%;
      opacity: 1;
    }
  }
`

const FolderBlock = styled.div`
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

const GlobalStyle = createGlobalStyle<{ introState: boolean }>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    list-style: none;
  }
  body {
    /* background-color: ${({ theme }) => theme.mainBground}; */
    color: ${({ theme }) => theme.mainColor};
    overflow-x: hidden;
  }
`

const possibleFiles = {
  profileInfo: 'profileInfo',
  projects: 'projects',
  contacts: 'contact',
  none: 'none'
}

type IOpenFile = keyof typeof possibleFiles

const PUBLIC_URI = process.env.PUBLIC_URL || ''

const App: React.FC = () => {
  const [lightTheme, setLightTheme] = useState<boolean>(false)
  const [introState, setIntroState] = useState<boolean>(true)
  const [openFile, setOpenFile] = useState<IOpenFile>('none')

  useEffect(() => {
    setIntroState(true)
  }, [])

  const switchThemeHandler = () => {
    setLightTheme(prevState => !prevState)
  }

  const switchIntroState = () => {
    setIntroState(false)
  }

  return (
    <ThemeProvider theme={lightTheme ? LIGHT_THEME : DARK_THEME}>
      <GlobalStyle introState={introState} />
      <UbuntuContainer switchOpenFileState={setOpenFile}>
        <>
          <FolderBlock>
            <div className="folder">
              <img src={`${PUBLIC_URI}/images/ubuntu-folder.png`} alt="Ubuntu folder" />
              <Code width={25} height={25} />
            </div>
            <span>Pablo Avilés</span>
          </FolderBlock>
          <IntroContainer introState={introState}>
            <Prompt switchIntroState={switchIntroState} />
            <GenericButton onClick={switchIntroState}>Skip introduction</GenericButton>
          </IntroContainer>
          <WindowLayer isOpen={openFile === 'profileInfo'} switchOpenFileState={setOpenFile}>
            <ProfileHeader introState={introState} />
          </WindowLayer>
        </>
      </UbuntuContainer>
    </ThemeProvider>
  )
}

export default App
