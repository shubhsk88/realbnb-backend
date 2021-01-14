import {prisma} from '..'
import {build, fake} from '@jackfranklin/test-data-bot'
import {Address} from '@prisma/client'

const createAddress = build('Address', {
  fields: {
    country: fake(field => field.address.country()),
    city: fake(field => field.address.city()),
    address: fake(field => field.address.streetAddress()),
  },
})

const runLoop = async () => {
  for (let i = 0; i < 20; i++) {
    const address = createAddress() as Address
    await prisma.address.create({
      data: address,
    })
  }
}

runLoop()
