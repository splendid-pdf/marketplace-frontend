import React, { useState } from 'react';
import classes from './RegisterBuyerForm.module.scss';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { Paper, Typography, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import { BackdropMarket } from 'shared/ui/Backdrop/BackdropMarket';
import { axiosInstance } from '../../../../shared/api/axiosInstance';
import { setItemToLS } from '../../../../shared/utils/setItemToLS';
import {
  LS_KEY_EMAIL,
  LS_KEY_ID,
  LS_KEY_PASSWORD 
} from '../../../../shared/constants/localStorage';
import { API_REGISTER_BUYER_URL } from '../../../../shared/api/apiEndpoints';
import { BASE_URL } from '../../../../shared/constants/base_url';

interface RegisterBuyerFormProps {
  isOpened: boolean;
}

export const RegisterBuyerForm: React.FC<RegisterBuyerFormProps> = ({ isOpened }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [opened, setOpened] = useState(isOpened);


  const {
    watch,
    control,
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      checkbox: false,
    },
    mode: 'onSubmit',
  });

  //eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const onSubmit = async (obj) => {
    const { email, password, checkbox } = obj;
    console.log({ email, password, checkbox });
    try {
      // TODO: Когда будет работать сервер, все эти функции до "const response ..." 
      // нужно будет удалить -
      // они повторяются в конце try-блока, после успешного ответа от сервера
      console.log(`we are in onSubmit`);
      if (checkbox) {
        setItemToLS(LS_KEY_EMAIL, email);
        setItemToLS(LS_KEY_PASSWORD, password);
      }
      setItemToLS(LS_KEY_ID, 'userID_received_from_api');
      reset();
      setOpened(false);
      navigate('marketplace-frontend?popup=login');
      const response = await axiosInstance.post(
        // TODO: Вставить правильный URL для регистрации, когда будет работать сервер
        API_REGISTER_BUYER_URL,
        JSON.stringify({ obj }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.dir(response.data);
      if (checkbox) {
        setItemToLS(LS_KEY_EMAIL, email);
        setItemToLS(LS_KEY_PASSWORD, password);
      }
      setItemToLS(LS_KEY_ID, response.data);
      reset();
      setOpened(false);
      navigate(`/${BASE_URL}?popup=login`);
    } catch (error) {
      console.error(error);
    }
  };

  const navigateBack = () => {
    navigate(location.pathname);
  };

  return (
    <BackdropMarket isOpen={opened}>
      <Paper elevation={5} className={classes.root}>
        <CloseIcon className={classes.iconClose} onClick={navigateBack} />
        <Typography variant="h5" className={classes.typography}>
          Регистрация
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <TextField
            className={classes.field}
            placeholder={'E-mail'}
            error={Boolean(errors.email?.message)}
            helperText={errors.email?.message}
            size="small"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('email', {
              required: 'Укажите e-mail',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Неверный e-mail',
              },
            })}
          />
          <TextField
            classes={{ root: classes.field }}
            type="password"
            autoComplete="off"
            placeholder={'Пароль'}
            size="small"
            error={Boolean(errors.password?.message)}
            helperText={errors.password?.message}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('password', {
              required: 'Введите пароль',
              minLength: {
                value: 6,
                message: 'Минимальная длина пароля 6 символов',
              },
              maxLength: {
                value: 14,
                message: 'Максимальная длина пароля 14 символов',
              },
              pattern: {
                value: /^[\w~'`!@#№?$%^&*()=+<>|/\\.,:;[\]{} \x22-]{6,25}$/i,
                message: 'Пароль указан некорректно',
              },
            })}
          />
          <TextField
            className={classes.field}
            type="password"
            autoComplete="off"
            placeholder={'Повторите пароль'}
            size="small"
            error={Boolean(errors.confirmPassword?.message)}
            helperText={errors.confirmPassword?.message}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('confirmPassword', {
              required: 'Введите повторно пароль',
              validate: (val: string) => {
                if (watch('password') != val) {
                  return 'Ваши пароли не совпадают';
                }
              },
              minLength: {
                value: 6,
                message: 'Минимальная длина пароля 6 символов',
              },
              maxLength: {
                value: 14,
                message: 'Максимальная длина пароля 14 символов',
              },
              pattern: {
                value: /^[\w~'`!@#№?$%^&*()=+<>|/\\.,:;[\]{} \x22-]{6,25}$/i,
                message: 'Пароль указан некорректно',
              },
            })}
          />
          <Controller
            name="checkbox"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                className={classes.checkbox}
                // eslint-disable-next-line react/jsx-props-no-spreading
                control={<Checkbox {...field} checked={field.value} disabled={!isValid} />}
                label="Запомнить"
              />
            )}
          />
          <Button
            // disabled={!isValid}
            type="submit"
            size="large"
            variant="contained"
            className={classes.buttonSubmit}
          >
            Подтвердить
          </Button>
        </form>
      </Paper>
    </BackdropMarket>
  );
};
