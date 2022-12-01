import styled from 'styled-components'

interface StyledLineProps extends React.ComponentPropsWithoutRef<'div'> {
  gridArea?: string
}

const StyledLine = styled.div<StyledLineProps>`
  border-bottom: 1px solid ${props => props.theme.colors.neutral.quaternary};
  grid-area: ${props => props.gridArea || 'line'};
`

interface LineProps extends StyledLineProps {}

export default function Line({ ...rest }: LineProps) {
  return <StyledLine {...rest} />
}
