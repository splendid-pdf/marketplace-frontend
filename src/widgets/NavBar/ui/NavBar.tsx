import { Link } from 'react-router-dom';
import React from 'react';
import classes from './NavBar.module.scss';
import { BASE_URL } from '../../../shared/constants/base_url';
import { setItemToLS } from '../../../shared/utils/setItemToLS';
import { LS_KEY_ROLE } from '../../../shared/constants/localStorage';
import { IconWithText } from 'shared/ui/IconWithText/IconWithText';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

export const NavBar = () => {
  const baseUrl = BASE_URL;

  return (
    <div className={classes.nav}>
      <div className={classes.wrapperNavBar + ' ' + classes.container}>
        <Link to={`/${baseUrl}/delivery`}>
          <IconWithText icon={<HomeRepairServiceOutlinedIcon />} text={'Доставка'} />
        </Link>
        <Link to={`?popup=login`} onClick={() => setItemToLS(LS_KEY_ROLE, 'buyer')}>
          <IconWithText icon={<PermIdentityOutlinedIcon />} text={'Войти'} />
        </Link>
        <Link to={`/${baseUrl}/favorites`}>
          <IconWithText icon={<FavoriteBorderOutlinedIcon />} text={'Избранное'} />
        </Link>
        <Link to={`/${baseUrl}/cart`}>
          <IconWithText icon={<ShoppingBagOutlinedIcon />} text={'Корзина'} />
        </Link>
      </div>
    </div>
  );
};
