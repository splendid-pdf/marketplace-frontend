import { StateSchema } from 'app/store/stateSchema';

export const getBuyerProfileReadonly = (state: StateSchema) => state.buyerProfile?.readonly;
