import {Resolvers} from '@/types/generated'

const resolvers: Resolvers = {
  Query: {
    getRoom: async (_, {id}, context) => {
      try {
        const room = await context.prisma.room.findUnique({
          where: {
            id,
          },
          include: {
            amenities: true,
            photos: true,
            facilities: true,
            roomType: true,
            houseRules: true,
            reviews: {
              include: {
                User: true,
              },
            },
            host: true,
          },
        })

        console.log(room)

        const aggregate = await context.prisma.review.aggregate({
          where: {
            roomId: id,
          },
          avg: {
            accuracy: true,
            communication: true,
            location: true,
            value: true,
            checkIn: true,
            averageRating: true,
          },
        })

        const averages = aggregate.avg
        return {
          ok: true,

          room: {
            ...room,
            averageRating: averages,
          },
        }
      } catch (error) {
        return {ok: false, error: error.message}
      }
    },
  },
}

export default resolvers
