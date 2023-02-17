import { AuthBuyerSchema } from '../../features/userAuth/buyerAuth/model/types/AuthBuyerSchema';

export interface StateSchema {
  buyer: AuthBuyerSchema;
}