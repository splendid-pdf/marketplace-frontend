import { BuyerProfileCard } from "entities/BuyerProfile";
import { Typography } from "@mui/material";
import classes from "./SellerProfilePage.module.scss";

const SellerProfilePage = () => {
  return (
    <div className={`${classes.SellerProfilePage} rightWrapper`}>
      <Typography
        variant="h5"
        sx={{
          marginBottom: 5,
          fontFamily: "Manrope, sans-serif",
          fontSize: 36,
        }}
      >
        Личные данные
      </Typography>
      <BuyerProfileCard />
    </div>
  );
};

export default SellerProfilePage;
