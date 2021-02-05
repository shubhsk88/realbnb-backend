import {prisma} from '..'

const facilityTypes = ['Free parking on premises', 'Gym', 'Hot tub', 'Pool']

const createFacilityType = async (facilityName: string) => {
  return await prisma.facility.create({
    data: {
      name: facilityName,
    },
  })
}

facilityTypes.forEach(async facility => {
  const data = await createFacilityType(facility)
  console.log(data)
})
