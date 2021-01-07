import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import schema from './schema'

const server = new ApolloServer({schema})
const app = express()
server.applyMiddleware({app})

app.listen(4000, () => console.log(`Server running on 4000  🚀 `))
