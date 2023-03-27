import { StateSchema } from 'app/store/stateSchema';

export const getBuyerProfileData = (state: StateSchema) => state.buyerProfile?.data;
