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

export const userRoutes = router;
