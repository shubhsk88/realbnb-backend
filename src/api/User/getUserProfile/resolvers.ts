import {Resolvers} from '../../../../types/generated'

const resolvers: Resolvers = {
  Query: {
    getUserProfile: (_, __, context) => {
      if (!context.user) return {ok: false, error: 'Unknown error occurred'}
      return {ok: true, user: context.user}
    },
  },
}

export default resolvers
