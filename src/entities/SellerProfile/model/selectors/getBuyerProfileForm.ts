import { StateSchema } from 'app/store/stateSchema';

export const getBuyerProfileForm = (state: StateSchema) => state.buyerProfile?.form;
