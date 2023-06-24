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

export const userController = {
  createEmployee,
};
