import { useState } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { I18nextProvider } from 'react-i18next'
import i18n from './utils/i18n'
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

const SkipBtn = styled(GenericButton)`
  color: ${({ theme }) => theme.mainBground};
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
    scrollbar-color: ${({ theme }) => theme.scrollBarColor} ${({ theme }) => theme.secondBground};
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
	    background-color: ${({ theme }) => theme.scrollBarColor};
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
      <I18nextProvider i18n={i18n}>
        <GlobalStyle introState={introState} />
        <UbuntuContainer
          lightTheme={lightTheme}
          openFile={openFile}
          switchThemeHandler={switchThemeHandler}
          switchOpenFileState={setOpenFile}
        >
          <>
            <FolderBlock />
            <IntroContainer introState={introState}>
              <Prompt introState={introState} switchIntroState={switchIntroState} />
              <SkipBtn onClick={switchIntroState}>Skip introduction</SkipBtn>
            </IntroContainer>
            <WindowLayerHandler introState={introState} openedFile={openFile} switchOpenFileState={setOpenFile} />
          </>
        </UbuntuContainer>
      </I18nextProvider>
    </ThemeProvider>
  )
}

export default App
