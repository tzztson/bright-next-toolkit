import { GetStaticProps, GetStaticPropsContext } from 'next'
import * as contentful from 'contentful'
import styled from 'styled-components'
import { breakpoints } from '@/Styles/GlobalStyle'
import { H1, H2 } from '@/Atoms/Typography'
import Footer from '@/Organisms/Footer'
import JobPostings from '@/Organisms/JobPostings'
import { NavBar } from '@/Molecules/NavBar'
import TeamList from '@/Organisms/TeamList'

const StyledTeam = styled.div`
  max-width: 100vw;
  margin: 3rem 10vw;
  display: flex;
  flex-direction: column;

  @media ${breakpoints.mobileSm} {
    gap: 1rem;
  }

  @media ${breakpoints.mobileLg} {
    gap: 1.25rem;
  }

  @media ${breakpoints.tablet} {
    gap: 1.5rem;
  }

  @media ${breakpoints.laptop} {
    gap: 1.75rem;
  }

  @media ${breakpoints.desktopSm} {
    gap: 2rem;
  }
`

interface TeamProps {
  teamList: any
  jobPosts: any
}

export default function Team({ teamList, jobPosts }: TeamProps) {
  return (
    <StyledTeam>
      <NavBar />
      {/* <H1 fontWeight={800}>Meet our team and join us</H1>
      <P>
        Massa tempor nec feugiat nisl pretium fusce id velit ut. Cursus mattis molestie a iaculis. At ultrices mi tempus
        imperdiet. Nam libero justo laoreet sit amet cursus.
      </P>
      <Image src='/images/ourProcess.svg' alt='our process' width={1200} height={800} /> */}
      <H1 fontWeight={800}>Meet our team of experts in design and development</H1>
      {/* <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Aliquam purus sit amet luctus venenatis lectus.
      </P> */}
      <TeamList team={teamList} />
      <H2 fontWeight={800}>Open Position</H2>
      {/* <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</P> */}
      <JobPostings jobPosts={jobPosts} />
      <Footer />
    </StyledTeam>
  )
}
interface TeamPageStaticProps {}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })

  const teamList = await client.getEntries<TeamPageStaticProps>({
    content_type: 'teamMember'
  })

  const jobPosts = await client.getEntries<TeamPageStaticProps>({
    content_type: 'jobPosts'
  })

  return {
    props: {
      teamList: teamList,
      jobPosts: jobPosts
    }
  }
}
