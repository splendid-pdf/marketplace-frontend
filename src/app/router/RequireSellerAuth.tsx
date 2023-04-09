import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { BASE_URL } from '../../shared/constants/base_url';

export function RequireSellerAuth({ children }: { children: JSX.Element}) {
  const sellerAuth = true;
  const location = useLocation();

  if (!sellerAuth) {
    return <Navigate to={`/${BASE_URL}/auth-seller`} state={{ from: location }} replace />;
  }

  return children;
}
