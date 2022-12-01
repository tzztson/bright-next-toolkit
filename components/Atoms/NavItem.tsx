import Link from 'next/link'
import styled from 'styled-components'

interface NavItemStyle {
  gridArea?: string
}

const StyledNavItem = styled.li<NavItemStyle>`
  grid-area: 'navItem';
  list-style: none;
`
interface NavItemProps extends NavItemStyle {
  href: string
  children?: React.ReactNode
}

export function NavItem({ href = '/', children, ...rest }: NavItemProps) {
  return (
    <StyledNavItem {...rest}>
      <Link href={href}>{children}</Link>
    </StyledNavItem>
  )
}
;``
