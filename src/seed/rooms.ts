import {prisma} from '..'
import {build, fake} from '@jackfranklin/test-data-bot'
// import {randomInt, randomSelection} from '../utils/random'
// import {Room} from '@prisma/client'

const checkIn = fake(field => field.date.future())

const createRoomFields = build('Room', {
  fields: {
    price: fake(
      field => 40 + field.random.number(80) + field.random.number(99) / 100,
    ),
    beds: fake(field => field.random.number(3)),
    bedrooms: fake(field => field.random.number(2) + 1),
    bathrooms: fake(
      field => field.random.number(2) + 1 + field.random.number(1) * 0.5,
    ),
    guests: fake(field => field.random.number(3) + 1),
    checkIn,
    // TODO: have this properly pick between
    // checkOut: fake(field => field.date.between(new Date(checkIn), field.date.future()))
    checkOut: fake(field => field.date.future()),
    description: fake(field => field.lorem.lines(4)),
    instantBook: fake(field => field.random.boolean()),
  },
})

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

// FIXME: unique fields (address, photo, etc need proper randomization so they don't collide)
const createRoom = async () => {
  const room = createRoomFields() as RoomFields

  const users = await prisma.user.findMany({select: {id: true}})
  const host = users[Math.floor(Math.random() * users.length - 2)]
  // const host = randomSelection(users, 1)

  const addresses = await prisma.address.findMany({select: {id: true}})
  const address = addresses[Math.floor(Math.random() * addresses.length - 2)]
  // const address = randomSelection(addresses, 1)

  const roomTypes = await prisma.roomType.findMany({select: {id: true}})
  const roomType = roomTypes[Math.floor(Math.random() * roomTypes.length - 2)]
  //const roomType = randomSelection(roomTypes, 1)

  const houseRules = await prisma.houseRule.findMany({select: {id: true}})
  const numHouseRules = Math.floor(Math.random() * houseRules.length - 1) + 1
  // randomSelection(houseRules, randomInt(0, Math.max(3, houseRules.length)))

  const amenities = await prisma.amenity.findMany({select: {id: true}})
  const numAmenities = Math.floor(Math.random() * amenities.length - 1) + 1

  const facilities = await prisma.facility.findMany({select: {id: true}})
  const numFacilities = Math.floor(Math.random() * facilities.length - 1) + 1

  const numPhotos = Math.floor(Math.random() * 26) + 3
  const photos = await prisma.photo.findMany({
    select: {id: true},
  })

  await prisma.room.create({
    data: {
      ...room,
      // TODO: reference selected address
      name: `Fake random house`,
      host: {
        connect: {id: host.id},
      },
      address: {
        connect: {id: address.id},
      },
      roomType: {
        connect: {id: roomType.id},
      },
      houseRules: {
        connect: houseRules.slice(numHouseRules),
      },
      amenities: {
        connect: amenities.slice(numAmenities),
      },
      facilities: {
        connect: facilities.slice(numFacilities),
      },
      photos: {
        connect: photos.slice(numPhotos),
      },
    },
  })
}

for (let i = 0; i < 1; i++) createRoom()
