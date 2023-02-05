import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { HelloWorld } from './components'
import { LIGHT_THEME, DARK_THEME } from './themes'

const App: React.FC = () => {
  const [lightTheme, setLightTheme] = useState<boolean>(false)

  const switchThemeHandler = () => {
    setLightTheme(prevState => !prevState)
  }

  console.log('lightTheme', lightTheme)

  return (
    <ThemeProvider theme={lightTheme ? LIGHT_THEME : DARK_THEME}>
      <HelloWorld />
      <div>
        <button type="button" onClick={switchThemeHandler}>
          Change theme
        </button>
      </div>
    </ThemeProvider>
  )
}

export default App
