import {Resolvers} from '@/types/generated'

const resolvers: Resolvers = {
  Mutation: {
    deleteList: async (_, {id}, {prisma}) => {
      try {
        await prisma.list.delete({
          where: {id},
        })

        return {ok: true}
      } catch (error) {
        return {ok: false, error: error.message}
      }
    },
  },
}

export default resolvers
