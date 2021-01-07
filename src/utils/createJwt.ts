import jsonwebtoken from "jsonwebtoken"
import dotenv from "dotenv"
import env from "./fetchEnv"

dotenv.config()
const createToken = (id: string):string => {
  return jsonwebtoken.sign(id, env(process.env.JWT_SECRET_KEY))
}

export default createToken