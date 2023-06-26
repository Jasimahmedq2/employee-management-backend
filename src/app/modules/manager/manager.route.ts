import express from 'express';
import { ManagerControllers } from './manager.controller';
import ValidateRequest from '../../middleware/validateRequest';
import { ManagerZodSchema } from './manager.validation';

const router = express.Router();

router.get('/get-managers', ManagerControllers.getAllManager);
router.get('/get-manager/:id', ManagerControllers.getSingleManager);
router.patch(
  '/update-manager/:id',
  ValidateRequest(ManagerZodSchema.updateManagerZodSchema),
  ManagerControllers.updateManager
);
router.delete('/delete-manager/:id', ManagerControllers.deleteSingleManager);

export const mangerRoutes = router;
