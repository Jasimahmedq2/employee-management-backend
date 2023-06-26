import { Schema, model } from 'mongoose';
import { ManagerDepartmentConstant } from '../manager/manager.constant';
import { EmployeeGenderConstant } from '../Employee/employee.constant';
import { IAdmin } from './admin.interface';

const AdminSchema = new Schema<IAdmin>({
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
  managers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'manager',
    },
  ],
  employees: [
    {
      type: Schema.Types.ObjectId,
      ref: 'employee',
    },
  ],
});

export const Admin = model<IAdmin>('admin', AdminSchema);
