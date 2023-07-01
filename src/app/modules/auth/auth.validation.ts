import { z } from 'zod';

const loginUserZodSchema = z.object({
  body: z.object({
    id: z.string({
      required_error: 'you must have to sent the id',
    }),
    password: z.string({
      required_error: 'password field is required',
    }),
  }),
});

const refreshTokenZodSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: 'refresh token is required',
    }),
  }),
});

const updatePasswordZodSchema = z.object({
  body: z.object({
    oldPassword: z.string({
      required_error: 'password is required',
    }),
    newPassword: z.string({
      required_error: 'password is required',
    }),
  }),
});

export const AuthZodSchema = {
  loginUserZodSchema,
  refreshTokenZodSchema,
  updatePasswordZodSchema,
};
