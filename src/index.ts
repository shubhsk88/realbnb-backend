import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import dotenv from 'dotenv'
import schema from './schema'
import {PrismaClient} from '@prisma/client'

dotenv.config()

const port = process.env.PORT
const prisma = new PrismaClient()
const server = new ApolloServer({
  schema,
  context: {
    prisma,
  },
})
const app = express()
server.applyMiddleware({app})

app.listen(port, () => console.log(`Server running on ${port}  🚀 `))
