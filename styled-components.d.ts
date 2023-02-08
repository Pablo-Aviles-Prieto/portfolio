import { LIGHT_THEME } from './src/themes'

type ThemeInterface = typeof LIGHT_THEME

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends ThemeInterface {}
}
