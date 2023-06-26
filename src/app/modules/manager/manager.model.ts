import { Schema, model } from 'mongoose';
import { IManager } from './manager.interface';
import { ManagerDepartmentConstant } from './manager.constant';
import { EmployeeGenderConstant } from '../Employee/employee.constant';

const ManagerSchema = new Schema<IManager>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  address: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    enum: ManagerDepartmentConstant,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  joiningDate: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: EmployeeGenderConstant,
    required: true,
  },
  employees: [
    {
      type: Schema.Types.ObjectId,
      ref: 'employee',
    },
  ],
});

export const Manager = model<IManager>('manager', ManagerSchema);
