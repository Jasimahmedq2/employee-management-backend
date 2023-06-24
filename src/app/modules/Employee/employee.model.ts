import { Schema, model } from 'mongoose';
import {
  EmployeeDepartmentConstant,
  EmployeeGenderConstant,
  EmployeePositionConstant,
  employmentStatusConstant,
} from './employee.constant';

const EmployeeSchema = new Schema({
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
    enum: EmployeeDepartmentConstant,
    required: true,
  },
  position: {
    type: String,
    enum: EmployeePositionConstant,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  employmentStatus: {
    type: String,
    enum: employmentStatusConstant,
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
});

export const Employee = model('employee', EmployeeSchema);
