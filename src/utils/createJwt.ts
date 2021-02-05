import jsonwebtoken from 'jsonwebtoken'
import dotenv from 'dotenv'
import {env} from './index'

dotenv.config()
export const createToken = (id: string): string => {
  return jsonwebtoken.sign({id}, env('JWT_SECRET_KEY'), {
    algorithm: 'HS256',
    expiresIn: '1d',
  })
}
