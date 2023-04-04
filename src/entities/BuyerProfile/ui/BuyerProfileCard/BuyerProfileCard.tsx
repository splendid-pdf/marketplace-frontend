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
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { useForm } from 'react-hook-form';
import {
  updateBuyerProfileData 
} from '../../model/services/updateBuyerProfileData/updateBuyerProfileData';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { 
  LS_KEY_BUYER_ACCESS_TOKEN, LS_KEY_BUYER_ID 
} from '../../../../shared/constants/localStorage';
import { 
  fetchBuyerProfileData 
} from '../../model/services/fetchBuyerProfileData/fetchBuyerProfileData';
import { getBuyerProfileData } from '../../model/selectors/getBuyerProfileData';
import { axiosInstance } from '../../../../shared/api/axiosInstance';
import { buyerProfileActions } from '../../model/slice/buyerProfileSlice';
import { getBuyerProfileIsLoading } from '../../model/selectors/getBuyerProfileIsLoading';

export const BuyerProfileCard = () => {
  const isLoading = useAppSelector(getBuyerProfileIsLoading);
  const data = useAppSelector(getBuyerProfileData);
  // const readonly = useAppSelector(getBuyerProfileIsLoading);
  
  const id = localStorage.getItem(LS_KEY_BUYER_ID) || '';

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
      deliveryAddress: data?.location?.deliveryAddress,
    },
    mode: "onSubmit",
  });

  useEffect(() => {
      dispatch(fetchBuyerProfileData(id));
  }, [dispatch, id]);

  const changeCity = () => {
    console.log(`City has been changed`);
  }

  const onEdit = () => {
    console.log(`email is ${data?.email}`);
    setReadonly(false);
    dispatch(buyerProfileActions.setReadonly(false));
  };

  const onCancelEdit = () => {
    setReadonly(true);
    // dispatch(buyerProfileActions.setReadonly(true))
  };

  const onSave = useCallback(() => {
    setReadonly(true);
    // dispatch(buyerProfileActions.setReadonly(true));
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

  else return (
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
          aria-invalid={errors.firstName ? "true" : "false"}
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
          aria-invalid={errors.lastName ? "true" : "false"}
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
          aria-invalid={errors.email ? "true" : "false"}
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
          aria-invalid={errors.phone ? "true" : "false"}
          error={Boolean(errors.phone?.message)}
          helperText={errors.phone?.message}
          size="small"
          disabled={readonly}
          {...register("phone", {
            required: "Укажите телефон",
            pattern: {
              // value: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/i,
              value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/i,
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
          defaultValue={data?.location?.deliveryAddress}
          aria-invalid={errors.deliveryAddress ? "true" : "false"}
          error={Boolean(errors.deliveryAddress?.message)}
          helperText={errors.deliveryAddress?.message}
          size="small"
          disabled={readonly}
          {...register("deliveryAddress", {
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
