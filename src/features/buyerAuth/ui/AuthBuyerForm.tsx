import React from "react";
import classes from "./AuthBuyerForm.module.scss";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, Link as LinkMUI } from "@mui/material";
import { getItemFromLS } from "shared/utils/getItemFromLS";
import { LS_KEY_EMAIL, LS_KEY_PASSWORD } from "shared/constants/localStorage";
import { useAppDispatch } from "app/store/hooks";
import { Modal } from "shared/ui/Modal/Modal";
import { loginBuyer } from '../model/slice/loginBuyer';
import { buyerAuthActions } from '../model/slice/buyerAuthSlice';
import { BuyerAuth } from '../model/types/BuyerAuthSchema';

interface AuthBuyerFormProps {
  isOpened: boolean;
}

export const AuthBuyerForm: React.FC<AuthBuyerFormProps> = ({ isOpened }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: getItemFromLS(LS_KEY_EMAIL) || "",
      password: getItemFromLS(LS_KEY_PASSWORD) || "",
    },
    mode: "onSubmit",
  });

  const onSubmit = (obj: BuyerAuth) => {
    const { email, password } = obj;
    const role = "buyer";

    // TODO: remove this line when the backend is ready
    // dispatch(buyerAuthActions.setAuthData({ email, password }));

    // TODO: uncomment this line when the backend is ready
    dispatch(loginBuyer({ email, password }));
    navigate("marketplace-frontend");
  };

  return (
    <Modal isOpened={isOpened} title="Вход">
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
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          size="small"
          {...register("password", {
            required: "Неверный логин и/или пароль",
            minLength: {
              value: 6,
              message: "Минимальная длина пароля 6 символов",
            },
            maxLength: {
              value: 14,
              message: "Максимальная длина пароля 14 символов",
            },
            pattern: {
              value: /^[\w~'`!@#№?$%^&*()=+<>|/\\.,:;[\]{} \x22-]{6,14}$/i,
              message:
                "от 6 до 14 символов, латинский алфавит a-z, A-Z, цифры 0-9, символы ()!@#$%&*.",
            },
          })}
        />

        <Button
          type="submit"
          size="large"
          variant="contained"
          className={classes.buttonSubmit}
        >
          Войти
        </Button>
      </form>
      <div className={classes.linkContainer}>
        <LinkMUI to={`?popup=login`} underline="none" component={Link}>
          Забыли пароль?
        </LinkMUI>
        <LinkMUI to={`?popup=register`} underline="none" component={Link}>
          Создать аккаунт?
        </LinkMUI>
      </div>
    </Modal>
  );
};
