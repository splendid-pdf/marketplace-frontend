export interface RegisterBuyerSchema {
  login: string;
  password: string;
  role: string;
  isLoading?: boolean;
  error?: string | null;
}
