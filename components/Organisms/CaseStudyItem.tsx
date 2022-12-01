import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { breakpoints } from '@/Styles/GlobalStyle'
import { H4 } from '@/Atoms/Typography'

const StyledCaseStudyItem = styled.div`
  > a {
    display: grid;
    grid-template-columns: 1fr 5fr 4fr;
    grid-template-rows: auto minmax(50px, 1fr);
    grid-template-areas:
      'number title title'
      'number logo .';
    gap: 1rem;

    @media ${breakpoints.tablet} {
      grid-template-columns: 1fr 3fr 6fr;
    }
  }
`

const StyledImageContainer = styled.div`
  grid-area: logo;
  position: relative;
`

interface CaseStudyItemProps {
  logo: any
  title: string
  number: number
  industry: string
}

export default function CaseStudyItem({ logo, title, number, industry }: CaseStudyItemProps) {
  const url = `https:${logo.fields.file.url}`
  const order = `0${number + 1}`
  const href = `/${industry
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')}/${title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')}`

  return (
    <StyledCaseStudyItem>
      <Link href={href}>
        <H4 fontWeight={600} gridArea='title'>
          {title}
        </H4>
        <H4 fontWeight={600} gridArea='number'>
          {order}
        </H4>
        <StyledImageContainer>
          <Image
            src={url}
            alt={title}
            fill
            sizes={`${breakpoints.mobileSm} 100vw, ${breakpoints.laptop} 50vw`}
            style={{ objectFit: 'contain' }}
          />
        </StyledImageContainer>
      </Link>
    </StyledCaseStudyItem>
  )
}
