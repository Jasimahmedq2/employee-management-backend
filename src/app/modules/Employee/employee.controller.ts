import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { EmployeeServices } from './employee.service';
import sendResponse from '../../../shared/sendResponse';

const getAllEmployee = catchAsync(async (req: Request, res: Response) => {
  const result = await EmployeeServices.getAllEmployee();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'successfully retrieve all employee',
    data: result,
  });
});

const getSingleEmployee = catchAsync(async (req: Request, res: Response) => {
  const result = await EmployeeServices.getSingleEmployee(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'successfully retrieve a employee',
    data: result,
  });
});

const updateEmployee = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { ...updateData } = req.body;

  const result = await EmployeeServices.updateEmployee(id, updateData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'successfully updated the employee',
    data: result,
  });
});

const deleteSingleEmployee = catchAsync(async (req: Request, res: Response) => {
  const result = await EmployeeServices.deleteSingleEmployee(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'successfully deleted a employee',
    data: result,
  });
});

export const EmployeeControllers = {
  getAllEmployee,
  getSingleEmployee,
  updateEmployee,
  deleteSingleEmployee,
};
