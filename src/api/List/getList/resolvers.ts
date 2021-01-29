import {Resolvers} from '@/types/generated'

const resolvers: Resolvers = {
  Query: {
    getList: async (_, __, {prisma, user}) => {
      if (!user) return {ok: false, error: 'Unauthorized acess'}
      try {
        const lists = await prisma.user.findUnique({
          where: {
            id: user.id,
          },
          include: {
            lists: {
              include: {
                rooms: true,
              },
            },
          },
        })
        return {ok: true, lists: lists}
      } catch (error) {
        return {ok: false, error: error.message}
      }
    },
  },
}

export default resolvers
