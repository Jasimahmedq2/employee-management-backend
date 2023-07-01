import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/apiError';
import { JwtHelpers } from '../../../shared/jwtHelpers';
import User from '../User/user.model';
import { ILoginData, ILoginResponse, IRefreshResponse } from './auth.interface';

const loginUser = async (payload: ILoginData): Promise<ILoginResponse> => {
  const { id, password } = payload;

  const isUserExist = await User.isUserExist(id);
  if (!isUserExist) {
    throw new ApiError(404, "user doesn't exist");
  }
  const isPasswordMatched = await User.isPasswordMatched(
    password,
    isUserExist.password
  );
  if (!isPasswordMatched) {
    throw new ApiError(401, "password doesn't matched");
  }

  const accessToken = await JwtHelpers.createToken(
    {
      userId: isUserExist.id,
      role: isUserExist.role,
    },
    config.jwt.access_secret as Secret,
    config.jwt.access_expire as string
  );

  const refreshToken = await JwtHelpers.createToken(
    {
      userId: isUserExist.id,
      role: isUserExist.role,
    },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expire as string
  );
  return {
    accessToken: accessToken,
    refreshToken: refreshToken,
  };
};

const refreshToken = async (
  refreshToken: string
): Promise<IRefreshResponse> => {
  let verifiedUser = null;
  try {
    verifiedUser = JwtHelpers.verifyToken(
      refreshToken,
      config.jwt.refresh_secret as Secret
    );
  } catch (error) {
    throw new ApiError(401, 'unValidated');
  }

  const { userId } = verifiedUser;
  const userExist = await User.findOne({ id: userId });
  if (!userExist) {
    throw new ApiError(404, "user doesn't exist");
  }

  const newAccessToken = await JwtHelpers.createToken(
    { userId: userExist.id, role: userExist.role },
    config.jwt.access_secret as string,
    config.jwt.access_expire as string
  );

  return {
    accessToken: newAccessToken,
  };
};

export const AuthServices = {
  loginUser,
  refreshToken,
};
