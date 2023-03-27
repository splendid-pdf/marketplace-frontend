import { SellerProfileCard } from "entities/SellerProfile";
import classes from "./SellerProfilePage.module.scss";

const SellerProfilePage = () => {
  return (
    <div className={`${classes.SellerProfilePage} rightWrapper`}>
      <SellerProfileCard />
    </div>
  );
};

export default SellerProfilePage;
