import mongoose from 'mongoose';
import { IEmployee } from './employee.interface';
import { Employee } from './employee.model';
import User from '../User/user.model';

const getAllEmployee = async (): Promise<IEmployee[] | null | unknown> => {
  const result = await Employee.find({});
  return result;
};

const getSingleEmployee = async (
  id: string
): Promise<IEmployee | null | unknown> => {
  const result = await Employee.findById(id);
  return result;
};

const updateEmployee = async (id: string, payload: Partial<IEmployee>) => {
  const result = await Employee.updateOne({ _id: id }, payload, { new: true });
  return result;
};

const deleteSingleEmployee = async (id: string) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const deleteEmployee = await Employee.deleteOne({ id: id }, { session });
    const deleteUser = await User.deleteOne({ id: id }, { session });

    const deletedData = {
      employee: deleteEmployee,
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

export const EmployeeServices = {
  getAllEmployee,
  getSingleEmployee,
  updateEmployee,
  deleteSingleEmployee,
};
