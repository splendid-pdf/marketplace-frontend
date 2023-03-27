import { UserLocation } from "features/userLocation/UserLocation";
import classes from "./TopHeader.module.scss";
import { ReactComponent as LocationIcon } from "../../../shared/images/icons/location.svg";
import { useLocation } from "react-router-dom";

export const TopHeader = () => {
  const location = useLocation();
  console.log(location);

  if (
    location.pathname !== "/marketplace-frontend/auth-seller" &&
    location.pathname !== "/marketplace-frontend/register-seller" &&
    location.pathname !== "/marketplace-frontend/seller/account" &&
    location.pathname !== "/marketplace-frontend/seller/account/details" &&
    location.pathname !== "/marketplace-frontend/seller/account/shops" &&
    location.pathname !== "/marketplace-frontend/seller/account/accesses" &&
    location.pathname !== "/marketplace-frontend/seller/account/notifications"
  ) {
    return (
      <div className={classes.topHeader}>
        <div className={"container"}>
          <div className={classes.topHeader__container}>
            <div className={classes.topHeader__leftSide}>
              <div>
                <LocationIcon />
              </div>
              <div>
                <p>{UserLocation()}</p>
              </div>
              <div>
                <p>Пункты выдачи</p>
              </div>
            </div>
            <div className={classes.topHeader__rightSide}>
              <p>Часто задаваемые вопросы</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
