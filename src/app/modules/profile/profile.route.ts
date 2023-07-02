import express from 'express';
import { profileControllers } from './profile.controller';
import auth from '../../middleware/auth';
import { ROLES } from '../../../enum/roleEnums';
const router = express.Router();

router.get(
  '/employee-profile',
  auth(ROLES.EMPLOYEE, ROLES.ADMIN, ROLES.SUPER_ADMIN, ROLES.MANAGER),
  profileControllers.getEmployeeProfile
);

router.get(
  '/manager-profile',
  auth(ROLES.EMPLOYEE, ROLES.ADMIN, ROLES.SUPER_ADMIN, ROLES.MANAGER),
  profileControllers.getManagerProfile
);
router.get(
  '/admin-profile',
  auth(ROLES.EMPLOYEE, ROLES.ADMIN, ROLES.SUPER_ADMIN, ROLES.MANAGER),
  profileControllers.getAdminProfile
);

export const profileRoutes = router;
