import express from 'express';
import { userController } from './user.controller';
import ValidateRequest from '../../middleware/validateRequest';
import { UserZodSchema } from './user.validation';
const router = express.Router();

router.post(
  '/create-employee',
  ValidateRequest(UserZodSchema.createEmployeeUserZod),
  userController.createEmployee
);
router.post(
  '/create-manager',
  ValidateRequest(UserZodSchema.createManagerUserZod),
  userController.createManager
);
router.post(
  '/create-admin',
  ValidateRequest(UserZodSchema.createAdminUserZod),
  userController.createAdmin
);

export const userRoutes = router;
