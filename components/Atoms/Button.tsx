import React from 'react'
import styled, { css } from 'styled-components'

interface ButtonStyle extends React.ComponentPropsWithoutRef<'button'> {
  backgroundColor?: string
  fontColor?: string
  gridArea?: string
  height?: string
  width?: string
  borderRadius?: string
  shadow?: string
  isAutofocus?: boolean
  isDisabled?: boolean
  isHover?: boolean
}

const ButtonStyled = styled.button<ButtonStyle>`
  cursor: pointer;
  background-color: ${props => props.backgroundColor || props.theme.colors.dark.primary};
  border: none;
  color: ${props => props.fontColor || props.theme.colors.light.primary};
  border-radius: ${props => props.borderRadius || '0rem'};
  filter: ${props => props.shadow};
  grid-area: ${props => props.gridArea || 'button'};
  height: ${props => props.height || '3rem'};
  width: ${props => props.width || '100%'};
  ${props =>
    props.isAutofocus &&
    css`
      autofocus: true;
    `}
  ${props =>
    props.isDisabled &&
    css`
      background-color: ${props.backgroundColor};
      cursor: not-allowed;
    `}
  ${props =>
    props.isHover &&
    css`
      &:hover {
        background-color: ${props.backgroundColor};
        cursor: pointer;
      }
    `}
  max-width: 100%;

  @media only screen and (min-width: 1024px) {
    width: ${props => props.width || '50%'};
  }
`
interface ButtonProps extends ButtonStyle {
  type: 'submit' | 'reset' | 'button'
  text: string
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({
  type = 'submit',
  text = 'button',
  handleClick = () => {},
  ...props
}: ButtonProps) {
  return (
    <ButtonStyled type={type} onClick={handleClick} {...props}>
      {text}
    </ButtonStyled>
  )
}
