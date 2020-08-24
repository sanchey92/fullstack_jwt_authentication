import {Schema, model, Document} from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

export interface IUser extends Document {
  name: string,
  email: string,
  password: string
}

const userSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true, minlength: 6}
})

userSchema.plugin(mongooseUniqueValidator);

export default model<IUser>('User', userSchema);