import { BuyerProfileCard } from "entities/BuyerProfile";
import { Typography } from "@mui/material";
import classes from "./SellerAccessesPage.module.scss";

const SellerAccessesPage = () => {
  return (
    <div className={`${classes.SellerAccessesPage} rightWrapper`}>
      <Typography
        variant="h5"
        sx={{
          marginBottom: 5,
          fontFamily: "Manrope, sans-serif",
          fontSize: 36,
        }}
      >
        Список аккаунтов
      </Typography>
      <BuyerProfileCard />
    </div>
  );
};

export default SellerAccessesPage;
