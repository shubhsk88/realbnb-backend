import {DateTimeResolver} from 'graphql-scalars'
import {encodePassword, createToken} from '@/src/utils'
import {Resolvers} from '@/types/generated'

const resolvers: Resolvers = {
  DateTime: DateTimeResolver,
  Mutation: {
    createUserViaPhone: async (_, {password, ...input}, context) => {
      const hashedPassword = encodePassword(password)
      try {
        const {id} = await context.prisma.user.create({
          data: {...input, password: hashedPassword},
        })
        return {ok: true, token: createToken(id)}
      } catch (error) {
        return {ok: false, error: error.message}
      }
    },
  },
}

export default resolvers
