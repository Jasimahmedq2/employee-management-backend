import { Types } from 'mongoose';

export type IUser = {
  id: string;
  role: string;
  password: string;
  employee?: Types.ObjectId;
  manager?: Types.ObjectId;
  admin?: Types.ObjectId;
};
