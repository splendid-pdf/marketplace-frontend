import { StateSchema } from 'app/store/stateSchema';

export const getBuyerProfileError = (state: StateSchema) => state.buyerProfile?.errorOnProfile;
