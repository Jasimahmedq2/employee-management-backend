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
});

const updateEmployeeZodSchema = z.object({
  body: z.object({
    id: z
      .string({
        required_error: 'id is required',
      })
      .optional(),
    phoneNumber: z
      .number({
        required_error: 'number is required',
      })
      .optional(),
    name: z
      .object(
        {
          firstName: z
            .string({ required_error: 'firsName is required' })
            .optional(),
          lastName: z
            .string({ required_error: 'last name is required' })
            .optional(),
        },
        { required_error: 'name is required' }
      )
      .optional(),
    address: z
      .string({
        required_error: 'address is required',
      })
      .optional(),
    department: z
      .enum([...EmployeeDepartmentConstant] as [string, ...string[]], {
        required_error: 'department field is required',
      })
      .optional(),
    position: z
      .enum([...EmployeePositionConstant] as [string, ...string[]], {
        required_error: 'position field is required',
      })
      .optional(),
    salary: z
      .number({
        required_error: 'salary field is required',
      })
      .optional(),
    employmentStatus: z
      .enum([...employmentStatusConstant] as [string, ...string[]], {
        required_error: 'employmentStatusConstant is required',
      })
      .optional(),
    joiningDate: z
      .string({
        required_error: 'joiningDate field is required',
      })
      .optional(),
    experience: z
      .string({
        required_error: 'experience field is required',
      })
      .optional(),
    gender: z
      .enum([...EmployeeGenderConstant] as [string, ...string[]], {
        required_error: 'gender is required',
      })
      .optional(),
  }),
});

export const EmployeeZodSchema = {
  createEmployeeZodSchema,
  updateEmployeeZodSchema,
};
