import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IAdmin } from './admin.interface';
import { AdminServices } from './admin.service';

const getAllAdmin = catchAsync(async (req: Request, res: Response) => {
  const result = await AdminServices.getAllAdmin();

  sendResponse<IAdmin[] | null>(res, {
    statusCode: 200,
    success: true,
    message: 'successfully retrieve the admins',
    data: result,
  });
});

const getSingleAdmin = catchAsync(async (req: Request, res: Response) => {
  const result = await AdminServices.getSingleAdmin(req.params.id);

  sendResponse<IAdmin | null>(res, {
    statusCode: 200,
    success: true,
    message: 'successfully retrieve a admin',
    data: result,
  });
});

const updateAdmin = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { ...updateData } = req.body;
  const result = await AdminServices.updateAdmin(id, updateData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'successfully updated the admin',
    data: result,
  });
});

const deleteSingleAdmin = catchAsync(async (req: Request, res: Response) => {
  const result = await AdminServices.deleteSingleAdmin(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'successfully deleted the admin',
    data: result,
  });
});

export const AdminControllers = {
  getAllAdmin,
  getSingleAdmin,
  updateAdmin,
  deleteSingleAdmin,
};
