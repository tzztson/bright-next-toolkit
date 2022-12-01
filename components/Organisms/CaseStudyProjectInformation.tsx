import styled from 'styled-components'
import { H3, H5, P } from '@/Atoms/Typography'

const StyledProjectInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 2fr repeat(3, 1fr);
    grid-template-areas:
      'projectInformation description description description'
      'projectInformation companyName product industry'
      'projectInformation results results results';
    gap: 1rem;
  }
`

const StyledProjectInformationTags = styled.div`
  display: flex;
  flex-direction: column;
`

interface CaseStudyProjectInformationProps {
  companyName: string
  description: string
  industry: string
  product: string
  results: string
}

export default function CaseStudyProjectInformation({
  companyName,
  description,
  industry,
  product,
  results
}: CaseStudyProjectInformationProps) {
  return (
    <StyledProjectInformation>
      <H3 gridArea='projectInformation' fontWeight={800}>
        Project Information:
      </H3>
      <P gridArea='description'>{description}</P>
      <StyledProjectInformationTags style={{ gridArea: 'companyName' }}>
        <H5 fontWeight={700}>Customer Name:</H5>
        <P>{companyName}</P>
      </StyledProjectInformationTags>
      <StyledProjectInformationTags style={{ gridArea: 'product' }}>
        <H5 fontWeight={700}>Product:</H5>
        <P>{product}</P>
      </StyledProjectInformationTags>
      <StyledProjectInformationTags style={{ gridArea: 'industry' }}>
        <H5 fontWeight={700}>Industry:</H5>
        <P>{industry}</P>
      </StyledProjectInformationTags>
      <StyledProjectInformationTags style={{ gridArea: 'results' }}>
        <H5 fontWeight={700}>Results:</H5>
        <P>{results}</P>
      </StyledProjectInformationTags>
    </StyledProjectInformation>
  )
}
