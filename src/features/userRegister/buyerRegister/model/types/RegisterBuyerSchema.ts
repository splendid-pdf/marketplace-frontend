export interface RegisterBuyerSchema {
  login: string;
  password: string;
  role: string;
}

export interface RegisterBuyerResponseSchema {
  id: string;
}

export interface BuyerStateSchema {
  id?: string
  login?: string;
  password?: string;
  role?: 'buyer';
  isAuth?: boolean;
}
