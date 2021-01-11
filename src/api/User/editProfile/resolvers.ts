import {Resolvers} from '@/types/generated'
import { nonNullable } from '@/src/utils'

const resolvers: Resolvers = {
  Mutation: {
    editProfile: async (_, {address, ...args}, {prisma, user}) => {
      if (!user) {
        return {ok: false, error: 'Unauthorized Request'}
      }
      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          ...nonNullable(args),
          address: {
            upsert: {
              update: {
                address: address || '',
              },
              create: {
                address: address || '',
                city: '',
                country: ''
              }
            }
          },
        },
      })

      /* if(address && user.addressId) {
        await prisma.user.update({
          where: {
            id: user.id
          },
          data: {
            address: {
              update: {
                address: address || '',
              },
            },
          }
        })
      } else {
        await prisma.user.creat
      } */

      return { ok: true }
    },
  },
}

export default resolvers
