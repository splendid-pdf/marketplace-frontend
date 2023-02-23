import classes from "./HeaderSeller.module.scss";
import { Link } from "react-router-dom";
import { BASE_URL } from "shared/constants/base_url";
import { ReactComponent as Logo } from "shared/images/icons/logo.svg";
import { IconWithText } from "shared/ui/IconWithText/IconWithText";
import { ReactComponent as PersonIcon } from "shared/images/icons/person.svg";

export const HeaderSeller = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.headerWrapper + " " + "container"}>
        <div className={classes.leftBlockHeader}>
          <Link to={BASE_URL}>
            <Logo fill="#1F1D1D" />
          </Link>
          <h1>Seller</h1>
        </div>
        <Link
          to="#"
          // onClick={() => setItemToLS(LS_KEY_ROLE, "buyer")}
          className={classes.link}
        >
          <IconWithText icon={<PersonIcon />} text={"Войти"} />
        </Link>
      </div>
    </div>
  );
};
