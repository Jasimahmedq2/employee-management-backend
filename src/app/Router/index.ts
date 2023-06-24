import express from 'express';
import { userRoutes } from '../modules/User/user.route';
import { employeesRoutes } from '../modules/Employee/employee.route';

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
];

CoreRoutes.forEach(route => router.use(route.path, route.Element));

export default router;
