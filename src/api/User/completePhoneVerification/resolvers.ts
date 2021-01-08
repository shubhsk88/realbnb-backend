import {Resolvers} from 'types/generated'

const resolvers: Resolvers = {
  Mutation: {
    completePhoneVerification: async (_, {phoneNumber, key}, context) => {
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
