import { Schema, model } from 'mongoose'

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

export const User = model('users', UserSchema)
