import {
  IDepartment,
  IEmployeeGender,
  IEmploymentStatus,
  IPositions,
} from './employee.interface';

export const EmployeeDepartmentConstant: IDepartment[] = [
  'Web Development',
  'Design',
  'Project Management',
  'Quality Assurance',
  'DevOps',
  'Sales and Marketing',
  'Customer Support',
  'Content Creation',
  'Research and Development',
];

export const EmployeePositionConstant: IPositions[] = [
  'Software Engineer',
  'Front-end Developer',
  'Back-end Developer',
  'Full-stack Developer',
  'UI/UX Designer',
  'Project Manager',
  'Quality Assurance Engineer',
  'DevOps Engineer',
  'Sales Representative',
  'Marketing Specialist',
  'Customer Support Representative',
  'Content Writer',
];

export const employmentStatusConstant: IEmploymentStatus[] = [
  'part-time',
  'full-time',
  'contract',
];
export const EmployeeGenderConstant: IEmployeeGender[] = [
  'male',
  'female',
  'other',
];
