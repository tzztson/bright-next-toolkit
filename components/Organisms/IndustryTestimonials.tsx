import styled from 'styled-components'
import { H3 } from '@/Atoms/Typography'
import TestimonialList from '@/Organisms/TestimonialList'

const StyledTestimonials = styled.div`
  grid-area: testimonials;
  display: flex;
  flex-direction: column;
`

interface TestimonialsProps {
  testimonials: any[]
}

export default function IndustryTestimonials({ testimonials }: TestimonialsProps) {
  return (
    <StyledTestimonials>
      <H3 fontWeight={700}>Testimonials</H3>
      <TestimonialList testimonials={testimonials} />
    </StyledTestimonials>
  )
}
