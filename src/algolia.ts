import algoliasearch from 'algoliasearch'
import {env} from './utils/fetchEnv'
import {prisma} from './index'
const client = algoliasearch(
  env('ALGOLIA_APPLICATION_ID'),
  env('ALGOLIA_ADMIN_KEY'),
)

const index = client.initIndex('dev_realbnb')

const uploadRooms = async () => {
  const data = await prisma.room.findMany({
    include: {
      address: true,
      amenities: true,
      roomType: true,
      photos: true,
      houseRules: true,
      facilities: true,
    },
  })
  return index.saveObjects(data, {autoGenerateObjectIDIfNotExist: true})
}

uploadRooms()
