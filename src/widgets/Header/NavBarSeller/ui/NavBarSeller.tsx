import { menuItemsSeller } from "shared/constants/seller_menu";
import { DropdownMenu } from "shared/ui/DropdownMenu/DropdownMenu";
import classes from "./NavBarSeller.module.scss";

export const NavBarSeller = () => {
  return (
    <>
      <div className={classes.wrapperNavBarSeller}>
        {menuItemsSeller.map((item, index) => {
          return <DropdownMenu key={index} item={item} />;
        })}
      </div>
    </>
  );
};
