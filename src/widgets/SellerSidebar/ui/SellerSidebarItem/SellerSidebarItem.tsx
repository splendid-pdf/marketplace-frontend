import { memo } from 'react';
import classes from './SellerSidebarItem.module.scss';
import { SellerSidebarItemType } from '../../model/items';
import { Link } from 'react-router-dom';

interface SellerSidebarItemProps {
  item: SellerSidebarItemType;
}

export const SellerSidebarItem = memo(({ item }:SellerSidebarItemProps) => {
  const isAuth = true;

  if (!isAuth) {
    return null;
  }

  return (
    <Link
      className={classes.item}
      to={item.url || ''}      
    > 
      {item.name}
    </Link>
  );
});
