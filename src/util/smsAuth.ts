import twilio from 'twilio'
import { customAlphabet } from 'nanoid'

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken)

const nanoid = customAlphabet('1234567890', 4);

const smsAuth = (phoneNum: string) => {
  const id = nanoid()

  client.messages.create({
    body: `Your verification code is ${id}`,
    from: process.env.TWILIO_NUMBER,
    to: phoneNum
  })

  return id
}

export default smsAuth