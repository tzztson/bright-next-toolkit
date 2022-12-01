import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { createClient } from 'contentful'
import { TypeIndustryPageFields } from '@/Types/contentful'
import styled from 'styled-components'
import Line from '@/Atoms/Line'
import { H1, H4 } from '@/Atoms/Typography'
import Footer from '@/Organisms/Footer'
import IndustryCaseStudies from '@/Organisms/IndustryCaseStudies'
import IndustryIntroduction from '@/Organisms/IndustryIntroduction'
import IndustryTestimonials from '@/Organisms/IndustryTestimonials'
import IndustryForm from '@/Organisms/IndustryForm'
import { NavBar } from '@/Molecules/NavBar'

const StyledIndustry = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 10vw;
`

export default function Industry({
  name,
  subheader,
  descriptionImage,
  description,
  callToAction,
  callToActionButton,
  caseStudyImage,
  caseStudies,
  testimonials
}: TypeIndustryPageFields) {
  return (
    <>
      <StyledIndustry>
        <NavBar />
        <H1 fontWeight={800} lineHeight='4.75rem' gridArea='name'>
          {name}
        </H1>
        <H4 fontWeight={500} borderLines={true} style={{ padding: '2rem 0' }}>
          {subheader.toUpperCase()}
        </H4>
        <IndustryIntroduction
          description={description}
          callToAction={callToAction}
          callToActionButton={callToActionButton}
          descriptionImage={descriptionImage}
        />
        <Line />
        <IndustryCaseStudies image={caseStudyImage} caseStudies={caseStudies} />
        <Line />
        <IndustryTestimonials testimonials={testimonials} />
        <Line />
        <IndustryForm />
        <Line />
        <Footer />
      </StyledIndustry>
    </>
  )
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export const getStaticPaths: GetStaticPaths = async () => {
  const industries = await client.getEntries<TypeIndustryPageFields>({
    content_type: 'industryPage'
  })
  const paths = industries.items.map(item => ({
    params: { industry: item.fields.slug }
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const contextSlug = context.params?.industry
  const industryFields = await client.getEntries<TypeIndustryPageFields>({
    content_type: 'industryPage',
    'fields.slug': contextSlug
  })

  return {
    props: industryFields.items[0].fields
  }
}
