import mongoose from 'mongoose';
import config from '../../../config';
import { IUser } from './user.interface';
import { GenerateUserId } from './user.utils';
import { IEmployee } from '../Employee/employee.interface';
import { Employee } from '../Employee/employee.model';
import ApiError from '../../../errors/apiError';
import User from './user.model';

const createEmployee = async (
  employee: IEmployee,
  user: IUser
): Promise<IUser | null> => {
  // set default password for first time
  if (!user.password) {
    user.password = config.default_pass as string;
  }

  user.role = 'employee';

  let newUserAllData = null;

  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const employeeId = await GenerateUserId.generateEmployeeID();
    user.id = employeeId;
    employee.id = employeeId;

    const newEmployee = await Employee.create([employee], { session });
    if (!newEmployee.length) {
      throw new ApiError(400, "employee doesn't created");
    }
    user.employee = newEmployee[0]._id;

    const newUser = await User.create([user], { session });
    if (!newUser.length) {
      throw new ApiError(400, "user doesn't created");
    }

    newUserAllData = newUser[0];
    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  if (newUserAllData) {
    newUserAllData = await User.findOne({ id: newUserAllData.id }).populate(
      'employee'
    );
  }

  return newUserAllData;
};

export const userService = {
  createEmployee,
};
