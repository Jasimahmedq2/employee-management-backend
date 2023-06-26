import { IDepartment, IEmployeeGender } from '../Employee/employee.interface';

export type IAdmin = {
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
  managers?: string[];
  employees?: string[];
};
