import 'styled-components'

declare module 'styled-components' {
  export interface ThemeTypes {
    colors: {
      dark: {
        primary: string
        secondary: string
      }
      light: {
        primary: string
        secondary: string
      }
      neutral: {
        primary: string
        secondary: string
        tertiary: string
        quaternary: string
      }
      gradient: string
    }
    shadows: {
      filter: string
    }
  }
}
