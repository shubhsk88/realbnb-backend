import {getRootPaths, createImageUpload} from '@/src/utils/imageUpload'
import {prisma} from '..'
const imageList = getRootPaths()

// TODO: make room caption more meaningful
imageList.forEach(async (image, index) => {
  try {
    const imageLink = await createImageUpload(image)

    if (imageLink) {
      const data = await prisma.photo.create({
        data: {
          link: imageLink,
          caption: `Room photo ${index}`,
        },
      })
      console.log(data)
    }
  } catch (error) {
    console.log(error.message)
  }
})
