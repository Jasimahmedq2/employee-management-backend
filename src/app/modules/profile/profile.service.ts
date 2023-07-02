import { IEmployee } from '../Employee/employee.interface';
import { Employee } from '../Employee/employee.model';
import { IAdmin } from '../admin/admin.interface';
import { Admin } from '../admin/admin.model';
import { IManager } from '../manager/manager.interface';
import { Manager } from '../manager/manager.model';

const getEmployeeProfile = async (
  id: string
): Promise<IEmployee | null | unknown> => {
  const result = await Employee.findOne({ id });
  return result;
};

const getManagerProfile = async (
  id: string
): Promise<IManager | null | unknown> => {
  const result = await Manager.findOne({ id });
  return result;
};

const getAdminProfile = async (
  id: string
): Promise<IAdmin | null | unknown> => {
  const result = await Admin.findOne({ id });
  return result;
};

export const profileServices = {
  getEmployeeProfile,
  getManagerProfile,
  getAdminProfile,
};
