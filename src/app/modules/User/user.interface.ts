import { Model, Types } from 'mongoose';

export type IUser = {
  id: string;
  role: string;
  password: string;
  employee?: Types.ObjectId;
  manager?: Types.ObjectId;
  admin?: Types.ObjectId;
};

export type UserModel = {
  isUserExist(id: string): Promise<Pick<IUser, 'id' | 'password' | 'role'>>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<IUser>;
