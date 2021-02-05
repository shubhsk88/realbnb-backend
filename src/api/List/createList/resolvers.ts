import {Resolvers} from '../../../../types/generated'

const resolvers: Resolvers = {
  Mutation: {
    createList: async (_, {name, roomId}, {prisma, user}) => {
      if (!user)
        return {ok: false, error: 'Unauthorized Access: user not logged in'}

      try {
        const {id} = await prisma.list.create({
          data: {
            name,
            userId: user.id,
          },
        })
        if (roomId) {
          await prisma.list.update({
            where: {
              id,
            },
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
