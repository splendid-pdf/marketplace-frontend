import { memo } from 'react';
import classes from './BuyerSidebar.module.scss';
import { BuyerSidebarItemsList } from '../../model/items';
import { BuyerSidebarItem } from '../BuyerSidebarItem/BuyerSidebarItem';

export const BuyerSidebar = memo(() => {

  return (
    <div
      className={classes.BuyerSidebar}
    >
      <div className={classes.items}>
        {BuyerSidebarItemsList.map((item) => (
          <BuyerSidebarItem
            item={item}
            key={item.url}
          />
        ))}
      </div>
    </div>
  );
});
