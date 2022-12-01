import styled, { css } from 'styled-components'
import { breakpoints } from '@/Styles/GlobalStyle'
interface TextStyle extends React.ComponentPropsWithoutRef<'header'> {
  borderLines?: boolean
  color?: string
  fontFamily?: string
  fontSize?: string
  fontWeight?: string | number
  gridArea?: string
  lineHeight?: string
}

export const H1 = styled.h1<TextStyle>`
  color: ${props => props.color || props.theme.colors.dark.primary};
  font-family: ${props => props.fontFamily};
  font-weight: ${props => props.fontWeight || 400};
  grid-area: ${props => props.gridArea || 'header'};
  line-height: ${props => props.lineHeight};
  ${props =>
    props.borderLines &&
    css`
      border-top: 1px solid ${props => props.theme.colors.neutral.quaternary};
      border-bottom: 1px solid ${props => props.theme.colors.neutral.quaternary};
      padding: 1rem 0;
    `};

  @media ${breakpoints.mobileSm} {
    font-size: ${props => props.fontSize || '2.0rem'};
  }
  @media ${breakpoints.mobileLg} {
    font-size: ${props => props.fontSize || '2.50rem'};
  }
  @media ${breakpoints.tablet}, ${breakpoints.laptop} {
    font-size: ${props => props.fontSize || '3.0rem'};
  }
  @media ${breakpoints.desktopSm}, ${breakpoints.desktopLg} {
    font-size: ${props => props.fontSize || '4.0rem'};
  }
`

export const H2 = styled.h2<TextStyle>`
  color: ${props => props.color || props.theme.colors.dark.primary};
  font-family: ${props => props.fontFamily};
  font-weight: ${props => props.fontWeight || 400};
  grid-area: ${props => props.gridArea || 'header'};
  line-height: ${props => props.lineHeight};
  ${props =>
    props.borderLines &&
    css`
      border-top: 1px solid ${props => props.theme.colors.neutral.quaternary};
      border-bottom: 1px solid ${props => props.theme.colors.neutral.quaternary};
      padding: 1rem 0;
    `}

  @media ${breakpoints.mobileSm}, ${breakpoints.mobileLg} {
    font-size: ${props => props.fontSize || '2.0rem'};
  }
  @media ${breakpoints.tablet}, ${breakpoints.laptop} {
    font-size: ${props => props.fontSize || '2.5rem'};
  }
  @media ${breakpoints.desktopSm}, ${breakpoints.desktopLg} {
    font-size: ${props => props.fontSize || '3.0rem'};
  }
`
export const H3 = styled.h3<TextStyle>`
  color: ${props => props.color || props.theme.colors.dark.primary};
  font-family: ${props => props.fontFamily};
  font-weight: ${props => props.fontWeight || 400};
  grid-area: ${props => props.gridArea || 'header'};
  line-height: ${props => props.lineHeight};
  ${props =>
    props.borderLines &&
    css`
      border-top: 1px solid ${props => props.theme.colors.neutral.quaternary};
      border-bottom: 1px solid ${props => props.theme.colors.neutral.quaternary};
      padding: 1rem 0;
    `}

  @media ${breakpoints.mobileSm}, ${breakpoints.mobileLg} {
    font-size: ${props => props.fontSize || '1.5rem'};
  }
  @media ${breakpoints.tablet}, ${breakpoints.laptop} {
    font-size: ${props => props.fontSize || '1.75rem'};
  }
  @media ${breakpoints.desktopSm}, ${breakpoints.desktopLg} {
    font-size: ${props => props.fontSize || '2.0rem'};
  }
`
export const H4 = styled.h4<TextStyle>`
  color: ${props => props.color || props.theme.colors.dark.primary};
  font-family: ${props => props.fontFamily};
  font-weight: ${props => props.fontWeight || 400};
  grid-area: ${props => props.gridArea || 'header'};
  line-height: ${props => props.lineHeight};
  ${props =>
    props.borderLines &&
    css`
      border-top: 1px solid ${props => props.theme.colors.neutral.quaternary};
      border-bottom: 1px solid ${props => props.theme.colors.neutral.quaternary};
      padding: 1rem 0;
    `}
  @media ${breakpoints.mobileSm}, ${breakpoints.mobileLg}, ${breakpoints.tablet} {
    font-size: ${props => props.fontSize || '1.25rem'};
  }
  @media ${breakpoints.laptop}, ${breakpoints.desktopSm}, ${breakpoints.desktopLg} {
    font-size: ${props => props.fontSize || '1.5rem'};
  }
`
export const H5 = styled.h5<TextStyle>`
  color: ${props => props.color || props.theme.colors.dark.primary};
  font-family: ${props => props.fontFamily};
  font-weight: ${props => props.fontWeight || 400};
  grid-area: ${props => props.gridArea || 'header'};
  line-height: ${props => props.lineHeight};
  ${props =>
    props.borderLines &&
    css`
      border-top: 1px solid ${props => props.theme.colors.neutral.quaternary};
      border-bottom: 1px solid ${props => props.theme.colors.neutral.quaternary};
      padding: 1rem 0;
    `}
  @media ${breakpoints.mobileSm}, ${breakpoints.mobileLg} {
    font-size: ${props => props.fontSize || '1rem'};
  }
  @media ${breakpoints.tablet}, ${breakpoints.laptop} {
    font-size: ${props => props.fontSize || '1.25rem'};
  }
  @media ${breakpoints.desktopSm}, ${breakpoints.desktopLg} {
    font-size: ${props => props.fontSize || '1.5rem'};
  }
`
export const H6 = styled.h6<TextStyle>`
  color: ${props => props.color || props.theme.colors.dark.primary};
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize || '1rem'};
  font-weight: ${props => props.fontWeight || 400};
  grid-area: ${props => props.gridArea || 'header'};
  line-height: ${props => props.lineHeight};
  ${props =>
    props.borderLines &&
    css`
      border-top: 1px solid ${props => props.theme.colors.neutral.quaternary};
      border-bottom: 1px solid ${props => props.theme.colors.neutral.quaternary};
      padding: 1rem 0;
    `}
`
export const P = styled.p<TextStyle>`
  color: ${props => props.color || props.theme.colors.dark.primary};
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize || '1rem'};
  font-weight: ${props => props.fontWeight || 400};
  grid-area: ${props => props.gridArea || 'paragraph'};
  line-height: ${props => props.lineHeight || '1.75rem'};
  ${props =>
    props.borderLines &&
    css`
      border-top: 1px solid ${props => props.theme.colors.neutral.quaternary};
      border-bottom: 1px solid ${props => props.theme.colors.neutral.quaternary};
      padding: 1rem 0;
    `};
`

export const Headers = { H1, H2, H3, H4, H5, H6 }
export const Paragraph = { P }
export const Typography = { ...Headers, ...Paragraph }

export default Typography
