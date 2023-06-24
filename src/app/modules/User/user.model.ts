import { Model, Schema, model } from 'mongoose';
import { IUser } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../../config';

type UserModel = Model<IUser, object>;

const UserSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    employee: {
      type: Schema.Types.ObjectId,
      ref: 'employee',
    },
    manager: {
      type: Schema.Types.ObjectId,
      ref: 'manager',
    },
    admin: {
      type: Schema.Types.ObjectId,
      ref: 'admin',
    },
  },
  { timestamps: true }
);

UserSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});

const User = model<IUser, UserModel>('user', UserSchema);
export default User;
