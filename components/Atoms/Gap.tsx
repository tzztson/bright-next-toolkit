import styled from 'styled-components'

interface GapStyle extends React.ComponentPropsWithoutRef<'div'> {
  height?: string
}

const GapStyled = styled.div<GapStyle>`
  height: ${props => props.height || '1rem'};
`

interface Gap extends GapStyle {}

export default function Modal({ ...rest }: Gap) {
  return <GapStyled {...rest} />
}
