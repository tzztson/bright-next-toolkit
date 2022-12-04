import { createGlobalStyle } from 'styled-components'
import { theme } from 'styles/theme'

export const breakpoints = {
  mobileSm: `(min-width: 0px)`,
  mobileLg: `(min-width: 640px)`,
  tablet: `(min-width: 768px)`,
  laptop: `(min-width: 1024px)`,
  desktopSm: `(min-width: 1280px)`,
  desktopLg: `(min-width: 1536px)`,
  widescreen: `(min-width: 1920px)`
}

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  border: 0;
  padding: 0;
}

html, body {
  font-family: "Inter", sans-serif;
  font-size: 16px;
  background-color: ${theme.colors.light.secondary};
  max-width: 1536px;
  margin: auto;
}

a {
  color: ${theme.colors.dark.primary};
  text-decoration: none;
  :hover {
    background: linear-gradient(109.57deg, #5d3594 2.54%, #2a8bb8 29.98%, #c459a1 75.29%, #45c2c8 75.29%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    cursor: pointer;
  }
}

#__next {
  > div {
    @media ${breakpoints.mobileSm} {
      gap: 1rem;
    }

    @media ${breakpoints.mobileLg} {
      gap: 1.25rem;
    }

    @media ${breakpoints.tablet} {
      gap: 1.5rem;
    }

    @media ${breakpoints.laptop} {
      gap: 1.75rem;
    }

    @media ${breakpoints.desktopSm} {
      gap: 2rem;
    }

    @media ${breakpoints.desktopLg} {
      gap: 2.25rem;
    }

    @media ${breakpoints.widescreen} {
      margin: 3rem auto;
    }
  }
}
`

export default { breakpoints }
