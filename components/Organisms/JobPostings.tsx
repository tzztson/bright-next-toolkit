import { Fragment } from 'react'
import styled from 'styled-components'
import Line from '@/Atoms/Line'
import JobPost from '@/Organisms/JobPost'

const StyledJobPostings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

interface JobPostingProps {
  jobPosts: {
    items: {
      fields: {
        title: string
        description: string
        location: string
        type: string
      }
    }[]
  }
}

export default function JobPostings({ jobPosts }: JobPostingProps) {
  const jobPostings = jobPosts.items.map((item: any) => {
    return (
      <Fragment key={item.sys.id}>
        <Line />
        <JobPost
          location={item.fields.location.toUpperCase()}
          time={item.fields.time.toUpperCase()}
          role={item.fields.role}
          department={item.fields.department.toUpperCase()}
        />
      </Fragment>
    )
  })

  return (
    <StyledJobPostings>
      {jobPostings}
      <Line />
    </StyledJobPostings>
  )
}
