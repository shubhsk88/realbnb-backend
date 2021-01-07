import {DateTimeResolver} from 'graphql-scalars'
import {CreateUserViaPhoneResponse, Resolvers} from 'src/generated/types'
import {Context} from '../../../index'
import createToken from '../../../utils/createJwt'

const resolvers: Resolvers = {
  DateTime: DateTimeResolver,
  Mutation: {
    createUserViaPhone: async (
      _,
      userProps,
      context: Context,
    ): Promise<CreateUserViaPhoneResponse> => {
      try {
        const {id} = await context.prisma.user.create({
          data: {...userProps, isVerified: true},
        })
        return {ok: true, token: createToken(id)}
      } catch (error) {
        return {ok: false, error: error.message}
      }
    },
  },
}

export default resolvers
