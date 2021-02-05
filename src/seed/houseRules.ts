import {prisma} from '..'

const houseRules = ['No Smoking', 'No Pets']

const createHouseRule = async (ruleName: string) => {
  return await prisma.houseRule.create({
    data: {
      name: ruleName,
    },
  })
}

houseRules.forEach(async rule => {
  const data = await createHouseRule(rule)
  console.log(data)
})
