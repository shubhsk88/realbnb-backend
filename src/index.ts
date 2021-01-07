import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
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
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
server.applyMiddleware({app, cors: false})

app.listen(port, () => console.log(`Server running on ${port}  🚀 `))
