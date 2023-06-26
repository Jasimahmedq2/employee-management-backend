import express from 'express';
import { AdminControllers } from './admin.controller';
import ValidateRequest from '../../middleware/validateRequest';
import { AdminZodSchema } from './admin.validation';

const router = express.Router();

router.get('/get-admins', AdminControllers.getAllAdmin);
router.get('/get-admin/:id', AdminControllers.getSingleAdmin);
router.patch(
  '/update-admin/:id',
  ValidateRequest(AdminZodSchema.updateAdminZodSchema),
  AdminControllers.updateAdmin
);

router.delete('/delete-admin/:id', AdminControllers.deleteSingleAdmin);

export const adminRoutes = router;
