import {build, fake} from '@jackfranklin/test-data-bot'
import {prisma} from '..'

import {User} from '@prisma/client'

const num = Math.floor(Math.random() * 10)
const lang = ['en', 'hi', 'de', 'ko']
const fakeUser = build('User', {
  fields: {
    name: fake(user => user.name.findName()),
    email: fake(user => user.internet.email()),
    password: fake(user => user.internet.password()),
    birthDate: fake(user => user.date.past(30)),
    superhost: fake(user => user.random.boolean()),
    language: lang[Math.floor(Math.random()) * (lang.length - 1)],
    avatar: fake(user => user.image.avatar()),
    bio: fake(user => user.lorem.lines(num)),
    phone: fake(user => user.phone.phoneNumber()),
  },
})

const createUser = async () => {
  for (let i = 0; i < 20; i++) {
    const user = fakeUser() as User
    console.log(user.password)
    try {
      const data = await prisma.user.create({
        data: user,
      })
      console.log(data)
    } catch (error) {
      console.log(error.message)
    }
  }
}

createUser()
