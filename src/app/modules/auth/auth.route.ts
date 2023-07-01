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
router.post(
  '/update-password/:id',
  ValidateRequest(AuthZodSchema.updatePasswordZodSchema),
  AuthControllers.updatePassword
);

export const AuthRoutes = router;
