import express from 'express'
import {User} from '@prisma/client'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import {ApolloServer} from 'apollo-server-express'
import dotenv from 'dotenv'
import schema from './schema'

import {PrismaClient} from '@prisma/client'
import expressJwt from 'express-jwt'
import {env, decodeUser} from '@/src/utils'

dotenv.config()

const port = process.env.PORT
const prisma = new PrismaClient()

prisma.$use(async (params, next) => {
  const mutationActions = ['create', 'update', 'delete']
  if (params.model === 'Review' && mutationActions.includes(params.action)) {
    const {accuracy, communication, location, value, checkIn} = params.args.data
    params.args.data.averageRating =
      (accuracy + communication + location + value + checkIn) / 5
  }

  const result = await next(params)

  return result
})

export interface Context {
  prisma: PrismaClient
  user: User
}

export {prisma}

interface ReqObject extends Request {
  user: User
}

const server = new ApolloServer({
  schema,
  context: async ({req}: {req: ReqObject}) => {
    const user = req.user ? await decodeUser(req.user.id) : null
    console.log(user)
    return {prisma, user}
  },
})

const app = express()
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(
  expressJwt({
    secret: env('JWT_SECRET_KEY'),
    credentialsRequired: false,
    algorithms: ['HS256'],
  }),
)
server.applyMiddleware({app, cors: false})

app.listen(port, () => console.log(`Server running on ${port}  🚀 `))
