import {IResolvers} from 'apollo-server-express'

const resolvers: IResolvers = {
  Query: {
    hello: () => 'Hello',
  },
}

export default resolvers
