import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { BASE_URL } from '../../shared/constants/base_url';
import { getBuyerIsAuth } from '../../features/buyerAuth/model/selectors/getBuyerIsAuth';
import { useAppSelector } from '../store/hooks';
import { LS_KEY_BUYER_ACCESS_TOKEN } from '../../shared/constants/localStorage';

export function RequireBuyerAuth({ children }: { children: JSX.Element}) {
  // const isBuyerAuth = useAppSelector(getBuyerIsAuth);
  const isBuyerAuth = localStorage.getItem(LS_KEY_BUYER_ACCESS_TOKEN) ? true : false;
  const location = useLocation();

  if (!isBuyerAuth) {
    return <Navigate to={`/${BASE_URL}?popup=login`} replace={true} />;
  }

  return children ? children : <Outlet />;
}
