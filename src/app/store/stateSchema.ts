import { BuyerSchema } from '../../entities/Buyer';
import { BuyerProfileSchema } from '../../entities/BuyerProfile';

export interface StateSchema {
  buyer: BuyerSchema;
  buyerProfile?: BuyerProfileSchema;
}
