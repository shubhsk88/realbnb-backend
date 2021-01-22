import {Resolvers} from '@/types/generated'
import stripe from '../../../stripe'

const resolvers: Resolvers = {
  Mutation: {
    createPayment: async (_, {reservation, currency}) => {
      const price = reservation.price

      try {
        const paymentIntent = await stripe.paymentIntents.create({
          amount: price,
          currency,
        })
        console.log(paymentIntent)
        if (paymentIntent.client_secret)
          return {ok: true, clientSecret: paymentIntent.client_secret}
        else return {ok: false, error: 'The payment failed'}
      } catch (error) {
        return {
          ok: false,
          error: error.message,
        }
      }
      return {ok: false, error: 'blaha blah'}
    },
  },
}

export default resolvers
