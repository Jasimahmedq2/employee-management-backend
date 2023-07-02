import express from 'express';
import { userRoutes } from '../modules/User/user.route';
import { employeesRoutes } from '../modules/Employee/employee.route';
import { mangerRoutes } from '../modules/manager/manager.route';
import { adminRoutes } from '../modules/admin/admin.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { profileRoutes } from '../modules/profile/profile.route';

const router = express.Router();

const CoreRoutes = [
  {
    path: '/users',
    Element: userRoutes,
  },
  {
    path: '/employees',
    Element: employeesRoutes,
  },
  {
    path: '/managers',
    Element: mangerRoutes,
  },
  {
    path: '/admins',
    Element: adminRoutes,
  },
  {
    path: '/auth',
    Element: AuthRoutes,
  },
  {
    path: '/profile',
    Element: profileRoutes,
  },
];

CoreRoutes.forEach(route => router.use(route.path, route.Element));

export default router;
