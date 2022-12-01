import Image from 'next/image'
import styled from 'styled-components'
import { breakpoints } from '@/Styles/GlobalStyle'

const StyledTestimonialSliderButtons = styled.div`
  cursor: pointer;
  grid-area: testimonial-slider-buttons;
  justify-content: center;

  @media ${breakpoints.mobileSm} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-template-areas: 'left-arrow right-arrow';
    justify-items: center;
  }

  @media ${breakpoints.tablet} {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'right-arrow'
      'left-arrow';
    gap: 3rem;
  }
`

const StyledLeftArrow = styled.div`
  grid-area: left-arrow;
`

const StyledRightArrow = styled.div`
  grid-area: right-arrow;
`

interface TestimonialSliderButtonsProps {
  handleRightArrowClick: () => void
  handleLeftArrowClick: () => void
}

export default function TestimonialSliderButtons({
  handleRightArrowClick,
  handleLeftArrowClick
}: TestimonialSliderButtonsProps) {
  return (
    <StyledTestimonialSliderButtons>
      <StyledLeftArrow>
        <Image
          src='/images/leftArrow.svg'
          alt='Left Arrow'
          width={40}
          height={31}
          onClick={handleLeftArrowClick}
        />
      </StyledLeftArrow>
      <StyledRightArrow>
        <Image
          src='/images/rightArrow.svg'
          alt='Right Arrow'
          width={40}
          height={31}
          onClick={handleRightArrowClick}
        />
      </StyledRightArrow>
    </StyledTestimonialSliderButtons>
  )
}
