import { z } from 'zod';
import {
  EmployeeDepartmentConstant,
  EmployeeGenderConstant,
  EmployeePositionConstant,
  employmentStatusConstant,
} from '../Employee/employee.constant';
import { ManagerDepartmentConstant } from '../manager/manager.constant';

const createEmployeeUserZod = z.object({
  body: z.object({
    password: z.string({
      required_error: 'password is required',
    }),
    employee: z.object({
      phoneNumber: z.number({
        required_error: 'number is required',
      }),
      email: z
        .string({
          required_error: 'email is required',
        })
        .email(),
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
  }),
});

const createManagerUserZod = z.object({
  body: z.object({
    password: z.string({
      required_error: 'password is required',
    }),
    manager: z.object({
      phoneNumber: z.number({
        required_error: 'number is required',
      }),
      email: z
        .string({
          required_error: 'email is required',
        })
        .email(),
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
        [...ManagerDepartmentConstant] as [string, ...string[]],
        {
          required_error: 'department field is required',
        }
      ),
      salary: z.number({
        required_error: 'salary field is required',
      }),
      joiningDate: z.string({
        required_error: 'joiningDate field is required',
      }),
      experience: z.string({
        required_error: 'experience field is required',
      }),
      gender: z.enum([...EmployeeGenderConstant] as [string, ...string[]], {
        required_error: 'gender is required',
      }),
      employees: z.array(z.string()),
    }),
  }),
});

const createAdminUserZod = z.object({
  body: z.object({
    password: z.string({
      required_error: 'password is required',
    }),
    admin: z.object({
      phoneNumber: z.number({
        required_error: 'number is required',
      }),
      email: z
        .string({
          required_error: 'email is required',
        })
        .email(),
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
        [...ManagerDepartmentConstant] as [string, ...string[]],
        {
          required_error: 'department field is required',
        }
      ),
      salary: z.number({
        required_error: 'salary field is required',
      }),
      joiningDate: z.string({
        required_error: 'joiningDate field is required',
      }),
      experience: z.string({
        required_error: 'experience field is required',
      }),
      gender: z.enum([...EmployeeGenderConstant] as [string, ...string[]], {
        required_error: 'gender is required',
      }),
      managers: z.array(z.string()),
      employees: z.array(z.string()),
    }),
  }),
});

export const UserZodSchema = {
  createEmployeeUserZod,
  createManagerUserZod,
  createAdminUserZod,
};
