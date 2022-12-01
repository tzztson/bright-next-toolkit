import type { NextApiRequest, NextApiResponse } from 'next'
import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message, phone } = req.body

  try {
    await sendgrid.send({
      to: 'david@bright-development.com',
      from: 'sales@bright-development.com',
      subject: `Sales Inquiry from ${req.body.name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
        `
    })
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  return res.status(200).json({ error: '' })
}

export default sendEmail
