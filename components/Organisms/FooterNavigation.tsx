import styled from 'styled-components'
import { H6 } from '@/Atoms/Typography'
import { NavItem } from '@/Atoms/NavItem'

const StyledNavItems = styled.div`
  grid-area: navitems;
  display: flex;
  flex-direction: row;
  gap: 2rem;
`

export default function FooterNavigation() {
  return (
    <StyledNavItems>
      <H6 fontWeight={600}>
        <NavItem href='/team'>TEAM</NavItem>
      </H6>
      <H6 fontWeight={600}>
        <NavItem href='/process'>PROCESS</NavItem>
      </H6>
    </StyledNavItems>
  )
}
