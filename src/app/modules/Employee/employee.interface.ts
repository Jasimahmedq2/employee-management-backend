export type IDepartment =
  | 'Web Development'
  | 'Design'
  | 'Project Management'
  | 'Quality Assurance'
  | 'DevOps'
  | 'Sales and Marketing'
  | 'Customer Support'
  | 'Content Creation'
  | 'Research and Development';

export type IPositions =
  | 'Software Engineer'
  | 'Front-end Developer'
  | 'Back-end Developer'
  | 'Full-stack Developer'
  | 'UI/UX Designer'
  | 'Project Manager'
  | 'Quality Assurance Engineer'
  | 'DevOps Engineer'
  | 'Sales Representative'
  | 'Marketing Specialist'
  | 'Customer Support Representative'
  | 'Content Writer';

export type IEmploymentStatus = 'part-time' | 'full-time' | 'contract';

export type IEmployeeGender = 'male' | 'female' | 'other';

export type IEmployee = {
  id: string;
  phoneNumber: number;
  email: string;
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  department: IDepartment;
  position: IPositions;

  salary: number;
  employmentStatus: IEmploymentStatus;
  joiningDate: string;
  experience: string;
  gender: IEmployeeGender;
};
