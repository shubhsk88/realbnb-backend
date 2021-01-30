import {Resolvers} from '@/types/generated'

const resolvers: Resolvers = {
  Mutation: {
    updateList: async (_, {id, roomId}, {prisma, user}) => {
      if (!user)
        return {ok: false, error: 'Unauthorized Access: user not logged in'}

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

        if (!list?.id && !id)
          return {
            ok: true, // isn't inherently an error, treat as a warning
            error:
              'Warning: no instance for the given roomId was found, possible add operation with undefined list id argument "id" to add to, no action is possible',
          }

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
        if (!list?.id || (id && id !== list?.id)) {
          await prisma.list.update({
            include: {rooms: true},
            where: {id: id || ''},
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
