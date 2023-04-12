import { StateSchema } from 'app/store/stateSchema';

export const getBuyerProfileMessage = (state: StateSchema) => state.buyerProfile?.successMessage;
