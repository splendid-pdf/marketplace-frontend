import { Navigate, Outlet } from "react-router-dom";
import { BASE_URL } from "shared/constants/base_url";
import classes from "./SellerBasePage.module.scss";

const SellerBasePage = () => {
  const isAuth = true; // для перехода в кабинет продаца поменять значение на true, также в компоненте AuthSellerPage поменять на true
  if (!isAuth) {
    return <Navigate to={`/${BASE_URL}/auth-seller`} replace={true} />;
  }
  return (
    <div className={classes.SellerBasePage}>
      <Outlet />
    </div>
  );
};

export default SellerBasePage;
