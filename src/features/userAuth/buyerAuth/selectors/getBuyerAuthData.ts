import { StateSchema } from '../../../../app/store/stateSchema';

export const getBuyerAuthData = (state: StateSchema) => state.buyer.authData;
