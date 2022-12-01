import Image from 'next/image'
import styled from 'styled-components'
import { H4, H5 } from '@/Atoms/Typography'

const StyledTeamCard = styled.div``

interface TeamCardProps {
  name: string
  role: string
  image: string
}

export default function TeamCard({ name, role, image }: TeamCardProps) {
  return (
    <StyledTeamCard>
      <Image src={image} alt={name} width={360} height={360} />
      <H4 fontWeight={700}>{name}</H4>
      <H5>{role.toUpperCase()}</H5>
    </StyledTeamCard>
  )
}
