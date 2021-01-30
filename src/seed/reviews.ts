import {prisma} from '..'
import {build, fake} from '@jackfranklin/test-data-bot'
import {randomSelection} from '../utils/random'

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
  const users = await prisma.user.findMany({select: {id: true}})
  const rooms = await prisma.room.findMany({select: {id: true}})

  for (let i = 0; i < rooms.length * 5; i++) {
    const reviewFields = createReviewFields() as ReviewFields

    const user = randomSelection(users, 1)
    const room = randomSelection(rooms, 1)

    const data = await prisma.review.create({
      data: {
        ...reviewFields,
        User: {
          connect: user,
        },
        Room: {
          connect: room,
        },
      },
    })
    console.log(data)
  }
}

createReview()
