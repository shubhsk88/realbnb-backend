import {Resolvers} from '@/types/generated'

const resolvers: Resolvers = {
  Query: {
    getList: async (_, __, {prisma, user}) => {
      if (!user)
        return {ok: false, error: 'Unauthorized Access: user not logged in'}

      try {
        const lists = await prisma.list.findMany({
          where: {
            userId: user.id,
          },
          include: {
            rooms: {
              include: {
                photos: true,
                roomType: true,
              },
            },
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
