import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import {ApolloServer} from 'apollo-server-express'
import dotenv from 'dotenv'
import schema from './schema'
import {PrismaClient} from '@prisma/client'
import expressJwt from "express-jwt"
import { env, decodeUser } from "@/src/utils"

dotenv.config()

const port = process.env.PORT
const prisma = new PrismaClient()

export interface Context {
  prisma: PrismaClient
}

export {prisma}

const server = new ApolloServer({
  schema,
  context: async ({ req: Req }) => {
    const user = await decodeUser(req.user.id)
    return { prisma, user }
  }
})
const app = express()
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(expressJwt({
  secret: env('JWT_SECRET_KEY'),
  credentialsRequired: false,
  algorithms: ["HS256"]
}))
server.applyMiddleware({app, cors: false})

app.listen(port, () => console.log(`Server running on ${port}  🚀 `))
