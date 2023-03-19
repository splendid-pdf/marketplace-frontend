export interface BuyerAuth {
  email?: string;
  password?: string;
}

export interface BuyerAuthSchema {
  loading: boolean;
  id?: string;
  authData?: BuyerAuth;
  isReg?: boolean;
  isAuth?: boolean;
  errorOnRegister?: string;
  errorOnLogin?: string;
  token?: string;
  role?: string;
}

export interface BuyerRegResponse {
  id: string;
  error?: unknown;
}

export interface BuyerAuthResponse {
  id: string;
  email?: string;
  token: string;
  error?: string;
}
