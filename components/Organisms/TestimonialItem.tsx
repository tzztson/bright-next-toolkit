import styled from 'styled-components'
import { H4, H5, P } from '@/Atoms/Typography'

const StyledTestimonialItem = styled.div`
  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 5fr 5fr;
    grid-template-areas:
      'header header'
      'name testimonial'
      'role testimonial';
    justify-content: space-between;
  }
`

const StyledTestimonialName = styled.div`
  grid-area: name;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

interface TestimonialItemProps {
  name: string
  role: string
  company: string
  testimonial: string
}

export default function TestimonialItem({
  name,
  role,
  company,
  testimonial
}: TestimonialItemProps) {
  return (
    <StyledTestimonialItem>
      <StyledTestimonialName>
        <H4 gridArea='name' fontWeight={700}>
          {name}
        </H4>
        <H5 gridArea='role'>
          {role} at {company}
        </H5>
      </StyledTestimonialName>
      <P gridArea='testimonial'>{testimonial}</P>
    </StyledTestimonialItem>
  )
}
