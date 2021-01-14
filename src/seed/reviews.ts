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
export const selectRandom = (len: number) => Math.floor(Math.random() * len)

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

  for (let i = 0; i < 20; i++) {
    const reviewFields = createReviewFields() as ReviewFields
    const randomUserIndex = selectRandom(users.length)
    const randomRoomsIndex = selectRandom(rooms.length)
    const user = users[randomUserIndex]
    const room = rooms[randomRoomsIndex]
    await prisma.review.create({
      data: {
        ...reviewFields,
        User: {
          connect: {id: user.id},
        },
        Room: {
          connect: {id: room.id},
        },
      },
    })
  }
}

createReview()
