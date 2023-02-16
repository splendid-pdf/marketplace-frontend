export interface Buyer {
  id?: string;
  email: string;
  password: string;
}

export interface BuyerSchema {
  authData?: Buyer;
}
