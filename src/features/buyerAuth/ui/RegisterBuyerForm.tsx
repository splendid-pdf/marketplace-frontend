import React from "react";
import classes from "./RegisterBuyerForm.module.scss";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material";

import { setItemToLS } from "shared/utils/setItemToLS";
import {
  LS_KEY_EMAIL,
  LS_KEY_PASSWORD,
} from "shared/constants/localStorage";
import { BASE_URL } from "shared/constants/base_url";
import { Modal } from "shared/ui/Modal/Modal";
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { registerBuyer } from '../model/slice/registerBuyer';

interface RegisterBuyerFormProps {
  isOpened: boolean;
}

export const RegisterBuyerForm: React.FC<RegisterBuyerFormProps> = ({ isOpened }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const error = useAppSelector(state => state.buyerAuth.errorOnRegister);

  const {
    watch,
    control,
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      checkbox: false,
    },
    mode: "onSubmit",
  });

  //eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const onSubmit = async (obj) => {
    const { email, password, checkbox } = obj;
    try {
      if (checkbox) {
        setItemToLS(LS_KEY_EMAIL, email);
        setItemToLS(LS_KEY_PASSWORD, password);
      }
      dispatch(registerBuyer({ email, password}));
      reset();
      navigate(`/${BASE_URL}?popup=login`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal isOpened={isOpened} title="Регистрация">
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <TextField
          className={classes.field}
          placeholder={"E-mail"}
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          size="small"
          {...register("email", {
            required: "Укажите e-mail",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Неверный e-mail",
            },
          })}
        />
        <TextField
          classes={{ root: classes.field }}
          type="password"
          autoComplete="off"
          placeholder={"Пароль"}
          size="small"
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          {...register("password", {
            required: "Введите пароль",
            minLength: {
              value: 8,
              message: "Минимальная длина пароля 8 символов",
            },
            maxLength: {
              value: 30,
              message: "Максимальная длина пароля 30 символов",
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*])[A-Za-z\d#$@!%&*]{8,30}$/,
              message: 
            `Пароль должен иметь от 8 до 30 символов и содержать минимум 1 букву в нижнем регистре 
            и 1 букву в верхнем, минимум 1 цифру и минимум один из символов #$@!%&*`,
            },
          })}
        />
        <TextField
          className={classes.field}
          type="password"
          autoComplete="off"
          placeholder={"Повторите пароль"}
          size="small"
          error={Boolean(errors.confirmPassword?.message)}
          helperText={errors.confirmPassword?.message}
          {...register("confirmPassword", {
            required: "Введите повторно пароль",
            validate: (val: string) => {
              if (watch("password") != val) {
                return "Ваши пароли не совпадают";
              }
            },
            minLength: {
              value: 8,
              message: "Минимальная длина пароля 8 символов",
            },
            maxLength: {
              value: 30,
              message: "Максимальная длина пароля 30 символов",
            },
          })}
        />
        { error && <p className={classes.error}>{ error }</p> }
        <Controller
          name="checkbox"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              className={classes.checkbox}
              control={<Checkbox {...field} checked={field.value} />}
              label="Запомнить"
            />
          )}
        />
        <Button
          type="submit"
          size="large"
          variant="contained"
          className={classes.buttonSubmit}
        >
          Подтвердить
        </Button>
      </form>
    </Modal>
  );
};
