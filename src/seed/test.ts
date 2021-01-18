import {prisma} from '..'

const test = async () => {
  const photo = await prisma.photo.findMany({select: {id: true, link: true}})
  console.log(photo.map(photo => photo.link))
}

test()
