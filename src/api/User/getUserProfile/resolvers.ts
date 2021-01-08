import {Resolvers} from '@/types/generated'

const resolvers: Resolvers = {
  Query: {
    getUserProfile: (_, __, context) => {
      if (!context.user) return {ok: false, error: 'The Unknown error occured'}
      return {ok: true, user: context.user}
    },
  },
}

export default resolvers
