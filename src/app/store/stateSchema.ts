import { BuyerProfileSchema } from '../../entities/BuyerProfile';
import { BuyerAuthSchema } from '../../features/buyerAuth';

export interface StateSchema {
  buyerAuth?: BuyerAuthSchema;
  buyerProfile?: BuyerProfileSchema;
}
