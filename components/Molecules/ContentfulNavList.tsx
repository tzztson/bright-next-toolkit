import { EntryCollection } from 'contentful'
import styled from 'styled-components'
import { TypeIndustryPageFields } from '@/Types/contentful'
import { breakpoints } from '@/Styles/GlobalStyle'
import { NavItem } from '@/Atoms/NavItem'
import { H1 } from '@/Atoms/Typography'

interface HeaderStyle extends React.ComponentPropsWithoutRef<'header'> {}

const IndustryListStyled = styled.ul<HeaderStyle>`
  grid-area: industryList;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
`

const ListItemStyled = styled.li`
  > h1 {
    @media ${breakpoints.mobileSm} {
      font-size: 3rem;
    }
    @media ${breakpoints.laptop} {
      font-size: 4rem;
    }
    @media ${breakpoints.desktopSm} {
      font-size: 5rem;
    }
    @media ${breakpoints.desktopLg} {
      font-size: 6rem;
    }
  }
`

interface NavListProps {
  object: EntryCollection<TypeIndustryPageFields>
}

export default function NavList({ object }: NavListProps) {
  const industryList = object.items.map(items => (
    <ListItemStyled key={items.fields.name}>
      <H1 fontWeight={800}>
        <NavItem href={`/${items.fields.slug}`}>{items.fields.name.toUpperCase()}</NavItem>
      </H1>
    </ListItemStyled>
  ))

  return <IndustryListStyled>{industryList}</IndustryListStyled>
}
