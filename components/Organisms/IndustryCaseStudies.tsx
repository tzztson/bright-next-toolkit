import Image from 'next/image'
import styled from 'styled-components'
import { breakpoints } from '@/Styles/GlobalStyle'
import { H3 } from '@/Atoms/Typography'
import CaseStudyList from '@/Organisms/CaseStudyList'

const StyledCaseStudies = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto minmax(250px, 1fr) auto;
  grid-template-areas:
    'header'
    'image'
    'case-studies';
  gap: 2rem;

  @media ${breakpoints.laptop} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'header image'
      'case-studies image';
  }
`

const StyledImage = styled.div`
  grid-area: image;
  position: relative;
  height: 100%;
  align-self: center;
`

interface IndustryCaseStudiesProps {
  image: any
  caseStudies: any[]
}

export default function IndustryCaseStudies({ image, caseStudies }: IndustryCaseStudiesProps) {
  const url = `https:${image.fields.file.url}`
  const { title } = image.fields

  return (
    <StyledCaseStudies>
      <H3 fontWeight={700}>Take A Look At Our Cases</H3>
      <StyledImage>
        <Image
          src={url}
          alt={title}
          priority
          fill
          sizes={`${breakpoints.mobileSm} 100vw, ${breakpoints.laptop} 50vw`}
          style={{ objectFit: 'contain' }}
        />
      </StyledImage>
      <CaseStudyList caseStudies={caseStudies} />
    </StyledCaseStudies>
  )
}
