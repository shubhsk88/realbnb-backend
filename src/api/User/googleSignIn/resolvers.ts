import {createToken} from '@/src/utils'
import {Resolvers} from '@/types/generated'

const resolvers: Resolvers = {
  Mutation: {
    googleSignIn: async (_, {googleId, email, ...userInfo}, context) => {
      try {
        const existingUser = await context.prisma.user.findUnique({
          where: {
            email,
          },
        })

        if (existingUser) {
          await context.prisma.user.update({
            where: {
              email,
            },
            data: {
              googleId
            },
          })
          const token = createToken(existingUser.id)
          return {ok: true, token}
        } else {
          const user = await context.prisma.user.create({
            data: {
              ...userInfo,
              googleId,
              email,
            },
          })
          const token = createToken(user.id)
          return {ok: true, token}
        }
      } catch (error) {
        return {ok: false, error: error.message}
      }
    },
  },
}

export default resolvers
