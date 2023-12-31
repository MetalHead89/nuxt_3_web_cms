import mongoose from 'mongoose'

const { mongodbUri } = useRuntimeConfig()

export default defineNitroPlugin(() => {
  mongoose.connect(mongodbUri)
    .then(() => {
      console.log('Connected to MongoDB')
    })
    .catch(error => {
      console.error('Error MongoDB connect: ', error)
    })
})
