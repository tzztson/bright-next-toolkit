import styled from 'styled-components'

const SelectStyled = styled.select``

interface Select {
  name: string
  options: string[]
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function Select({
  name = 'select',
  options = ['option 1', 'option 2', 'option 3'],
  handleChange = () => {},
  ...rest
}: Select) {
  const output = options.map(option => (
    <option key={option} value={option}>
      {option}
    </option>
  ))
  return (
    <SelectStyled name={name} onChange={handleChange} {...rest}>
      {output}
    </SelectStyled>
  )
}
