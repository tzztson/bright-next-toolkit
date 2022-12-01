import { useState } from 'react'
import styled from 'styled-components'
import { breakpoints } from '@/Styles/GlobalStyle'
import Button from '@/Atoms/Button'
import Input from '@/Atoms/Input'
import { H3 } from '@/Atoms/Typography'
import Textarea from '@/Atoms/Textarea'

const StyledForm = styled.form`
  @media ${breakpoints.mobileSm} {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    grid-template-areas:
      'header'
      'name'
      'email'
      'phone'
      'message'
      'button';
    gap: 1rem;
  }

  @media ${breakpoints.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      'header .'
      'name message'
      'email message'
      'phone button';
    gap: 1rem 2rem;
  }

  @media ${breakpoints.desktopSm} {
    gap: 1rem 5rem;
  }
`

export default function IndustryForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [phone, setPhone] = useState('')

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(e.target.value)
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const res = await fetch('/api/sendgrid', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        message,
        phone
      })
    })

    const { error } = await res.json()
    error ? console.log(error) : console.log('success')

    setName('')
    setEmail('')
    setMessage('')
    setPhone('')
  }

  return (
    <StyledForm id='form'>
      <H3 fontWeight={700}>Get a quote</H3>
      <Input
        name='name'
        placeholder='Name'
        type='text'
        value={name}
        isAutoComplete={false}
        onChange={handleNameChange}
        gridArea='name'
      />
      <Input
        name='email'
        placeholder='Email'
        type='text'
        value={email}
        isAutoComplete={false}
        onChange={handleEmailChange}
        gridArea='email'
      />
      <Input
        name='phone'
        placeholder='Phone'
        type='text'
        value={phone}
        isAutoComplete={false}
        onChange={handlePhoneChange}
        gridArea='phone'
      />
      <Textarea
        name='message'
        placeholder='Message'
        value={message}
        onChange={handleMessageChange}
        gridArea='message'
      />
      <Button type='submit' text='Send' handleClick={handleClick} />
    </StyledForm>
  )
}
