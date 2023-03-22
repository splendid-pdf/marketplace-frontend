import { memo } from 'react';
import classes from './SellerSidebar.module.scss';
import { SellerSidebarItemsList } from '../../model/items';
import { SellerSidebarItem } from '../SellerSidebarItem/SellerSidebarItem';

export const SellerSidebar = memo(() => {

  return (
    <div
      className={classes.SellerSidebar}
    >
      <div className={classes.items}>
        {SellerSidebarItemsList.map((item) => (
          <SellerSidebarItem
            item={item}
            key={item.url}
          />
        ))}
      </div>
    </div>
  );
});
