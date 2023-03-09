import { Link } from "react-router-dom";
import classes from "./NavBar.module.scss";
import { BASE_URL } from "../../../../shared/constants/base_url";
import { setItemToLS } from "../../../../shared/utils/setItemToLS";
import { LS_KEY_ROLE } from "../../../../shared/constants/localStorage";
import { IconWithText } from "shared/ui/IconWithText/IconWithText";
import { ReactComponent as DeliveryIcon } from "../../../../shared/images/icons/delivery.svg";
import { ReactComponent as PersonIcon } from "../../../../shared/images/icons/person.svg";
import { ReactComponent as FavoriteIcon } from "../../../../shared/images/icons/favorite.svg";
import { ReactComponent as CartIcon } from "../../../../shared/images/icons/cart.svg";

export const NavBar = () => {
  const baseUrl = BASE_URL;

  return (
    <>
      <div className={classes.wrapperNavBar}>
        <Link to={`/${baseUrl}/delivery`} className={classes.link}>
          <IconWithText icon={<DeliveryIcon />} text={"Доставка"} />
        </Link>
        <Link
          to={`?popup=login`}
          className={classes.link}
        >
          <IconWithText icon={<PersonIcon />} text={"Войти"} />
        </Link>
        <Link to={`/${baseUrl}/buyer/account`} className={classes.link}>
          <IconWithText icon={<PersonIcon />} text={"Профиль"} />
        </Link>
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
