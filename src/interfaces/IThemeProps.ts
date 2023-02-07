import { LIGHT_THEME, DARK_THEME } from '../themes'

export interface IThemeProps {
  theme: typeof LIGHT_THEME | typeof DARK_THEME
}
