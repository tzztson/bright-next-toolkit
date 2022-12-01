import Image from 'next/image'
import styled from 'styled-components'
import { breakpoints } from '@/Styles/GlobalStyle'
import { H1 } from '@/Atoms/Typography'

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

const StyledImage = styled.div`
  place-self: center;
  position: relative;
  width: 100%;

  @media ${breakpoints.mobileSm} {
    min-height: 25vh;
  }

  @media ${breakpoints.mobileLg} {
    min-height: 30vh;
  }

  @media ${breakpoints.tablet} {
    min-height: 35vh;
  }

  @media ${breakpoints.laptop} {
    min-height: 40vh;
  }

  @media ${breakpoints.desktopSm} {
    min-height: 50vh;
  }
`

interface CaseStudyHeroProps {
  image: any
  title: string
}

export default function CaseStudyHero({ image, title }: CaseStudyHeroProps) {
  const url = `https:${image.fields.file.url}`
  const { description } = image.fields

  return (
    <StyledHero>
      <H1 fontWeight={800}>{title}</H1>
      <StyledImage>
        <Image
          src={url}
          alt={description}
          priority
          fill
          sizes={`${breakpoints.mobileSm} 90vw, ${breakpoints.laptop} 50vw`}
          style={{ objectFit: 'contain' }}
        />
      </StyledImage>
    </StyledHero>
  )
}
