import { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { H3, H6 } from '@/Atoms/Typography'
import Line from '@/Atoms/Line'

interface StyledAccoringProps extends React.ComponentPropsWithoutRef<'div'> {}

const StyledAccordian = styled.div<StyledAccoringProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'label .'
    'header image'
    'output output'
    'line line';
  grid-gap: 1rem;
`

const StyledImage = styled.button`
  grid-area: image;
  justify-self: end;
  background-color: transparent;
`

const StyledOutput = styled.div`
  grid-area: output;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

interface ProcessAccordionProps extends StyledAccoringProps {
  label: string
  header: string
  children: any
}

export default function ProcessAccordion(props: ProcessAccordionProps) {
  const { label, header, children } = props

  const [active, setActive] = useState(false)
  const [buttonImage, setButtonImage] = useState('/images/downArrow.svg')
  const [buttonAlt, setButtonAlt] = useState('down arrow')
  const [output, setOutput] = useState('')

  const toggleActive = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActive(!active)
    setButtonImage(active ? '/images/downArrow.svg' : '/images/upArrow.svg')
    setButtonAlt(active ? 'down arrow' : 'up arrow')
    setOutput(active ? '' : children)
  }

  return (
    <StyledAccordian>
      <H6 gridArea='label'>{label.toUpperCase()}</H6>
      <H3 fontWeight={800}>{header}</H3>
      <StyledImage onClick={toggleActive}>
        <Image src={buttonImage} alt={buttonAlt} width={24} height={14} />
      </StyledImage>
      <StyledOutput>{output}</StyledOutput>
      <Line />
    </StyledAccordian>
  )
}
