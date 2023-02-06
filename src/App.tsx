import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Prompt } from './components'
import { LIGHT_THEME, DARK_THEME } from './themes'

const App: React.FC = () => {
  const [lightTheme, setLightTheme] = useState<boolean>(false)

  const switchThemeHandler = () => {
    setLightTheme(prevState => !prevState)
  }

  return (
    <ThemeProvider theme={lightTheme ? LIGHT_THEME : DARK_THEME}>
      <div>
        <button type="button" onClick={switchThemeHandler}>
          Change theme
        </button>
      </div>
      <Prompt />
    </ThemeProvider>
  )
}

export default App
