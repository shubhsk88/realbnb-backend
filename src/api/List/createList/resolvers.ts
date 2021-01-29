import {Resolvers} from '@/types/generated'

const resolvers: Resolvers = {
  Mutation: {
    createList: async (_, args, {prisma, user}) => {
      if (!user)
        return {ok: false, error: 'You are not logged in.Please log in'}
      const {name, roomId} = args
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
