import styled from 'styled-components'
import { breakpoints } from '@/Styles/GlobalStyle'
import { H6 } from '@/Atoms/Typography'

const StyledLocations = styled.div`
  grid-area: locations;
  display: flex;

  @media ${breakpoints.mobileSm} {
    flex-direction: column;
  }

  @media ${breakpoints.laptop} {
    flex-direction: row;
    justify-content: flex-end;
    gap: 1rem;
  }
`

export default function FooterLocations() {
  return (
    <StyledLocations>
      <H6 fontWeight={600}>NEW YORK, NY</H6>
      <H6 fontWeight={600}>BOSTON, MA</H6>
      <H6 fontWeight={600}>MIAMI, FL</H6>
    </StyledLocations>
  )
}
