import Image from 'next/image'
import styled from 'styled-components'
import { breakpoints } from '@/Styles/GlobalStyle'
import { NavItem } from '@/Atoms/NavItem'

const StyledNavBar = styled.nav`
  grid-area: navBar;
`

export function NavBar() {
  return (
    <StyledNavBar>
      <NavItem href='/'>
        <Image
          src='/images/brightDevelopmentLogo.svg'
          alt='Bright Development'
          height={52}
          width={150}
          priority
        />
      </NavItem>
    </StyledNavBar>
  )
}

const StyledNavBarTransformed = styled(StyledNavBar)`
  position: relative;

  @media ${breakpoints.mobileSm} {
    height: 150px;
    width: 50%;
  }

  @media ${breakpoints.laptop} {
    width: 100%;
    height: 100%;
    img {
      transform: rotate(-90deg);
    }
  }
`

export function NavBarTransformed() {
  return (
    <StyledNavBarTransformed>
      <NavItem href='/'>
        <Image
          src='/images/brightDevelopmentLogo.svg'
          alt='Bright Development'
          fill
          sizes={`${breakpoints.mobileSm} 90vw, ${breakpoints.laptop} 50vw`}
          style={{ objectFit: 'contain' }}
          priority
        />
      </NavItem>
    </StyledNavBarTransformed>
  )
}
