import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { createClient } from 'contentful'
import { TypeCaseStudyFields } from '@/Types/contentful'
import styled from 'styled-components'
import Line from '@/Atoms/Line'
import CaseStudyCard from '@/Organisms/CaseStudyCard'
import CaseStudyHero from '@/Organisms/CaseStudyHero'
import CaseStudyProjectInformation from '@/Organisms/CaseStudyProjectInformation'
import Footer from '@/Organisms/Footer'
import IndustryForm from '@/Organisms/IndustryForm'
import { NavBar } from '@/Molecules/NavBar'

const StyledCaseStudy = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 10vw;
`

export default function CaseStudy({
  companyName,
  conclusionHeader,
  conclusionText,
  description,
  industry,
  problemHeader,
  problemText,
  product,
  results,
  solutionHeader,
  solutionText,
  title,
  titleImage
}: TypeCaseStudyFields) {
  return (
    <>
      <StyledCaseStudy>
        <NavBar />
        <CaseStudyHero title={title} image={titleImage} />
        <CaseStudyProjectInformation
          description={description}
          companyName={companyName}
          product={product}
          industry={industry}
          results={results}
        />
        <Line />
        <CaseStudyCard header={problemHeader} paragraph={problemText} />
        <CaseStudyCard header={solutionHeader} paragraph={solutionText} />
        <CaseStudyCard header={conclusionHeader} paragraph={conclusionText} />
        <Line />
        <IndustryForm />
        <Line />
        <Footer />
      </StyledCaseStudy>
    </>
  )
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export const getStaticPaths: GetStaticPaths = async () => {
  const caseStudies = await client.getEntries<TypeCaseStudyFields>({
    content_type: 'caseStudy'
  })
  const paths = caseStudies.items.map(item => ({
    params: {
      industry: item.fields.industry
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, ''),
      caseStudy: item.fields.slug
    }
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const slug = context.params?.caseStudy
  const caseStudyFields = await client.getEntries<TypeCaseStudyFields>({
    content_type: 'caseStudy',
    'fields.slug': slug
  })

  return {
    props: caseStudyFields.items[0].fields
  }
}
