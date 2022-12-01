import styled from 'styled-components'
import { H3, P } from '@/Atoms/Typography'

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 2fr 3fr;
  }
`

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledParagraph = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

interface CaseStudyCardProps {
  header: string
  paragraph: string
}

export default function CaseStudyCard({ header, paragraph }: CaseStudyCardProps) {
  const splitParagraphs = Array.isArray(paragraph) ? paragraph : paragraph.split(/\n/)
  const outputParagraphs = splitParagraphs.map((paragraph, index) => {
    return <P key={index}>{paragraph}</P>
  })

  return (
    <StyledCard>
      <StyledHeader>
        <H3 fontWeight={800}>{header}</H3>
      </StyledHeader>
      <StyledParagraph>{outputParagraphs}</StyledParagraph>
    </StyledCard>
  )
}
