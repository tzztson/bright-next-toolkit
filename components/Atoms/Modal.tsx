import styled from 'styled-components'

interface ModalStyle extends React.ComponentPropsWithoutRef<'div'> {
  backgroundColor?: string
  width?: string
  height?: string
  radius?: string
}

// TODO: Totally busted... Need to make ...rest / ...children absoulte, or figure out how to do it.
const ModalStyled = styled.div<ModalStyle>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backdrop-filter: blur(0.5rem);

  > * {
    width: ${props => props.width || '80vw'};
    height: ${props => props.height || 'auto'};
    background: ${props => props.backgroundColor || props.theme.colors.light.secondary};
    border: 0.1rem solid ${props => props.theme.colors.dark.primary};
    border-radius: ${props => props.radius || '0.8rem'};
    z-index: 9999;
    overflow: auto;
    padding: 1rem;
    top: 50%;
  }
`

interface Modal extends ModalStyle {
  visible?: boolean
}

export default function Modal({ visible = false, ...rest }: Modal) {
  return visible ? <ModalStyled {...rest} /> : null
}
