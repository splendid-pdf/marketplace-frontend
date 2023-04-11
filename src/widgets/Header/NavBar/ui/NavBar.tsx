import { Link, useNavigate } from "react-router-dom";
import classes from "./NavBar.module.scss";
import { BASE_URL } from "shared/constants/base_url";
import { LS_KEY_BUYER_ACCESS_TOKEN } from "shared/constants/localStorage";
import { IconWithText } from "shared/ui/IconWithText/IconWithText";
import { ReactComponent as DeliveryIcon } from "shared/images/icons/delivery.svg";
import { ReactComponent as PersonIcon } from "shared/images/icons/person.svg";
import { ReactComponent as FavoriteIcon } from "shared/images/icons/favorite.svg";
import { ReactComponent as CartIcon } from "shared/images/icons/cart.svg";
import LogoutIcon from '@mui/icons-material/Logout';
import { useEffect } from 'react';
import { isTokenValid } from 'features/buyerAuth/utils/tokenValidation';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { buyerAuthActions } from '../../../../features/buyerAuth';

export const NavBar = () => {
  const baseUrl = BASE_URL;

  const isAuth = useAppSelector(state => state.buyerAuth.isAuth);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  let tokenValid = true;
  
  useEffect(() => {
    tokenValid = isTokenValid(localStorage.getItem(LS_KEY_BUYER_ACCESS_TOKEN) || '');
  }, []);

  return (
    <>
      <div className={classes.wrapperNavBar}>
        <Link to={`/${baseUrl}/delivery`} className={classes.link}>
          <IconWithText icon={<DeliveryIcon />} text={"Доставка"} />
        </Link>
        {!isAuth && (
          <Link to={`?popup=login`} className={classes.link}>
            <IconWithText icon={<PersonIcon />} text={"Войти"} />
          </Link>
        )}
        {isAuth && (
          <Link to={`/${baseUrl}/buyer/account`} className={classes.link}>
            <IconWithText icon={<PersonIcon />} text={"Профиль"} />
          </Link>
        )}
        {isAuth && (
          <button 
            className={classes.logoutBtn}
            onClick={() => { 
              dispatch(buyerAuthActions.logout());
              navigate("marketplace-frontend");
            }}
          >
            <IconWithText icon={<LogoutIcon />} text={"Выйти"}/>
          </button>
        )}
        <Link to={`/${baseUrl}/favorites`} className={classes.link}>
          <IconWithText icon={<FavoriteIcon />} text={"Избранное"} />
        </Link>
        <Link to={`/${baseUrl}/cart`} className={classes.link}>
          <IconWithText icon={<CartIcon />} text={"Корзина"} />
        </Link>
      </div>
    </>
  );
};
