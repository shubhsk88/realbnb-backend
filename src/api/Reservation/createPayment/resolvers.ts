import {Resolvers} from '../../../../types/generated'
import stripe from '../../../stripe'

const resolvers: Resolvers = {
  Mutation: {
    createPayment: async (_, {reservation, currency}) => {
      const price = reservation.price
      const updatedCurrency = currency || 'usd'

      try {
        const paymentIntent = await stripe.paymentIntents.create({
          amount: price,
          currency: updatedCurrency,
        })
        console.log(paymentIntent)
        if (paymentIntent.client_secret)
          return {ok: true, clientSecret: paymentIntent.client_secret}
        else return {ok: false, error: 'Unexpected Error occured'}
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
