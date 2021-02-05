import {Resolvers} from '../../../../types/generated'

const resolvers: Resolvers = {
  Mutation: {
    createReservation: async (_, args, context) => {
      try {
        await context.prisma.reservation.create({
          data: {
            ...args,
            status: 'success',
            guestId: context.user.id,
          },
        })

        return {ok: true}
      } catch (error) {
        return {
          ok: false,
          error: error.message,
        }
      }
    },
  },
}

export default resolvers
