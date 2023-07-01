import express from 'express';
import { EmployeeControllers } from './employee.controller';
import ValidateRequest from '../../middleware/validateRequest';
import { EmployeeZodSchema } from './employee.validation';
import auth from '../../middleware/auth';
import { ROLES } from '../../../enum/roleEnums';

const router = express.Router();

router.get(
  '/get-employees',
  auth(ROLES.EMPLOYEE, ROLES.ADMIN, ROLES.MANAGER, ROLES.SUPER_ADMIN),
  EmployeeControllers.getAllEmployee
);
router.get(
  '/get-employee/:id',
  auth(ROLES.ADMIN, ROLES.EMPLOYEE, ROLES.MANAGER, ROLES.SUPER_ADMIN),
  EmployeeControllers.getSingleEmployee
);
router.patch(
  '/update-employee/:id',
  auth(ROLES.SUPER_ADMIN, ROLES.ADMIN),
  ValidateRequest(EmployeeZodSchema.updateEmployeeZodSchema),
  EmployeeControllers.updateEmployee
);
router.delete(
  '/delete-employee/:id',
  auth(ROLES.SUPER_ADMIN, ROLES.ADMIN),
  EmployeeControllers.deleteSingleEmployee
);

export const employeesRoutes = router;
