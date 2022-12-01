import styled from 'styled-components'
import CaseStudyItem from '@/Organisms/CaseStudyItem'

const CaseStudyListStyled = styled.div`
  grid-area: case-studies;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

interface CaseStudyListProps {
  caseStudies: any[]
}

export default function CaseStudyList({ caseStudies }: CaseStudyListProps) {
  const cases = caseStudies.map(({ fields: { companyLogo, industry, title } }, index) => (
    <CaseStudyItem
      key={index}
      logo={companyLogo}
      title={title}
      number={index}
      industry={industry}
    />
  ))

  return <CaseStudyListStyled>{cases}</CaseStudyListStyled>
}
