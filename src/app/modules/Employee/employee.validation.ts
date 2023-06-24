import { z } from 'zod';
import {
  EmployeeDepartmentConstant,
  EmployeeGenderConstant,
  EmployeePositionConstant,
  employmentStatusConstant,
} from './employee.constant';

const createEmployeeZodSchema = z.object({
  body: z.object({
    id: z.string({
      required_error: 'id is required',
    }),
    phoneNumber: z.number({
      required_error: 'number is required',
    }),
    name: z.object(
      {
        firstName: z.string({ required_error: 'firsName is required' }),
        lastName: z.string({ required_error: 'last name is required' }),
      },
      { required_error: 'name is required' }
    ),

    address: z.string({
      required_error: 'address is required',
    }),
    department: z.enum(
      [...EmployeeDepartmentConstant] as [string, ...string[]],
      {
        required_error: 'department field is required',
      }
    ),
    position: z.enum([...EmployeePositionConstant] as [string, ...string[]], {
      required_error: 'position field is required',
    }),
    salary: z.number({
      required_error: 'salary field is required',
    }),
    employmentStatus: z.enum(
      [...employmentStatusConstant] as [string, ...string[]],
      {
        required_error: 'employmentStatusConstant is required',
      }
    ),
    joiningDate: z.string({
      required_error: 'joiningDate field is required',
    }),
    experience: z.string({
      required_error: 'experience field is required',
    }),
    gender: z.enum([...EmployeeGenderConstant] as [string, ...string[]], {
      required_error: 'gender is required',
    }),
  }),
});

export const EmployeeZodSchema = {
  createEmployeeZodSchema,
};
