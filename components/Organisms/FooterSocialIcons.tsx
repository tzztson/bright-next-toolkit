import Image from 'next/image'
import styled from 'styled-components'

const StyledSocialIcons = styled.div`
  grid-area: socials;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

export default function FooterSocialIcons() {
  return (
    <StyledSocialIcons>
      <Image src='/images/linkedinIcon.svg' alt='LinkedIn Icon' width={26} height={26} />
      <Image src='/images/instagramIcon.svg' alt='Instagram Icon' width={26} height={26} />
      <Image src='/images/facebookIcon.svg' alt='Facebook Icon' width={26} height={26} />
    </StyledSocialIcons>
  )
}
