import {createSms} from '../../../utils'
import {Resolvers, PhoneVerificationResponse} from '../../../generated/types'
import {Context} from '../../../index'

const resolvers: Resolvers = {
  Query: {
    hello: () => 'Hello',
  },
  Mutation: {
    phoneVerification: async (
      _,
      {phoneNumber},
      context: Context,
    ): Promise<PhoneVerificationResponse> => {
      try {
        const key = await createSms(phoneNumber)
        const exist = await context.prisma.verification.findUnique({
          where: {payload: phoneNumber},
        })
        if (!exist) {
          await context.prisma.verification.create({
            data: {
              payload: phoneNumber,
              key,
            },
          })
        } else {
          await context.prisma.verification.update({
            where: {payload: phoneNumber},
            data: {key},
          })
        }
        return {ok: true}
      } catch (error) {
        return {
          ok: false,
          error: error.message,
        }
      }
    },
  },
}

export default resolvers
