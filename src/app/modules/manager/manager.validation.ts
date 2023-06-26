import { z } from 'zod';
import { EmployeeGenderConstant } from '../Employee/employee.constant';
import { ManagerDepartmentConstant } from './manager.constant';

const updateManagerZodSchema = z.object({
  body: z.object({
    phoneNumber: z.number().optional(),
    email: z.string().email().optional(),
    name: z
      .object({
        firstName: z.string().optional(),
        lastName: z.string().optional(),
      })
      .optional(),

    address: z.string().optional(),
    department: z
      .enum([...ManagerDepartmentConstant] as [string, ...string[]])
      .optional(),
    salary: z.number().optional(),
    joiningDate: z.string().optional(),
    experience: z.string().optional(),
    gender: z
      .enum([...EmployeeGenderConstant] as [string, ...string[]])
      .optional(),
    employees: z.array(z.string()).optional(),
  }),
});

export const ManagerZodSchema = {
  updateManagerZodSchema,
};
