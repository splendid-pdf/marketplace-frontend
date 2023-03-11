import { StateSchema } from 'app/store/stateSchema';

export const getBuyerIsAuth = (state: StateSchema) => state.buyerAuth?.isAuth;
