import { Spinner } from "shared/ui/Spinner/Spinner";
import classes from "./SellerProfileCard.module.scss";
import { BuyerProfile } from "../../model/buyerProfile.types";
import { NavLink } from "react-router-dom";
import { BASE_URL } from "shared/constants/base_url";

import {
  Avatar,
  Button,
  ButtonBase,
  TextField,
  Typography,
} from "@mui/material";
import { useAppDispatch } from "app/store/hooks";
import { useForm } from "react-hook-form";
import { updateBuyerProfileData } 
from "../../model/services/updateBuyerProfileData/updateBuyerProfileData";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { getBuyerProfileForm } from "../../model/selectors/getBuyerProfileForm";
import { useParams } from "react-router-dom";

interface SellerProfileCardProps {
  error?: string;
  isLoading?: boolean;
}

export const SellerProfileCard = (props: SellerProfileCardProps) => {
  const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? classes.activeLink : classes.baseLink;
  const { isLoading } = props;
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
  }, [dispatch]);

  const onSubmit = (newData: BuyerProfile) => {
    const { firstName, lastName, email, phone } = newData;
    console.log(
      `Новые данные пользователя: 
      ${firstName}, ${lastName}, ${email}, ${phone}`
    );
    dispatch(updateBuyerProfileData({ externalId: id, buyer: newData }));
  };

  if (isLoading) {
    return (
      <div className={`${classes.BuyerProfileCard}`}>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={`${classes.SellerProfileCard}`}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <div className={classes.ordersHeader__linkWrapper}>
          <NavLink to={`/${BASE_URL}/seller/account`} className={setActive}>
            ИП
          </NavLink>
          <NavLink to={`/${BASE_URL}/seller/account/OOO`} className={setActive}>
            ООО
          </NavLink>
        </div>
        <Typography
          variant="h5"
          sx={{
            marginBottom: 5,
            fontFamily: "Manrope, sans-serif",
            fontSize: 36,
          }}
        >
          Личные данные
        </Typography>
        <Avatar
          sx={{
            alignSelf: "left",
            width: "160px",
            height: "160px",
          }}
        />
        <ButtonBase
          sx={{
            width: "160px",
            alignSelf: "left",
            textAlign: "left",
            marginTop: "10px",
            fontSize: "16px",
          }}
        >
          Изменить фото
        </ButtonBase>
        <Typography
          sx={{
            fontFamily: "Manrope, sans-serif",
            fontSize: 22,
            marginTop: "30px",
            marginBottom: "20px",
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
            fontFamily: "Manrope, sans-serif",
            fontSize: 22,
            marginTop: "20px",
            marginBottom: "30px",
          }}
        >
          Адрес регистрации
        </Typography>
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

        <Typography
          sx={{
            className: "qwe",
            fontFamily: "Manrope, sans-serif",
            fontSize: 22,
            marginTop: "20px",
            marginBottom: "30px",
          }}
        >
          ИП
        </Typography>
        <TextField
          className={classes.field}
          placeholder="Введите название ИП"
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
        <Typography
          sx={{
            fontFamily: "Manrope, sans-serif",
            fontSize: 22,
            marginTop: "20px",
            marginBottom: "30px",
          }}
        >
          ИНН / ОГРНИП
        </Typography>
        <TextField
          className={classes.field}
          placeholder="Введите  12 цифр"
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
          placeholder="Введите  12 цифр"
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
        <Typography
          variant="h5"
          sx={{
            marginTop: "60px",
            marginBottom: "40px",
            fontFamily: "Manrope, sans-serif",
            fontSize: 36,
          }}
        >
          Банковские данные
        </Typography>
        <Typography
          sx={{
            fontFamily: "Manrope, sans-serif",
            fontSize: 22,
            marginBottom: "30px",
            marginTop: "20px",
          }}
        >
          Расчетный счет
        </Typography>
        <TextField
          className={classes.field}
          placeholder="Введите 12 цифр"
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
        <Typography
          sx={{
            fontFamily: "Manrope, sans-serif",
            fontSize: 22,
            marginBottom: "30px",
            marginTop: "20px",
          }}
        >
          Корпоративный счет
        </Typography>
        <TextField
          className={classes.field}
          placeholder="Введите 12 цифр"
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
        <Typography
          sx={{
            fontFamily: "Manrope, sans-serif",
            fontSize: 22,
            marginBottom: "30px",
            marginTop: "20px",
          }}
        >
          БИК
        </Typography>
        <TextField
          className={classes.field}
          placeholder="Введите 12 цифр"
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
        <div className={`${classes.SellerProfileButtons}`}>
          {readonly ? (
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
