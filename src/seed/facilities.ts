import {prisma} from '..'

const Facilitypes = ['Free parking on premises', 'Gym', 'Hot tub', 'Pool']

const createFacilitype = async (Facilitype: string) => {
  return await prisma.facility.create({
    data: {
      name: Facilitype,
    },
  })
}
const runLoop = async () => {
  for (let room of Facilitypes) {
    const data = await createFacilitype(room)
    console.log(data)
  }
}

runLoop()
