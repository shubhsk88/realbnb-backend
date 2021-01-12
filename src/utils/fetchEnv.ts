import dotenv from 'dotenv'

dotenv.config()

export const env = (val: string): string => {
  return process.env[val] || ''
}
