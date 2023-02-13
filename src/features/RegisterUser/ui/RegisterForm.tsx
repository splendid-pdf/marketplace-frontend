import { BackdropMarket } from 'shared/ui/Backdrop/BackdropMarket';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import classes from './Register.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Controller, useForm } from 'react-hook-form';
import { Checkbox, FormControlLabel } from '@mui/material';

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

  React.useEffect(() => {
    reset();
  }, [isOpen]);

  //eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const onSubmit = (obj) => {
    console.log(obj);
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
                message: 'invalid email address',
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
            })}
          />
          <Controller
            name="checkbox"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                className={classes.checkbox}
                // eslint-disable-next-line react/jsx-props-no-spreading
                control={<Checkbox {...field} checked={field.value} />}
                label="Запомнить"
              />
            )}
          />
          <Button
            // disabled={!isValid}
            type="submit"
            size="large"
            variant="contained"
            className={classes.button}
          >
            Подтвердить
          </Button>
        </form>
      </Paper>
    </BackdropMarket>
  );
};
