import { Spinner } from 'shared/ui/Spinner/Spinner';
import classes from './BuyerProfileCard.module.scss';
import { BuyerProfile } from '../../model/buyerProfile.types';
import { 
  Avatar, 
  Button, 
  ButtonBase, 
  FormControlLabel, 
  InputLabel, 
  MenuItem, 
  Radio, 
  RadioGroup, 
  Select, 
  TextField, 
  Typography 
} from '@mui/material';
import { useAppDispatch } from 'app/store/hooks';
import { useForm } from 'react-hook-form';
import {
  updateBuyerProfileData 
} from '../../model/services/updateBuyerProfileData/updateBuyerProfileData';
import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { getBuyerProfileForm } from '../../model/selectors/getBuyerProfileForm';
import { useParams } from 'react-router-dom';


interface BuyerProfileCardProps {
  error?: string;
  isLoading?: boolean;
}

export const BuyerProfileCard = (props: BuyerProfileCardProps) => {
  const {
    isLoading,
  } = props;
  const data = useSelector(getBuyerProfileForm);
  const { id } = useParams<{ id: string }>();


  const dispatch = useAppDispatch();
  const [readonly, setReadonly] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: data?.firstName,
      lastName: data?.lastName,
      email: data?.email,      
      phone: data?.phone,
      city: data?.location?.city,
      address: data?.location?.street,
    },
    mode: "onSubmit",
  });

  const changeCity = () => {
    console.log(`City has been changed`);
  }

  const onEdit = () => {
    setReadonly(false);
  };

  const onCancelEdit = () => {
    setReadonly(true);
  };

  const onSave = useCallback(() => {
    // dispatch(updateBuyerProfileData());
    setReadonly(true);
  }, [dispatch]);

  const onSubmit = (newData: BuyerProfile) => {
    const { firstName, lastName, email, phone } = newData;
    console.log(
      `Новые данные пользователя: 
      ${firstName}, ${lastName}, ${email}, ${phone}`
    );
    dispatch(updateBuyerProfileData({externalId: id, buyer: newData}));
  };

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
        <Avatar
          sx={{
            alignSelf: 'left',
            width: '160px', 
            height: '160px' 
          }}
        />
        <ButtonBase 
          sx={{
            width: '160px',
            alignSelf: 'left',
            textAlign: 'left',
            marginTop: 0.5,
            fontSize: '16px',
          }}
        >
          Изменить фото
        </ButtonBase> 
        <Typography
          sx={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 22,
            marginTop: '40px', 
            marginBottom: '20px',
          }}
        >
          Имя
        </Typography>
        <TextField
          className={classes.field}
          placeholder="Имя"
          defaultValue={data?.firstName}
          error={Boolean(errors.firstName?.message)}
          helperText={errors.firstName?.message}
          size="small"
          disabled={readonly}
          {...register("firstName", {
            required: "Укажите имя",
            minLength: {
              value: 2,
              message: "Минимальная длина имени 2 символа",
            },
          })}
        />
        <TextField
          className={classes.field}
          placeholder="Фамилия"
          defaultValue={data?.lastName}
          error={Boolean(errors.lastName?.message)}
          helperText={errors.lastName?.message}
          size="small"
          disabled={readonly}
          {...register("lastName", {
            required: "Укажите фамилию",
            minLength: {
              value: 2,
              message: "Минимальная длина фамилии 2 символа",
            },
          })}
        />
        <Typography
          sx={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 22,
            marginTop: '40px',
            marginBottom: '20px',
          }}
        >
          Контакты
        </Typography> 
        <TextField
          className={classes.field}
          placeholder="Адрес электронной почты"
          defaultValue={data?.email}
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          size="small"
          disabled={readonly}
          {...register("email", {
            required: "Укажите e-mail",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Неверный e-mail",
            },
          })}
        /> 
        <TextField
          className={classes.field}
          placeholder="Номер телефона"
          defaultValue={data?.phone}
          error={Boolean(errors.phone?.message)}
          helperText={errors.phone?.message}
          size="small"
          disabled={readonly}
          {...register("phone", {
            required: "Укажите телефон",
            pattern: {
              value: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/i,
              message: "Неверный номер телефона",
            },
          })}
        />
        <RadioGroup
          aria-labelledby="gender-radio-buttons-group-label"
          defaultValue="male"
          name="radio-buttons-group"
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <FormControlLabel value="MALE" control={<Radio />} label="Мужской" />
          <FormControlLabel value="FEMALE" control={<Radio />} label="Женский" />
          <FormControlLabel value="NOT_INDICATED" control={<Radio />} label="Не указан" />
        </RadioGroup>
        <Typography
          sx={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 22,
            marginTop: '40px',
            marginBottom: '30px',
          }}
        >
          Город / Адрес доставки
        </Typography>
        <Select
          className={classes.field}
          labelId="city-select-label"
          id="city-select"
          defaultValue="Санкт-Петербург"
          label="Город"
          onChange={changeCity}
        >
          <MenuItem value="Санкт-Петербург">Санкт-Петербург</MenuItem>
          <MenuItem value="Выборг">Выборг</MenuItem>
          <MenuItem value="Петрозаводск">Петрозаводск</MenuItem>
        </Select>
        <TextField
          className={classes.field}
          placeholder="Адрес"
          defaultValue={data?.location?.street}
          error={Boolean(errors.address?.message)}
          helperText={errors.address?.message}
          size="small"
          disabled={readonly}
          {...register("address", {
            required: "Укажите адрес",
            minLength: {
              value: 5,
              message: "Слишком короткий адрес",
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
  );
};
