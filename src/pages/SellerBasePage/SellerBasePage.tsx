import { Navigate, Outlet } from "react-router-dom";
import { BASE_URL } from "shared/constants/base_url";
import { NavBarSeller } from "widgets/Header/HederSeller";
import classes from "./SellerBasePage.module.scss";

const SellerBasePage = () => {
  const isAuth = true; // для перехода в кабинет продаца поменять значение на true, также в компоненте AuthSellerPage поменять на true
  if (!isAuth) {
    return <Navigate to={`/${BASE_URL}/auth-seller`} />;
  }
  return (
    <div className={`${classes.SellerBasePage} main container`}>
      <NavBarSeller />
      <Outlet />
    </div>
  );
};

export default SellerBasePage;
