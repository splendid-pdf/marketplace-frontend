export interface SellerAuth {
        email?: string;
        password?: string;
      }
      
      export interface SellerAuthSchema {
        loading: boolean;
        id?: string;
        authData?: SellerAuth;
        isReg?: boolean;
        isAuth?: boolean;
        errorOnRegister?: string;
        errorOnLogin?: string;
        token?: string;
        role?: string;
      }
      
      export interface SellerRegResponse {
        id: string;
        error?: unknown;
      }
      
      export interface SellerAuthResponse {
        id: string;
        email?: string;
        token: string;
        error?: string;
      }