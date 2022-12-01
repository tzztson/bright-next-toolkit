import { GetStaticProps } from 'next'
import { createClient, EntryCollection } from 'contentful'
import { TypeIndustryPageFields } from '@/Types/contentful'
import styled from 'styled-components'
import { breakpoints } from '@/Styles/GlobalStyle'
import { NavBarTransformed } from '@/Molecules/NavBar'
import ContentfulNavList from '@/Molecules/ContentfulNavList'

const StyledHome = styled.div`
  height: 100vh;
  place-items: center;

  @media ${breakpoints.mobileSm} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media ${breakpoints.laptop} {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'navBar industryList';
  }

  @media ${breakpoints.desktopSm} {
    grid-template-columns: 1fr 2fr;
  }
`

interface HomepageProps {
  industries: EntryCollection<TypeIndustryPageFields>
}

export default function Index({ industries }: HomepageProps) {
  return (
    <>
      <StyledHome>
        <NavBarTransformed />
        <ContentfulNavList object={industries} />
      </StyledHome>
    </>
  )
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export const getStaticProps: GetStaticProps = async () => {
  const industries = await client.getEntries<TypeIndustryPageFields>({
    content_type: 'industryPage'
  })

  return {
    props: {
      industries: industries
    }
  }
}
