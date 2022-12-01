import { H3, H4, H5 } from '@/Atoms/Typography'
import styled from 'styled-components'

const StyledJobPost = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

interface JobPostProps {
  location: string
  time: string
  role: string
  department: string
}

export default function JobPost({ location, time, role, department }: JobPostProps) {
  return (
    <StyledJobPost>
      <H5 fontWeight={400}>
        {location} | {time}
      </H5>
      <H3 fontWeight={700}>{role}</H3>
      <H4 fontWeight={400}>{department}</H4>
    </StyledJobPost>
  )
}
