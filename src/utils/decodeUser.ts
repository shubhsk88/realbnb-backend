import {prisma} from '../index'

export const decodeUser = async (id: string) => {
  try {
    return await prisma.user.findUnique({where: {id}, include: { address: true, rooms: true }})
  } catch (error) {
    console.log('Failed go find decoded user')
    return undefined
  }
}