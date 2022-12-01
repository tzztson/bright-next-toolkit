import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Asset } from 'contentful'
import styled from 'styled-components'
import { breakpoints } from '@/Styles/GlobalStyle'
import splitParagraphs from '@/Utils/splitParagraphs'
import { H4 } from '@/Atoms/Typography'
import Button from '@/Atoms/Button'

const StyledIndustryIntroduction = styled.div`
  grid-area: introduction;

  @media ${breakpoints.mobileSm} {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: minmax(250px, 1fr) auto;
    grid-template-areas:
      'image'
      'text'
      'CTA'
      'button';
    gap: 1rem;
  }

  @media ${breakpoints.tablet} {
    grid-template-rows: minmax(350px, 1fr) auto;
  }

  @media ${breakpoints.laptop} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: minmax(250px, 1fr) auto;
    grid-template-areas:
      'image text'
      'image CTA'
      'image button';
    gap: 1rem 3rem;
  }

  @media ${breakpoints.desktopSm} {
    gap: 1rem 5rem;
  }
`
const StyledImage = styled.div`
  grid-area: image;
  height: 100%;
  position: relative;
  align-self: center;
`

const StyledParagraphs = styled.div`
  grid-area: text;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

interface IndustryIntroductionProps {
  description: string
  callToAction: string
  callToActionButton: string
  descriptionImage: Asset
}

export default function IndustryIntroduction({
  description,
  callToAction,
  callToActionButton,
  descriptionImage
}: IndustryIntroductionProps) {
  const [modalVisible, setModalVisible] = useState(false)
  const handleClick = () => setModalVisible(!modalVisible)

  return (
    <StyledIndustryIntroduction>
      <StyledImage>
        <Image
          src={`https:${descriptionImage.fields.file.url}`}
          alt={descriptionImage.fields.title}
          priority
          fill
          sizes={`${breakpoints.mobileSm} 100vw, ${breakpoints.laptop} 50vw `}
          style={{ objectFit: 'contain' }}
        />
      </StyledImage>
      <StyledParagraphs>{splitParagraphs(description)}</StyledParagraphs>
      <H4 fontWeight={600} gridArea='CTA'>
        {callToAction}
      </H4>
      <Link href='#form' passHref>
        <Button type='button' text={callToActionButton} handleClick={handleClick} />
      </Link>
    </StyledIndustryIntroduction>
  )
}
