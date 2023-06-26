import mongoose from 'mongoose';
import { IManager } from './manager.interface';
import { Manager } from './manager.model';
import User from '../User/user.model';

const getAllManager = async (): Promise<IManager[] | null | unknown> => {
  const result = await Manager.find({}).populate('employees');
  return result;
};

const getSingleManager = async (
  id: string
): Promise<IManager | null | unknown> => {
  const result = await Manager.findById(id).populate('employees');
  return result;
};

const updateManager = async (id: string, payload: Partial<IManager>) => {
  const result = await Manager.updateOne({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteSingleManager = async (id: string) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const deleteManager = await Manager.deleteOne({ id: id }, { session });
    const deleteUser = await User.deleteOne({ id: id }, { session });

    const deletedData = {
      employee: deleteManager,
      user: deleteUser,
    };
    await session.commitTransaction();
    await session.endSession();
    return deletedData;
  } catch (error) {
    session.abortTransaction();
    session.endSession();
  }
};

export const ManagerServices = {
  getAllManager,
  getSingleManager,
  updateManager,
  deleteSingleManager,
};
