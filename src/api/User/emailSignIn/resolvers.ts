import {Resolvers} from '../../../../types/generated'
import {comparePassword, createToken} from '../../../../src/utils'

const resolvers: Resolvers = {
  Mutation: {
    emailSignIn: async (_, {email, password}, context) => {
      try {
        const user = await context.prisma.user.findUnique({
          where: {
            email,
          },
        })
        if (user && user.password && comparePassword(password, user.password)) {
          const token = createToken(user.id)
          return {
            ok: true,
            token,
          }
        } else {
          return {
            ok: false,
            error: 'Email or Password is invalid',
          }
        }
      } catch (error) {
        return {ok: false, error: error.message}
      }
    },
  },
}

export default resolvers
