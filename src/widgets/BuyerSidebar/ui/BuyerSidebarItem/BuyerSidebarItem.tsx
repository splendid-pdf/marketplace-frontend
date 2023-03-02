import { memo } from 'react';
import classes from './BuyerSidebarItem.module.scss';
import { BuyerSidebarItemType } from '../../model/items';
import { Link } from 'react-router-dom';

interface BuyerSidebarItemProps {
  item: BuyerSidebarItemType;
}

export const BuyerSidebarItem = memo(({ item }:BuyerSidebarItemProps) => {
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
