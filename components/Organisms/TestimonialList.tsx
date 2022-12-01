import { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { breakpoints } from '@/Styles/GlobalStyle'
import TestimonialItem from '@/Organisms/TestimonialItem'
import TestimonialSliderButtons from '@/Organisms/TestimonialSliderButtons'

const StyledTestimonialList = styled.div`
  justify-content: center;
  padding: 1.5rem 0;

  @media ${breakpoints.mobileSm} {
    display: grid;
    grid-template-columns: 1fr 8fr;
    grid-template-areas:
      'image testimonial'
      'testimonial-slider-buttons testimonial-slider-buttons';
    gap: 1rem;
  }

  @media ${breakpoints.tablet} {
    display: grid;
    grid-template-columns: 1fr 8fr 1fr;
    grid-template-areas: 'image testimonial testimonial-slider-buttons';
    gap: 2rem;
  }
`

const StyledImage = styled.div`
  grid-area: image;
`

const StyledTestimonials = styled.div`
  grid-area: testimonial;
`

interface TestimonialListProps {
  testimonials: any[]
}

export default function TestimonialList({ testimonials }: TestimonialListProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonialItems = testimonials.map(
    ({ fields: { company, fullName, role, testimonial } }, index) => (
      <TestimonialItem
        key={index}
        name={fullName}
        role={role}
        company={company}
        testimonial={testimonial}
      />
    )
  )

  const handleRightArrowClick = () => {
    currentTestimonial === testimonials.length - 1
      ? setCurrentTestimonial(0)
      : setCurrentTestimonial(currentTestimonial + 1)
  }

  const handleLeftArrowClick = () => {
    currentTestimonial === 0
      ? setCurrentTestimonial(testimonials.length - 1)
      : setCurrentTestimonial(currentTestimonial - 1)
  }

  return (
    <StyledTestimonialList>
      <StyledImage>
        <Image src='/images/quote.png' alt='Quote' width={40} height={31} />
      </StyledImage>
      <StyledTestimonials>{testimonialItems[currentTestimonial]}</StyledTestimonials>
      <TestimonialSliderButtons
        handleRightArrowClick={handleRightArrowClick}
        handleLeftArrowClick={handleLeftArrowClick}
      />
    </StyledTestimonialList>
  )
}
