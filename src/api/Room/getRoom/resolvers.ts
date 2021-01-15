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
            reviews: true,
            host: true,
          },
        })
        const aggregate = await context.prisma.review.aggregate({
          where: {
            roomId: id,
          },
          avg: {
            checkIn: true,
            communication: true,
          },
        })
        console.log(aggregate)
        return {ok: true, room}
      } catch (error) {
        return {ok: false, error: error.message}
      }
    },
  },
}

export default resolvers
