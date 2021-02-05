import {prisma} from '..'
import {build, fake} from '@jackfranklin/test-data-bot'
import {randomInt, randomSelection} from '../utils/random'
interface RoomFields {
  price: number
  beds: number
  bedrooms: number
  bathrooms: number
  guests: number
  checkIn: Date
  checkOut: Date
  description: string
}

const checkIn = fake(field => field.date.future())

const createRoomFields = build('Room', {
  fields: {
    price: fake(
      field => 40 + field.random.number(80) + field.random.number(99) / 100,
    ),
    beds: fake(field => field.random.number(3) + 1),
    bedrooms: fake(field => field.random.number(2) + 1),
    bathrooms: fake(
      field => field.random.number(2) + 1 + field.random.number(1) * 0.5,
    ),
    guests: fake(field => field.random.number(3) + 1),
    checkIn,
    // TODO: have this properly pick between
    // checkOut: fake(field => field.date.between(checkIn, field.date.future(1))),
    checkOut: fake(field => field.date.future()),
    description: fake(field => field.lorem.lines(4)),
    instantBook: fake(field => field.random.boolean()),
  },
})

interface RoomLists {
  users: {id: string}[]
  address: {id: string; address: string} | undefined
  photos: {id: string}[]
  roomTypes: {id: number}[]
  houseRules: {id: number}[]
  amenities: {id: number}[]
  facilities: {id: number}[]
}

const createRoom = async ({
  users,
  address,
  photos,
  roomTypes,
  houseRules,
  amenities,
  facilities,
}: RoomLists) => {
  const room = createRoomFields() as RoomFields

  // Choose one of any
  const host = randomSelection(users, 1)
  const roomType = randomSelection(roomTypes, 1)

  // Choose one, unique
  const addressName = address?.address ?? 'Error'

  // Choose some of any
  const numHouseRules = randomInt(0, houseRules.length)
  const houseRuleSet = randomSelection(houseRules, numHouseRules)

  const numAmenities = randomInt(0, amenities.length)
  const amenitySet = randomSelection(amenities, numAmenities)

  const numFacilities = randomInt(0, facilities.length)
  const facilitySet = randomSelection(facilities, numFacilities)

  // Choose some of any (preferably unique if large image set is available)
  // currently implemented behavior is not unique
  const photoSet = randomSelection(photos, 6)

  const data = await prisma.room.create({
    data: {
      ...room,
      name: addressName?.substring(addressName.indexOf(' ')),
      host: {
        connect: host,
      },
      address: {
        connect: {id: address?.id},
      },
      roomType: {
        connect: roomType,
      },
      houseRules: {
        connect: houseRuleSet,
      },
      amenities: {
        connect: amenitySet,
      },
      facilities: {
        connect: facilitySet,
      },
      photos: {
        connect: photoSet,
      },
    },
  })

  return data
}

const createRooms = async (numRooms: number) => {
  // Variable
  const users = await prisma.user.findMany({select: {id: true}})

  // Variable, Unique
  const addresses = await prisma.address.findMany({
    select: {id: true, address: true},
  })

  // FIXME: this doesn't catch addresses reused in multiple runs, needs to check against currently used
  // addresses from rooms too using prisma.room.findMany({select: {id: true}})
  if (addresses.length < numRooms) {
    throw new Error(
      'Trying to create more rooms than available there exists of unique addresses, try creating more addresses or creating less rooms',
    )
  }

  // Constant
  const roomTypes = await prisma.roomType.findMany({select: {id: true}})
  const houseRules = await prisma.houseRule.findMany({select: {id: true}})
  const amenities = await prisma.amenity.findMany({select: {id: true}})
  const facilities = await prisma.facility.findMany({select: {id: true}})
  const photos = await prisma.photo.findMany({select: {id: true}})

  for (let i = 0; i < numRooms; i++) {
    const address = addresses.pop()

    const data = await createRoom({
      users,
      address,
      photos,
      roomTypes,
      houseRules,
      amenities,
      facilities,
    })

    const result = await prisma.room.findUnique({
      where: {id: data.id},
      include: {
        host: true,
        address: true,
        photos: true,
        roomType: true,
        houseRules: true,
        amenities: true,
        facilities: true,
      },
    })

    console.log({...result}, `\n${'-'.repeat(50)}\n`)
  }
}

createRooms(14)
