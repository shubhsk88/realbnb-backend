import {v2 as cloudinary} from 'cloudinary'

import fs from 'fs'
import {env} from './fetchEnv'

cloudinary.config({
  cloud_name: 'dnpwz5gdn',
  api_key: env('CLOUDINARY_API_KEY'),
  api_secret: env('CLOUDINARY_API_SECRET'),
})

export const createImageUpload = async (imageAddress: string) => {
  try {
    const imageLink = await cloudinary.uploader.upload(
      `room_photos/${imageAddress}`,
    )

    return imageLink.url
  } catch (error) {
    console.log(error)
    return undefined
  }
}

export function getRootPaths(contentPath = 'room_photos') {
  return fs
    .readdirSync(contentPath, {withFileTypes: true})
    .filter(file => file.isFile())
    .map(file => file.name)
}
