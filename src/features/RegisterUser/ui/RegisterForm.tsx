import React from 'react';
import classes from './Register.module.scss';
import { Controller, useForm } from 'react-hook-form';
import CloseIcon from '@mui/icons-material/Close';
import { Paper, Typography, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import { BackdropMarket } from 'shared/ui/Backdrop/BackdropMarket';

interface RegisterFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = (props) => {
  const { isOpen, onClose } = props;
  const {
    reset,
    watch,
    control,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      checkbox: false,
    },
    mode: 'onSubmit',
  });

  React.useEffect(() => {
    reset();
  }, [isOpen]);

  //eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const onSubmit = (obj) => {
    const { email, password, checkbox } = obj;
    console.log({ email, password, checkbox });
  };

  return (
    <BackdropMarket isOpen={isOpen}>
      <Paper elevation={5} className={classes.root}>
        <CloseIcon className={classes.iconClose} onClick={onClose} />
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
