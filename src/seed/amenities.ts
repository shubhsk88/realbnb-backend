import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()
const amenities = [
  'Kitchen',
  'Shampoo',
  'Heating',
  'Air conditioning',
  'Washing machine',
  'Dryer',
  'Wifi',
  'Breakfast',
  'Indoor fireplace',
  'Hangers',
  'Iron',
  'Hair dryer',
  'Dedicated workspace',
  'TV',
  'Cot',
  'High chair',
  'Self check-in',
  'Smoke alarm',
  'Carbon monoxide alarm',
  'Private bathroom',
  'Piano',
  'Beachfront',
  'Waterfront',
  'Ski-in/ski-out',
]

const createAmenities = async (amenity: string) => {
  return await prisma.amenity.create({
    data: {
      name: amenity,
    },
  })
}

amenities.forEach(async amenity => {
  const data = await createAmenities(amenity)
  
})
