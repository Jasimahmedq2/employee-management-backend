import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AuthServices } from './auth.service';
import config from '../../../config';

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginInfo } = req.body;
  const result = await AuthServices.loginUser(loginInfo);
  const { accessToken, refreshToken } = result;

  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  };

  res.cookie('refreshToken', refreshToken, cookieOptions);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'successfully login a user',
    data: { accessToken },
  });
});

const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;

  const result = await AuthServices.refreshToken(refreshToken);

  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  };

  res.cookie('refreshToken', refreshToken, cookieOptions);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'successfully generate a accessToken',
    data: result,
  });
});

const updatePassword = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { ...passwordInfo } = req.body;
  const result = await AuthServices.updatePassword(id, passwordInfo);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'successfully updated password',
    data: result,
  });
});

export const AuthControllers = {
  loginUser,
  refreshToken,
  updatePassword,
};
