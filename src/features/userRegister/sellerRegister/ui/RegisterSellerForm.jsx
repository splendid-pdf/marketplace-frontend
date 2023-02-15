import React from 'react';
import classes from './RegisterSellerForm.module.scss';
import { Controller, useForm } from 'react-hook-form';

import { Typography, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';

export const RegisterSellerForm = () => {
  const {
    watch,
    control,
    register,
    handleSubmit,
    formState: { errors },
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
  const onSubmit = (obj) => {
    const { email, password, checkbox } = obj;
    console.log({ email, password, checkbox });
  };
  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.typography}>
        Регистрация
      </Typography>
      {Boolean(errors.checkbox?.message) && (
        <span style={{ color: 'red' }} role="alert">
          required
        </span>
      )}
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
            validate: (val) => {
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
        <Button
          // disabled={!isValid}
          type="submit"
          size="large"
          variant="contained"
          className={classes.buttonSubmit}
        >
          Подтвердить
        </Button>
        <p style={{ fontSize: 10, marginBottom: 10 }}>
          Для подтверждения аккаунта на указанную почту придёт ссылка на активацию
        </p>
        <Controller
          name="checkbox"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <FormControlLabel
              className={classes.checkbox}
              // eslint-disable-next-line react/jsx-props-no-spreading
              control={<Checkbox {...field} checked={field.value} />}
              label="При входе и регистрации вы предоставляете Согласие на обработку персональных 
              данных в соответствии c Политикой обработки персональных данных, 
              Условиями использования сайта и Правилами программы лояльности."
            />
          )}
        />
      </form>
    </div>
  );
};
