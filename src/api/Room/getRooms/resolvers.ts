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
            lists: true,
          },
        })
        const likedRooms = rooms.map(room => ({
          ...room,
          isLiked: context.user
            ? room.lists.some(list => list.userId === context.user?.id)
            : false,
        }))

        return {
          ok: true,
          rooms: likedRooms,
        }
      } catch (error) {
        return {ok: false, error: error.message}
      }
    },
  },
}

export default resolvers
