import {Resolvers} from '@/types/generated'

const resolvers: Resolvers = {
  Query: {
    getRooms: async (_, __, context) => {
      try {
        const rooms = await context.prisma.room.findMany({
          include: {
            photos: true,
            roomType: true,
            amenities: true,
            facilities: true,
          },
        })
        return {ok: true, rooms}
      } catch (error) {
        return {ok: false, error: error.message}
      }
    },
  },
}

export default resolvers
