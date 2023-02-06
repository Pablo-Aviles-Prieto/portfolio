import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Prompt } from './components'
import { LIGHT_THEME, DARK_THEME } from './themes'

const PromptContainer = styled.div<{ introState: boolean }>`
  margin-top: 10px;
  opacity: ${({ introState }) => (introState ? 1 : 0)};
  transition: all 3s ease-in;
`

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
    </ThemeProvider>
  )
}

export default App
