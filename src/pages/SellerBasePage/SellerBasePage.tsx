import { Navigate, Outlet } from "react-router-dom";
import { BASE_URL } from "shared/constants/base_url";
import classes from "./SellerBasePage.module.scss";

const SellerBasePage = () => {
  const isAuth = true; // для перехода в cеллера поменять на false
  if (!isAuth) {
    return <Navigate to={`/${BASE_URL}/auth-seller`} replace={true} />;
  }
  return (
    <div className={"content" + " " + "container"}>
      <div className={classes.SellerBasePage}>
        <Outlet />
      </div>
    </div>
  );
};

export default SellerBasePage;
