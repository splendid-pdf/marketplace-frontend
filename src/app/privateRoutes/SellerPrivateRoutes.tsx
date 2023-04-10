import { Outlet, Navigate } from 'react-router-dom'
import { BASE_URL } from '../../shared/constants/base_url';
import { LS_KEY_SELLER_ACCESS_TOKEN } from '../../shared/constants/localStorage';

export const SellerPrivateRoutes = () => {
  // TODO: uncomment this line and remove the next one when the seller auth is ready
  // const isSellerAuth = localStorage.getItem(LS_KEY_SELLER_ACCESS_TOKEN) ? true : false;
  const isSellerAuth = true;
  return(
    isSellerAuth ? <Outlet/> : <Navigate to={`/${BASE_URL}/auth-seller`} replace={true} />
  )
}
