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
            accuracy: true,
            communication: true,
            location: true,
            value: true,
            checkIn: true,
            averageRating: true,
          },
        })
        console.log(aggregate)
        const averages = aggregate.avg
        return {
          ok: true,
          room: {
            ...room,
            accuracyAvg: averages.accuracy,
            communicationAvg: averages.communication,
            locationAvg: averages.communication,
            value: averages.value,
            checkInAvg: averages.checkIn,
          },
        }
      } catch (error) {
        return {ok: false, error: error.message}
      }
    },
  },
}

export default resolvers
