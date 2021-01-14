import path from 'path'
import {loadFilesSync} from '@graphql-tools/load-files'
import {mergeTypeDefs, mergeResolvers} from '@graphql-tools/merge'
import {makeExecutableSchema} from 'apollo-server-express'
const typesArray = loadFilesSync(path.join(__dirname, '/api/**/**/*.graphql'))
const resolversArray = loadFilesSync(
  path.join(__dirname, '/api/**/**/resolvers.ts'),
)

const typeDefs = mergeTypeDefs(typesArray)
const resolvers = mergeResolvers(resolversArray)

const schema = makeExecutableSchema({typeDefs, resolvers})

export default schema
