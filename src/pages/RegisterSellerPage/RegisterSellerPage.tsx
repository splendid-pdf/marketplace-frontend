import { RegisterSellerForm } from "features/userRegister/sellerRegister";
import classes from "./RegisterSellerPage.module.scss";

const RegisterSellerPage = () => {
  return (
    <div className={classes.RegisterSellerPage}>
      <RegisterSellerForm />
    </div>
  );
};

export default RegisterSellerPage;
