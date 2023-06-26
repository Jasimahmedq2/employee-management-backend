import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ManagerServices } from './manager.service';

const getAllManager = catchAsync(async (req: Request, res: Response) => {
  const result = await ManagerServices.getAllManager();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'successfully retrieve all manager',
    data: result,
  });
});

const getSingleManager = catchAsync(async (req: Request, res: Response) => {
  const result = await ManagerServices.getSingleManager(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'successfully retrieve a manager',
    data: result,
  });
});

const updateManager = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { ...updateData } = req.body;
  const result = await ManagerServices.updateManager(id, updateData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'successfully update a manager',
    data: result,
  });
});

const deleteSingleManager = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ManagerServices.deleteSingleManager(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'successfully deleted a manager',
    data: result,
  });
});

export const ManagerControllers = {
  getAllManager,
  getSingleManager,
  updateManager,
  deleteSingleManager,
};
