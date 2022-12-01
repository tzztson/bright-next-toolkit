import styled from 'styled-components'

interface TextareaStyle extends React.ComponentPropsWithoutRef<'textarea'> {
  backgroundColor?: string
  borderColor?: string
  color?: string
  fontSize?: string
  gridArea?: string
  radius?: string
  width?: string
}

export const StyledTextArea = styled.textarea<TextareaStyle>`
  font-size: ${props => props.fontSize};
  background: ${props => props.backgroundColor || 'transparent'};
  border-bottom: solid 1px ${props => props.borderColor || props.theme.colors.dark.primary};
  border-radius: ${props => props.radius || '0rem'};
  grid-area: ${props => props.gridArea || 'textarea'};
  width: ${props => props.width};
  ::placeholder {
    font-family: 'Inter', sans-serif;
    color: ${props => props.color || props.theme.colors.dark.primary};
  }
  &:focus {
    padding: 1rem;
  }
`

interface Textarea extends TextareaStyle {
  name: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  maxLength?: number
  rows?: number
}

export default function Textarea({
  name = 'textarea',
  placeholder = 'textarea',
  value = '',
  onChange = () => {},
  maxLength = 500,
  rows = 5,
  ...rest
}: Textarea) {
  return (
    <StyledTextArea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      rows={rows}
      {...rest}
    />
  )
}
