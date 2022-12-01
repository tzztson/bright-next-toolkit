import Image from 'next/image'
import styled from 'styled-components'
import { breakpoints } from '@/Styles/GlobalStyle'
import Line from '@/Atoms/Line'
import { H6 } from '@/Atoms/Typography'
import FooterLocations from '@/Organisms/FooterLocations'
import FooterNavigation from '@/Organisms/FooterNavigation'
import FooterSocialIcons from '@/Organisms/FooterSocialIcons'

const StyledFooter = styled.footer`
  grid-area: footer;

  @media ${breakpoints.mobileSm} {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 0.75rem;
  }

  @media ${breakpoints.laptop} {
    display: grid;
    align-content: center;
    justify-content: center;
    padding-bottom: 2rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'logo .'
      'navitems .'
      'email .'
      'socials locations'
      'line line'
      'copyright .';
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <Image src='/images/brightLogo.svg' alt='Bright Development Logo' width={90} height={30} />
      <FooterNavigation />
      <FooterSocialIcons />
      <H6 gridArea='email' fontWeight={600}>
        contact@bright-development.com
      </H6>
      <FooterLocations />
      <Line />
      <H6 fontWeight={600} gridArea='copyright'>
        © 2022 Bright Development, LLC
      </H6>
    </StyledFooter>
  )
}
