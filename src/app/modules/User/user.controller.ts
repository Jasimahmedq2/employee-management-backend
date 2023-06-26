import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { userService } from './user.service';

const createEmployee = catchAsync(async (req: Request, res: Response) => {
  const { employee, ...userData } = req.body;

  const result = await userService.createEmployee(employee, userData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'successfully create an employee user',
    data: result,
  });
});

const createManager = catchAsync(async (req: Request, res: Response) => {
  const { manager, ...userData } = req.body;

  const result = await userService.createManager(manager, userData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'successfully create a manager user',
    data: result,
  });
});

const createAdmin = catchAsync(async (req: Request, res: Response) => {
  const { admin, ...userData } = req.body;

  const result = await userService.createAdmin(admin, userData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'successfully create an admin user',
    data: result,
  });
});

export const userController = {
  createEmployee,
  createManager,
  createAdmin,
};
