export type ILoginData = {
  id: string;
  password: string;
};

export type ILoginResponse = {
  accessToken: string;
  refreshToken: string;
};

export type IRefreshResponse = {
  accessToken: string;
};
