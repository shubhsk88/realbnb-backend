import { nonNullable } from '@/src/utils'
import {Resolvers} from '@/types/generated'

const resolvers: Resolvers = {
  Mutation: {
    editProfile: async (_, {address, ...args}, {prisma, user}) => {
      if (!user) {
        return {ok: false, error: 'Unauthorized Request'}
      }
    const inputData=nonNullable(args)
      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          address: {
            update: {
              address: address || '',
            },
          },
          ...args,
        },
      })
    },
  },
}

export default resolvers
