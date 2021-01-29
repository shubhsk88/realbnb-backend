import {Resolvers} from '@/types/generated'

const resolvers: Resolvers = {
  Mutation: {
    updateList: async (_, {id, roomId}, {prisma, user}) => {
      if (!user) return {ok: false, error: 'User not logged in'}

      try {
        const list = await prisma.list.findFirst({
          include: {rooms: true},
          where: {
            userId: user.id,
            rooms: {
              some: {
                id: roomId,
              },
            },
          },
        })

        // if room exists in any of users lists, remove it
        if (list?.id) {
          await prisma.list.update({
            include: {rooms: true},
            where: {id: list.id},
            data: {
              rooms: {
                disconnect: {id: roomId},
              },
            },
          })
        }

        // If room isn't in any of users list or needs to swap add it to the selected list
        if (!list?.id || id !== list.id) {
          await prisma.list.update({
            include: {rooms: true},
            where: {id},
            data: {
              rooms: {
                connect: {id: roomId},
              },
            },
          })
        }

        return {ok: true}
      } catch (error) {
        return {ok: false, error: error.message}
      }
    },
  },
}

export default resolvers
