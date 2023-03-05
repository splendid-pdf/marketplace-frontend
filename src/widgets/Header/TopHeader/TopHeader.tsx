import { UserLocation } from "features/userLocation/UserLocation";
import classes from "./TopHeader.module.scss";
import { ReactComponent as LocationIcon } from "../../../shared/images/icons/location.svg";

export const TopHeader = () => {
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
};
