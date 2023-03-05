import { BuyerProfileCard } from 'entities/BuyerProfile';
import { Typography } from '@mui/material';
import classes from './BuyerProfilePage.module.scss';

const BuyerProfilePage = () => {
  return (
    <div className={`${classes.BuyerProfilePage} rightWrapper`}>
      <Typography variant="h5"
        sx={{
          marginBottom: 5,
          fontFamily: 'Manrope, sans-serif',
          fontSize: 36,
        }}
      >
        Личные данные
      </Typography>
      <BuyerProfileCard />
    </div>
  );
};

export default BuyerProfilePage;
