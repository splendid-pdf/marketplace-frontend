import { AuthSellerForm } from "features/sellerAuth";
import classes from "./AuthSellerPage.module.scss";
import { Navigate } from "react-router-dom";
import { BASE_URL } from "shared/constants/base_url";

const AuthSellerPage = () => {
  const isAuth = true; // для перехода в селлера поменять на false также в компоненте SellerBasePage поменять на false
  if (!isAuth) {
    return <Navigate to={`/${BASE_URL}/auth-seller`} />;
  }
  return (
    <div className={classes.AuthSellerPage}>
      <AuthSellerForm />
    </div>
  );
};

export default AuthSellerPage;
