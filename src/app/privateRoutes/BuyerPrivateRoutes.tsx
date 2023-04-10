import { Outlet, Navigate } from 'react-router-dom'
import { BASE_URL } from '../../shared/constants/base_url';
import { LS_KEY_BUYER_ACCESS_TOKEN } from '../../shared/constants/localStorage';

export const BuyerPrivateRoutes = () => {
  const isBuyerAuth = localStorage.getItem(LS_KEY_BUYER_ACCESS_TOKEN) ? true : false;
  return(
    isBuyerAuth ? <Outlet/> : <Navigate to={`/${BASE_URL}?popup=login`} replace={true} />
  )
}
