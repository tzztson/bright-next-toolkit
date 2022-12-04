import { ThemeTypes } from 'styled-components'

export const theme: ThemeTypes = {
  colors: {
    dark: {
      primary: 'hsla(248, 25%, 30%, 1)',
      secondary: 'hsla(248, 22%, 34%, 1)'
    },
    light: {
      primary: 'hsla(219, 100%, 97%, 1)',
      secondary: 'hsla(240, 100%, 100%, 1)'
    },
    neutral: {
      primary: 'hsla(247, 19%, 65%, 1)',
      secondary: 'hsla(248, 20%, 84%, 1)',
      tertiary: 'hsla(247, 19%, 65%, 1)',
      quaternary: 'hsla(249, 10%, 86%, 1)'
    },
    gradient:
      'linear-gradient(109.57deg, #5D3594 2.54%, #2A8BB8 29.98%, #C459A1 75.29%, #45C2C8 75.29%)'
  },

  shadows: {
    filter: `drop-shadow(0px 4px 4px hsla(203, 11%, 30%, 1))`
  }
}

export default theme
