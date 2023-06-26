import { z } from 'zod';
import { ManagerDepartmentConstant } from '../manager/manager.constant';
import { EmployeeGenderConstant } from '../Employee/employee.constant';

const updateAdminZodSchema = z.object({
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
    managers: z.array(z.string()).optional(),
    employees: z.array(z.string()).optional(),
  }),
});

export const AdminZodSchema = {
  updateAdminZodSchema,
};
