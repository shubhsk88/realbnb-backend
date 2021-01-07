import {Context} from 'src'
import {CompletePhoneVerificationResponse, Resolvers} from 'src/generated/types'

const resolvers: Resolvers = {
  Mutation: {
    completePhoneVerification: async (
      _,
      {phoneNumber, key},
      context: Context,
    ): Promise<CompletePhoneVerificationResponse> => {
      try {
        const foundNumber = await context.prisma.verification.findUnique({
          where: {payload: phoneNumber},
        })
        if (!foundNumber) return {ok: false, error: 'Phone Number not found'}
        if (foundNumber.key !== key)
          return {ok: false, error: 'The verification code is incorrect'}
        return {ok: true}
      } catch (error) {
        return {ok: false, error: error.message}
      }
    },
  },
}

export default resolvers
