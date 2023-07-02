import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { profileServices } from './profile.service';

const getEmployeeProfile = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  const result = await profileServices.getEmployeeProfile(user?.userId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'successfully retrieve profile',
    data: result,
  });
});

const getManagerProfile = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  const result = await profileServices.getManagerProfile(user?.userId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'successfully retrieve manager profile',
    data: result,
  });
});

const getAdminProfile = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  const result = await profileServices.getAdminProfile(user?.userId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'successfully retrieve admin profile',
    data: result,
  });
});

export const profileControllers = {
  getEmployeeProfile,
  getManagerProfile,
  getAdminProfile,
};
