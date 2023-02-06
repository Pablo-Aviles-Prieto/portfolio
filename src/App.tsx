import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Prompt } from './components'
import { LIGHT_THEME, DARK_THEME } from './themes'

const PromptContainer = styled.div`
  margin-top: 10px;
`

const App: React.FC = () => {
  const [lightTheme, setLightTheme] = useState<boolean>(false)
  const [introState, setIntroState] = useState<boolean>(true)

  const switchThemeHandler = () => {
    setLightTheme(prevState => !prevState)
  }

  return (
    <ThemeProvider theme={lightTheme ? LIGHT_THEME : DARK_THEME}>
      {introState && (
        <PromptContainer>
          <Prompt introStateHandler={setIntroState} />
        </PromptContainer>
      )}
    </ThemeProvider>
  )
}

export default App
