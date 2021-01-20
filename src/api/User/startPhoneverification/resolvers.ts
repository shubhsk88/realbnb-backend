import {createSms} from '@/src/utils'
import {Resolvers} from '@/types/generated'

const resolvers: Resolvers = {
  Mutation: {
    startPhoneVerification: async (_, {phoneNumber}, context) => {
      try {
        const token = await createSms(phoneNumber)
        const exist = await context.prisma.verification.findUnique({
          where: {payload: phoneNumber},
        })
        if (!exist) {
          await context.prisma.verification.create({
            data: {
              payload: phoneNumber,
              key: token,
            },
          })
        } else {
          await context.prisma.verification.update({
            where: {payload: phoneNumber},
            data: {key: token},
          })
        }
        return {ok: true, token}
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
