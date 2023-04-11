import classes from "./SellerAccessesPage.module.scss";
import { useAppDispatch } from "app/store/hooks";
import { useCallback, useState } from "react";
import { Avatar, Button, ButtonBase, TextField, Typography } from "@mui/material";
import { ReactComponent as Logoload } from "shared/images/icons/logoload.svg";

const SellerAccessesPage = () => {
  const dispatch = useAppDispatch();
  const [readonly, setReadonly] = useState(true);

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
  return (
    <div className={`${classes.SellerAccessesPage} rightWrapper`}>
      <Typography
        variant="h5"
        sx={{
          marginBottom: 5,
          fontFamily: "Manrope, sans-serif",
          fontSize: 36,
        }}
      >
        Список аккаунтов
      </Typography>
      <Typography
        sx={{
          fontFamily: "Manrope, sans-serif",
          fontSize: 22,
          marginBottom: "30px",
        }}
      >
        Название
      </Typography>
      <TextField className={classes.field} size="small" placeholder="Введите название" />
      <div className={`${classes.SellerProfileButtons}`}>
        {readonly ? (
          <Button className={classes.button} size="large" variant="contained" onClick={onEdit}>
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
            <Button className={classes.button} variant="outlined" onClick={onCancelEdit}>
              Удалить
            </Button>
          </>
        )}
      </div>
      <Typography
        variant="h5"
        sx={{
          marginBottom: 5,
          fontFamily: "Manrope, sans-serif",
          fontSize: 36,
        }}
      >
        Изменить права
      </Typography>
      <Typography
        sx={{
          fontFamily: "Manrope, sans-serif",
          fontSize: 22,
          marginBottom: "30px",
        }}
      >
        Название
      </Typography>
      <TextField className={classes.field} size="small" placeholder="Введите название" />
      <Typography
        sx={{
          fontFamily: "Manrope, sans-serif",
          fontSize: 22,
          marginBottom: "30px",
          marginTop: "20px",
        }}
      >
        Адрес склада
      </Typography>
      <TextField className={classes.field} size="small" placeholder="Введите адрес" />
      <Typography
        sx={{
          fontFamily: "Manrope, sans-serif",
          fontSize: 22,
          marginBottom: "30px",
          marginTop: "20px",
        }}
      >
        Лого
      </Typography>
      <Button className={classes.button_small} variant="outlined" onClick={onCancelEdit}>
        <Logoload />
      </Button>
      <Typography
        variant="h5"
        sx={{
          marginBottom: "40px",
          marginTop: "60px",
          fontFamily: "Manrope, sans-serif",
          fontSize: 36,
        }}
      >
        Добавить доступ
      </Typography>
      <Typography
        sx={{
          fontFamily: "Manrope, sans-serif",
          fontSize: 22,
          marginBottom: "30px",
        }}
      >
        Логин / Пароль
      </Typography>
      <TextField className={classes.field} size="small" placeholder="Введите логин" />
      <TextField className={classes.field} size="small" placeholder="Введите пароль" />
      <Typography
        sx={{
          fontFamily: "Manrope, sans-serif",
          fontSize: 22,
          marginBottom: "30px",
          marginTop: "20px",
        }}
      >
        Имя / Телефон
      </Typography>
      <TextField className={classes.field} size="small" placeholder="Введите имя" />
      <TextField className={classes.field} size="small" placeholder="Введите телефон" />
      <div className={`${classes.SellerProfileButtons}`}>
        {readonly ? (
          <Button className={classes.button} size="large" variant="contained" onClick={onEdit}>
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
            <Button className={classes.button} variant="outlined" onClick={onCancelEdit}>
              Удалить
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default SellerAccessesPage;
