import mongoose from 'mongoose';
import config from '../../../config';
import { IUser } from './user.interface';
import { GenerateUserId } from './user.utils';
import { IEmployee } from '../Employee/employee.interface';
import { Employee } from '../Employee/employee.model';
import ApiError from '../../../errors/apiError';
import User from './user.model';
import { IManager } from '../manager/manager.interface';
import { Manager } from '../manager/manager.model';
import { IAdmin } from '../admin/admin.interface';
import { Admin } from '../admin/admin.model';

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

const createManager = async (
  manager: IManager,
  user: IUser
): Promise<IUser | null> => {
  // set default password for first time
  if (!user.password) {
    user.password = config.default_pass as string;
  }

  user.role = 'manager';

  let newUserAllData = null;

  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const managerId = await GenerateUserId.generateManagerID();
    user.id = managerId;
    manager.id = managerId;

    const newManager = await Manager.create([manager], { session });
    if (!newManager.length) {
      throw new ApiError(400, "manager doesn't created");
    }
    user.manager = newManager[0]._id;

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
      'manager'
    );
  }

  return newUserAllData;
};

const createAdmin = async (
  admin: IAdmin,
  user: IUser
): Promise<IUser | null> => {
  user.role = 'admin';

  let newUserAllData = null;

  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const adminId = await GenerateUserId.generateAdminID();
    user.id = adminId;
    admin.id = adminId;

    const newAdmin = await Admin.create([admin], { session });
    if (!newAdmin.length) {
      throw new ApiError(400, "admin doesn't created");
    }
    user.admin = newAdmin[0]._id;

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
      'admin'
    );
  }

  return newUserAllData;
};

export const userService = {
  createEmployee,
  createManager,
  createAdmin,
};
