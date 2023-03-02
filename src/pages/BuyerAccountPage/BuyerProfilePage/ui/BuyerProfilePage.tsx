import { BuyerProfileCard } from 'entities/BuyerProfile';
import { Typography } from '@mui/material';
import classes from './BuyerProfilePage.module.scss';
import { BuyerCardsForm } from '../../../../entities/BuyerProfile/ui/BuyerCardsForm/BuyerCardsForm';


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
      <Typography variant="h5"
        sx={{
          marginBottom: 5,
          fontFamily: 'Manrope, sans-serif',
          fontSize: 36,
        }}
      >
        Банковские карты
      </Typography>
      <BuyerCardsForm />
    </div>
  );
};

export default BuyerProfilePage;
