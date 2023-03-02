import { StateSchema } from 'app/store/stateSchema';

export const getBuyerProfileIsLoading = (state: StateSchema) => state.buyerProfile?.isLoading;
