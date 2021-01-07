import jsonwebtoken from "jsonwebtoken"
import dotenv from "dotenv"
import {prisma} from '../../src/index'
import env from "./fetchEnv"

dotenv.config()
const decodeToken = (token: string) => {
  try {
    return jsonwebtoken.verify(token, env(process.env.JWT_SECRET_KEY))
  } catch (error) {
    console.log("Failed to verify token")
    return undefined
  }
}

const decodeUser = async (token: string) => {
  try {
    const id = decodeToken(token)

    if(id) return await prisma.user.findUnique({ where: { id } })
    else return undefined
  } catch (error) {
    console.log("Failed go find decoded user")
  }
}

export default decodeUser