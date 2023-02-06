import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Prompt } from './components'
import { LIGHT_THEME, DARK_THEME } from './themes'

const PromptContainer = styled.div<{ introState: boolean }>`
  margin-top: 10px;
  animation: ${({ introState }) => (introState ? 'none' : `slide-out-elliptic-top-bck 1s ease-in both`)};

  @keyframes slide-out-elliptic-top-bck {
    0% {
      transform: translateY(0) rotateX(0) scale(1);
      transform-origin: 50% 1400px;
      opacity: 1;
    }
    100% {
      transform: translateY(-600px) rotateX(-30deg) scale(0);
      transform-origin: 50% 100%;
      opacity: 1;
    }
  }
`

const PhotoContainer = styled.div`
  width: 300px;
  height: 300px;
  background-color: #c5c5c5;
  border-radius: 100%;
  overflow: hidden;
  margin: 0 auto;
  animation: slide-in-bck-center 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @keyframes slide-in-bck-center {
    0% {
      transform: translateZ(600px);
      opacity: 0;
    }
    100% {
      transform: translateZ(0);
      opacity: 1;
    }
  }
`

const PUBLIC_URI = process.env.PUBLIC_URL || ''

const App: React.FC = () => {
  const [lightTheme, setLightTheme] = useState<boolean>(false)
  const [introState, setIntroState] = useState<boolean>(true)

  const switchThemeHandler = () => {
    setLightTheme(prevState => !prevState)
  }

  const switchIntroState = () => {
    setIntroState(false)
  }

  return (
    <ThemeProvider theme={lightTheme ? LIGHT_THEME : DARK_THEME}>
      <PromptContainer introState={introState}>
        <Prompt switchIntroState={switchIntroState} />
      </PromptContainer>
      {!introState && (
        <PhotoContainer>
          <img src={`${PUBLIC_URI}/images/profile-photo.jpg`} alt="Pablo Avilés Prieto" />
        </PhotoContainer>
      )}
    </ThemeProvider>
  )
}

export default App
