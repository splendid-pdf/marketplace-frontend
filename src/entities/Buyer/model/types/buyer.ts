export interface Buyer {
  id?: string;
  email?: string;
  password?: string;
  role?: 'buyer';
}

export interface BuyerSchema {
  authData?: Buyer;
  _mounted: boolean;
  isAuth?: boolean;
}
