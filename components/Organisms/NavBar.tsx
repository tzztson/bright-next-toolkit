import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { breakpoints } from '@/Styles/GlobalStyle'

const StyledNavBar = styled.div`
  grid-area: nav;
`
interface NavBarProps {
  href: string
  image: string
  alt: string
  height: number
  width: number
}

function NavBar({ href, image, alt, height, width }: NavBarProps) {
  return (
    <StyledNavBar>
      <Link href={href}>
        <Image src={image} alt={alt} priority height={height} width={width} />
      </Link>
    </StyledNavBar>
  )
}

interface StyledTransformedNavBarProps {
  transform: number
}

const StyledTransformedNavBar = styled.div<StyledTransformedNavBarProps>`
  position: relative;

  @media ${breakpoints.mobileSm} {
    height: 150px;
    width: 50%;
  }

  @media ${breakpoints.laptop} {
    width: 100%;
    height: 100%;
    img {
      transform: rotate(${props => props.transform}deg);
    }
  }
`

interface TransformedNavBarProps extends StyledTransformedNavBarProps {
  href: string
  image: string
  alt: string
}

function TransformedNavBar({ href, image, alt, transform }: TransformedNavBarProps) {
  return (
    <StyledTransformedNavBar transform={transform}>
      <Link href={href}>
        <Image
          src={image}
          alt={alt}
          priority
          fill
          sizes={`${breakpoints.mobileSm} 90vw, ${breakpoints.laptop} 50vw`}
          style={{ objectFit: 'contain' }}
        />
      </Link>
    </StyledTransformedNavBar>
  )
}

export { NavBar, TransformedNavBar }
