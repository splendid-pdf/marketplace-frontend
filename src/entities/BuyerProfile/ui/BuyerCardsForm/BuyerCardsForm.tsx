import { Typography, TextField, Button } from '@mui/material';
import classes from '../BuyerProfileCard/BuyerProfileCard.module.scss';
import { useForm } from 'react-hook-form';
import { BuyerCards } from '../../model/buyerProfile.types';
import { useCallback, useState } from 'react';
import { Spinner } from 'shared/ui/Spinner/Spinner';

interface BuyerCardsFormProps {
  error?: string;
  isLoading?: boolean;
}
export const BuyerCardsForm = (props: BuyerCardsFormProps) => {
  const { isLoading } = props;

  const data: BuyerCards = {
    mainCard: '1234 1234 1234 1234',
    additionalCard1: '4321 4321 4321 4321',
    additionalCard2: '4321 4321 4321 4321',
  };

  const [readonly, setReadonly] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      mainCard: data.mainCard,
      additionalCard1: data.additionalCard1,
      additionalCard2: data.additionalCard2,
    },
    mode: "onSubmit",
  });

  const onSubmit = () => {
    console.log(`You added a new card`);
  };  
  const onEdit = () => {
    setReadonly(false);
  };

  const onCancelEdit = () => {
    setReadonly(true);
  };

  const onSave = useCallback(() => {
    // dispatch(updateBuyerProfileData());
    setReadonly(true);
  }, []);

  if (isLoading) {
    return (
      <div className={`${classes.BuyerProfileCard}`}>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={`${classes.BuyerProfileCard}`}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <Typography
          sx={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 22,
            marginBottom: '20px',
          }}
        >
          Основная карта
        </Typography>
        <TextField
          className={classes.field}
          placeholder="Введите номер карты"
          defaultValue={data.mainCard}
          error={Boolean(errors.mainCard?.message)}
          helperText={errors.mainCard?.message}
          size="small"
          disabled={readonly}
          {...register("mainCard", {
            minLength: {
              value: 10,
              message: "Минимальная длина номера карты 10 символов",
            },
          })}
        />
        <Typography
          sx={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 22,
            marginBottom: '20px',
          }}
        >
          Дополнительные карты
        </Typography>
        <TextField
          className={classes.field}
          placeholder="Введите номер карты"
          defaultValue={data.additionalCard1}
          error={Boolean(errors.additionalCard1?.message)}
          helperText={errors.additionalCard1?.message}
          size="small"
          disabled={readonly}
          {...register("additionalCard1", {
            minLength: {
              value: 10,
              message: "Минимальная длина номера карты 10 символов",
            },
          })}
        />
        <TextField
          className={classes.field}
          placeholder="Введите номер карты"
          defaultValue={data.additionalCard2}
          error={Boolean(errors.additionalCard2?.message)}
          helperText={errors.additionalCard2?.message}
          size="small"
          disabled={readonly}
          {...register("additionalCard2", {
            minLength: {
              value: 10,
              message: "Минимальная длина номера карты 10 символов",
            },
          })}
        />
        <div className={`${classes.BuyerProfileButtons}`}>
          { readonly ? (
            <Button
              className={classes.button}
              size="large"
              variant="contained"
              onClick={onEdit}
            >
              Редактировать
            </Button>
          ) : (
            <>
              <Button
                className={classes.button}
                type="submit"
                size="large"
                variant="contained"
                onClick={onSave}
              >
                Сохранить
              </Button>
              <Button
                className={classes.button}
                variant="outlined"
                onClick={onCancelEdit}
              >
                Отменить
              </Button>
            </>
          )}
        </div>
      </form>
    </div>
  )
}