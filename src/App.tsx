import { useState } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Prompt, UbuntuContainer, FolderBlock, WindowLayerHandler } from './components'
import { LIGHT_THEME, DARK_THEME } from './themes'
import { GenericButton } from './components/Styles'
import { IOpenFile } from './interfaces'

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

const GlobalStyle = createGlobalStyle<{ introState: boolean }>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    list-style: none;
    scrollbar-color: #eb8100 ${({ theme }) => theme.secondBground};
    scrollbar-width: auto;
    ::-webkit-scrollbar-track {
	    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	    border-radius: 10px;
	    background-color: ${({ theme }) => theme.secondBground};
    }
    ::-webkit-scrollbar {
      border-radius: 10px;
      width: 8px;
	    background-color: #F5F5F5;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
	    box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	    background-color: #eb8100;
    }
  }
  body {
    color: ${({ theme }) => theme.mainColor};
    overflow-x: hidden;
  }
  .emphasize-content {
    color: ${({ theme }) => theme.emphasizeColor};
  }
`

const App: React.FC = () => {
  const [lightTheme, setLightTheme] = useState<boolean>(false)
  const [introState, setIntroState] = useState<boolean>(true)
  const [openFile, setOpenFile] = useState<IOpenFile>('none')

  const switchThemeHandler = () => {
    setLightTheme(prevState => !prevState)
  }

  const switchIntroState = () => {
    setIntroState(false)
    if (introState) {
      setTimeout(() => {
        setOpenFile('profileInfo')
      }, 700)
    }
  }

  return (
    <ThemeProvider theme={lightTheme ? LIGHT_THEME : DARK_THEME}>
      <GlobalStyle introState={introState} />
      <UbuntuContainer openFile={openFile} switchOpenFileState={setOpenFile}>
        <>
          <FolderBlock />
          <IntroContainer introState={introState}>
            <Prompt introState={introState} switchIntroState={switchIntroState} />
            <GenericButton onClick={switchIntroState}>Skip introduction</GenericButton>
          </IntroContainer>
          <WindowLayerHandler introState={introState} openedFile={openFile} switchOpenFileState={setOpenFile} />
        </>
      </UbuntuContainer>
    </ThemeProvider>
  )
}

export default App
