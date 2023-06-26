import { IDepartment, IEmployeeGender } from '../Employee/employee.interface';

export type IManager = {
  id: string;
  phoneNumber: number;
  email: string;
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  department: IDepartment;
  salary: number;
  joiningDate: string;
  experience: string;
  gender: IEmployeeGender;
  employees?: string[];
};
