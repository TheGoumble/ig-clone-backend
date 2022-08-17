import { db } from "../db/db"
import { Photo } from "../models/photo"

interface PhotoServices {
  //   photoServices
  createPhoto(photo: Photo): Promise<string>
  getAll(): Promise<Photo[]>
}
const photosCollection = db.collection<Photo>("photos")

export const getAllPhotos = async (): Promise<Photo[]> => {
  const photos = await photosCollection.find().toArray()

  return photos
}

export const createPhoto = async (photo: Photo): Promise<string> => {
  try {
    const res = await photosCollection.insertOne(photo)
    return res.insertedId.toString()
  } catch (error) {
    return "Something went wrong"
  }
}

// export const updateLikes = async (id:string, inc: number = 1): Promise<Photo> => {

// }

// export const createComment = async (id: string, comment: string): Promise<Photo> => {
//     return await
// }

export const PhotoServices: PhotoServices = {
  getAllPhotos,
  createPhoto,
  //   createComment,
}
