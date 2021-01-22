import Stripe from 'stripe'
import {env} from './utils'

const stripe = new Stripe(env('STRIPE_KEY'), {
  apiVersion: '2020-08-27',
  typescript: true,
})


export default stripe
