import express from 'express';
import { AuthControllers } from './auth.controller';
import ValidateRequest from '../../middleware/validateRequest';
import { AuthZodSchema } from './auth.validation';
const router = express.Router();

router.post(
  '/login',
  ValidateRequest(AuthZodSchema.loginUserZodSchema),
  AuthControllers.loginUser
);
router.post(
  '/refresh-token',
  ValidateRequest(AuthZodSchema.refreshTokenZodSchema),
  AuthControllers.refreshToken
);

export const AuthRoutes = router;
