import { RegisterSellerForm } from "features/userRegister/sellerRegister";
import classes from "./RegisterSellerPage.module.scss";

const RegisterSellerPage = () => {
  return (
    <div className={`${classes.RegisterSellerPage} main`}>
      <div style={{ display: "flex" }}>
        <RegisterSellerForm />
      </div>
    </div>
  );
};

export default RegisterSellerPage;
