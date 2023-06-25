import express from 'express';
import { EmployeeControllers } from './employee.controller';
import ValidateRequest from '../../middleware/validateRequest';
import { EmployeeZodSchema } from './employee.validation';

const router = express.Router();

router.get('/get-employees', EmployeeControllers.getAllEmployee);
router.get('/get-employee/:id', EmployeeControllers.getSingleEmployee);
router.patch(
  '/update-employee/:id',
  ValidateRequest(EmployeeZodSchema.updateEmployeeZodSchema),
  EmployeeControllers.updateEmployee
);
router.delete('/delete-employee/:id', EmployeeControllers.deleteSingleEmployee);

export const employeesRoutes = router;
