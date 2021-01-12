import {getRootPaths, createImageUpload} from '@/src/utils/imageUpload'
import {prisma} from '..'
const imageList = getRootPaths()

const runLoop = async () => {
  imageList.forEach(async (image, index) => {
    try {
      const imageLink = await createImageUpload(image)
      if (imageLink) {
        await prisma.photo.create({
          data: {
            link: imageLink,
            caption: `Room Photo no ${index}`,
          },
        })
      }
    } catch (error) {
      console.log(error.message)
    }
  })
}

runLoop()
