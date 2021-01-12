import {prisma} from '..'
import {build, fake} from '@jackfranklin/test-data-bot'

const createReviewFields = build('Review', {
  fields: {
    content: fake(field => field.lorem.lines(4)),
    accuracy: fake(field => field.random.number(5)),
    location: fake(field => field.random.number(5)),
    communication: fake(field => field.random.number(5)),
    checkIn: fake(field => field.random.number(5)),
    value: fake(field => field.random.number(5)),
  },
})

interface ReviewFields {
  content: string
  accuracy: number
  location: number
  communication: number
  checkIn: number
  value: number
}

const createReview = async () => {
  const user = await prisma.user.findFirst()
  const room = await prisma.room.findFirst()

  const reviewFields = createReviewFields() as ReviewFields

  await prisma.review.create({
    data: {
      ...reviewFields,
      User: {
        connect: {id: user?.id},
      },
      Room: {
        connect: {id: room?.id},
      },
    },
  })
}

createReview()
