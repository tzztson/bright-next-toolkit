import styled from 'styled-components'
import { breakpoints } from '@/Styles/GlobalStyle'
import TeamCard from '@/Organisms/TeamCard'

const StyledTeamList = styled.div`
  display: grid;
  justify-items: center;

  @media ${breakpoints.mobileSm} {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media ${breakpoints.mobileLg} {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  @media ${breakpoints.tablet} {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  @media ${breakpoints.desktopSm} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.75rem;
  }
`

interface TeamListProps {
  team: any
}

export default function TeamList(team: TeamListProps) {
  const { items } = team.team

  const teamList = items.map((item: any, index: number) => {
    return (
      <TeamCard
        key={index}
        name={item.fields.name}
        role={item.fields.role}
        image={`https:${item.fields.photo.fields.file.url}`}
      />
    )
  })

  return <StyledTeamList>{teamList}</StyledTeamList>
}
