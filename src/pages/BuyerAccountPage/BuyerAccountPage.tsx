import { Navigate, Outlet } from "react-router-dom";
import { BASE_URL } from "shared/constants/base_url";
import classes from "./BuyerAccountPage.module.scss";
import { BuyerSidebar } from "../../widgets/BuyerSidebar";

const BuyerAccountPage = () => {
  const isAuth = true; // для перехода в кабинет покупателя поменять значение на true, также в компоненте AuthBuyerPage поменять на true
  if (!isAuth) {
    return <Navigate to={`/${BASE_URL}/auth-buyer`} replace={true} />;
  }
  return (
    <div className={"content" + " " + "container"}>
      <div className={`${classes.BuyerAccountPage}`}>
        <BuyerSidebar />
        <div className={`${classes.content}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BuyerAccountPage;
