import {prisma} from '..'
import {build, fake} from '@jackfranklin/test-data-bot'
import {randomInt, randomSelection, shuffle} from '../utils/random'
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
  addresses: {id: string; address: string}[]
  photos: {id: string}[]
  roomTypes: {id: number}[]
  houseRules: {id: number}[]
  amenities: {id: number}[]
  facilities: {id: number}[]
}

const createRoom = async ({
  users,
  addresses,
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
  const address = addresses.pop()
  const addressName = address?.address ?? ''

  // Choose some of any
  const numHouseRules = randomInt(0, houseRules.length - 1)
  const houseRuleSet = randomSelection(houseRules, numHouseRules)

  const numAmenities = randomInt(0, amenities.length - 1)
  const amenitySet = randomSelection(amenities, numAmenities)

  const numFacilities = randomInt(0, facilities.length - 1)
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

const createRooms = async () => {
  // Variable
  const users = await prisma.user.findMany({select: {id: true}})

  // Variable Unique
  const addresses = await prisma.address.findMany({
    select: {id: true, address: true},
  })

  // Constant
  const roomTypes = await prisma.roomType.findMany({select: {id: true}})

  const houseRules = await prisma.houseRule.findMany({select: {id: true}})
  const amenities = await prisma.amenity.findMany({select: {id: true}})
  const facilities = await prisma.facility.findMany({select: {id: true}})
  const photos = await prisma.photo.findMany({select: {id: true}})

  for (let i = 0; i < 14; i++) {
    const data = await createRoom({
      users,
      addresses,
      photos,
      roomTypes,
      houseRules,
      amenities,
      facilities,
    })
    console.log(data, '\n')
  }
}

createRooms()
