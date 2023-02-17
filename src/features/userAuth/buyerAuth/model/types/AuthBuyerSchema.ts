export interface Buyer {
  id?: string;
  email?: string;
  password?: string;
  role?: 'buyer';
}

export interface AuthBuyerSchema {
  authData?: Buyer;
}
