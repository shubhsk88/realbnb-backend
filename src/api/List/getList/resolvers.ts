import {Resolvers} from '@/types/generated'

const resolvers: Resolvers = {
  Query: {
    getList: async (_, __, {prisma, user}) => {
      if (!user) return {ok: false, error: 'Unauthorized acess'}

      try {
        const lists = prisma.list.findMany({
          where: {
            userId: user.id,
          },
          include: {
            rooms: true,
          },
        })
        return {ok: true, lists}
      } catch (error) {
        return {ok: false, error: error.message}
      }
    },
  },
}

export default resolvers
