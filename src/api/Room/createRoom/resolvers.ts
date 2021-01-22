import {Resolvers} from '@/types/generated'

/*
const resolvers: Resolvers = {
  Mutation: {
    async createRoom(_, args, context) {
      if (!context.user || !context.user.isVerified)
        return {ok: false, error: 'Unknown error occurred on room creation'}

      // const rooms = context.user.rooms
      try {
        await context.prisma.user.update({
          where: {
            id: context.user.id,
          },
          data: {
            rooms: {
              // FIXME: join user.rooms, proper address & roomType definition
              create: {
                {
                  ...args,
                  address: {
                    create: {
                      city: '',
                      country: '',
                      address: '',
                    },
                  },
                  roomType: {
                    create: {name: ''},
                  },
                },
              },
            },
          },
        })
        return {ok: true}
      } catch (error) {
        return {ok: false, error: error.message}
      }
    },
  },
}

export default resolvers
*/
