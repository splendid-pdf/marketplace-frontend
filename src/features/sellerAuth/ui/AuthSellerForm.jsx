import classes from "./AuthSellerForm.module.scss";
import { useForm } from "react-hook-form";
import { Typography, TextField, Button, Link as LinkMUI } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "shared/constants/base_url";
import { useAppDispatch } from "app/store/hooks";
import { loginSeller } from "../model/slice/loginSeller";

export const AuthSellerForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const onSubmit = (obj) => {
    const { email, password } = obj;
    dispatch(loginSeller({ email, password }));
    navigate(`/${BASE_URL}/home-seller/`);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.typography}>
        Вход
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <TextField
          className={classes.field}
          placeholder={"E-mail"}
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          size="small"
          // eslint-disable-next-line react/jsx-props-no-spreading
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
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register("password", {
            required: "Введите пароль",
            minLength: {
              value: 6,
              message: "Минимальная длина пароля 6 символов",
            },
            maxLength: {
              value: 14,
              message: "Максимальная длина пароля 14 символов",
            },
            pattern: {
              value: /^[\w~'`!@#№?$%^&*()=+<>|/\\.,:;[\]{} \x22-]{6,25}$/i,
              message: "Пароль указан некорректно",
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
          Войти
        </Button>
        <Button
          to={`/${BASE_URL}/register-seller`}
          component={Link}
          // disabled={!isValid}
          type="submit"
          size="large"
          variant="contained"
          className={classes.buttonSubmitRegister}
        >
          Регистрация
        </Button>
      </form>
      <div className={classes.linkContainer}>
        <LinkMUI to={`#`} underline="none" component={Link}>
          Забыли пароль?
        </LinkMUI>
        <LinkMUI
          to={`/${BASE_URL}/register-seller`}
          underline="none"
          component={Link}
        >
          Создать аккаунт?
        </LinkMUI>
      </div>
    </div>
  );
};
