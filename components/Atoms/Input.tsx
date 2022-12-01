import styled, { css } from 'styled-components'

interface InputStyle extends React.ComponentPropsWithoutRef<'input'> {
  backgroundColor?: string
  borderColor?: string
  color?: string
  fontSize?: string
  gridArea?: string
  height?: string
  width?: string
  radius?: string
  isDisabled?: boolean
}

export const StyledInput = styled.input<InputStyle>`
  background-color: ${props => props.backgroundColor || 'transparent'};
  color: ${props => props.color || props.theme.colors.dark.primary};
  font-size: ${props => props.fontSize};
  grid-area: ${props => props.gridArea || 'input'};
  height: ${props => props.height || '3rem'};
  width: ${props => props.width};
  border-bottom: solid 1px ${props => props.borderColor || props.theme.colors.dark.primary};
  border-radius: ${props => props.radius || '0rem'};
  ::placeholder {
    color: ${props => props.color || props.theme.colors.dark.primary};
  }
  &:focus {
    padding-left: 1rem;
  }
  ${props =>
    props.isDisabled &&
    css`
      background-color: ${props.theme.colors.light.primary};
      cursor: not-allowed;
    `};
`

interface Input extends InputStyle {
  name: string
  placeholder: string
  type:
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | undefined
  value: string | number
  maxLength?: number
  isAutoComplete?: boolean
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({
  name = 'input',
  placeholder = 'input',
  type = 'text',
  value = '',
  maxLength = 255,
  isAutoComplete = false,
  handleChange = () => {},
  ...rest
}: Input) {
  return (
    <StyledInput
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      maxLength={maxLength}
      autoComplete={isAutoComplete.toString()}
      onChange={handleChange}
      {...rest}
    />
  )
}
