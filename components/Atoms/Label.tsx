import styled from 'styled-components'

interface LabelStyle extends React.ComponentPropsWithoutRef<'label'> {
  textColor?: string
}

const LabelStyled = styled.label<LabelStyle>`
  color: ${props => props.textColor || props.theme.colors.primary.main};
`

interface Label extends LabelStyle {
  text: string
  htmlFor?: string
  form?: string
}

export default function Label({
  htmlFor = 'label-id',
  text = 'Label',
  form = 'form-id',
  ...rest
}: Label) {
  return (
    <LabelStyled htmlFor={htmlFor} form={form} {...rest}>
      {text}
    </LabelStyled>
  )
}
