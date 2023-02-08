import { useState, useEffect } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Prompt, ProfileHeader, Header } from './components'
import { LeftBlockContainer, RightBlockContainer, BottomBlockContainer } from './components/Styles'
import { LIGHT_THEME, DARK_THEME } from './themes'

const PromptContainer = styled.div<{ introState: boolean }>`
  margin-top: 10px;
  animation: ${({ introState }) => (introState ? 'none' : `slide-out-elliptic-bottom-bck 1s ease-in both`)};

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
  }
  body {
    background-color: white;
    /* background-color: ${({ theme }) => theme.mainBground}; */
    color: ${({ theme }) => theme.mainColor};
    overflow-x: hidden;
  }
`

const App: React.FC = () => {
  const [lightTheme, setLightTheme] = useState<boolean>(false)
  const [introState, setIntroState] = useState<boolean>(true)

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
      <Header introState={introState} />
      <LeftBlockContainer introState={introState} />
      <RightBlockContainer introState={introState}>
        {introState && (
          <PromptContainer introState={introState}>
            <Prompt switchIntroState={switchIntroState} />
          </PromptContainer>
        )}
        <ProfileHeader introState={introState} />
      </RightBlockContainer>
      <BottomBlockContainer introState={introState}>
        <h1 style={{ paddingTop: '160px', textAlign: 'center' }}>Test</h1>
      </BottomBlockContainer>
    </ThemeProvider>
  )
}

export default App
