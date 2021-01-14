import {prisma} from '..'

const roomtypes = ['Entire place', 'Private room', 'Shared room', 'Hotel Room']

const createRoomType = async (roomType: string) => {
  return await prisma.roomType.create({
    data: {
      name: roomType,
    },
  })
}
const runLoop = async () => {
  for (let room of roomtypes) {
    const data = await createRoomType(room)
    console.log(data)
  }
}

runLoop()
