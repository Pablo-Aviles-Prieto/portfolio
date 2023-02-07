import { useState, useEffect } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Prompt, ProfileHeader } from './components'
import { LIGHT_THEME, DARK_THEME } from './themes'

interface GlobalStyleProps {
  theme: typeof LIGHT_THEME | typeof DARK_THEME
}

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

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono');
  @import url('https://fonts.googleapis.com/css?family=Ubuntu');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    font-family: 'Poppins', sans-serif;
    list-style: none;
  }
  body {
    background-color: ${({ theme }) => theme.mainBground};
    color: ${({ theme }) => theme.mainColor};
  }
`

const App: React.FC = () => {
  const [lightTheme, setLightTheme] = useState<boolean>(false)
  const [introState, setIntroState] = useState<boolean>(true)

  useEffect(() => {
    setIntroState(false)
  }, [])

  const switchThemeHandler = () => {
    setLightTheme(prevState => !prevState)
  }

  const switchIntroState = () => {
    setIntroState(false)
  }

  return (
    <ThemeProvider theme={lightTheme ? LIGHT_THEME : DARK_THEME}>
      <GlobalStyle />
      <PromptContainer introState={introState}>
        <Prompt switchIntroState={switchIntroState} />
      </PromptContainer>
      <ProfileHeader introState={introState} />
    </ThemeProvider>
  )
}

export default App
