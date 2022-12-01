import styled, { css } from 'styled-components'

interface CheckboxStyle extends React.ComponentPropsWithoutRef<'input'> {
  accentColor?: string
  name?: string
  transform?: string
  isDisabled?: boolean
}

const CheckboxStyled = styled.input<CheckboxStyle>`
  accent-color: ${props => props.accentColor};
  transform: ${props => props.transform || 'scale(1.0)'};
  ${props =>
    props.isDisabled &&
    css`
      accent-color: ${props.theme.colors.neutral.primary};
      cursor: not-allowed;
      : before :checked:before {
    background-color: ${props.theme.colors.neutral.primary};
    }
    `}
`

interface CheckboxProps extends CheckboxStyle {
  defaultChecked?: boolean
  name?: string
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleClick?: (e: React.MouseEvent<HTMLInputElement>) => void
}

export default function Checkbox({
  handleChange = () => {},
  handleClick = () => {},
  defaultChecked = false,
  name = 'checkbox',
  ...rest
}: CheckboxProps) {
  return (
    <CheckboxStyled
      type='checkbox'
      defaultChecked={defaultChecked}
      onChange={handleChange}
      onClick={handleClick}
      name={name}
      {...rest}
    />
  )
}
