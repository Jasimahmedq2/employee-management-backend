import mongoose from 'mongoose';
import { IAdmin } from './admin.interface';
import { Admin } from './admin.model';
import User from '../User/user.model';

const getAllAdmin = async (): Promise<IAdmin[] | null> => {
  const result = await Admin.find({})
    .populate('managers')
    .populate('employees');
  return result;
};

const getSingleAdmin = async (id: string): Promise<IAdmin | null> => {
  const result = await Admin.findById(id)
    .populate('managers')
    .populate('employees');
  return result;
};

const updateAdmin = async (id: string, payload: Partial<IAdmin>) => {
  const result = await Admin.updateOne({ _id: id }, payload, { new: true });
  return result;
};

const deleteSingleAdmin = async (id: string) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const deleteAdmin = await Admin.deleteOne({ id: id }, { session });
    const deleteUser = await User.deleteOne({ id: id }, { session });

    const deletedData = {
      employee: deleteAdmin,
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

export const AdminServices = {
  getAllAdmin,
  getSingleAdmin,
  updateAdmin,
  deleteSingleAdmin,
};
