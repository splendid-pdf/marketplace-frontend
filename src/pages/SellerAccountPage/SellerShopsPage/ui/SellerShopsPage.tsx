import {
  Avatar,
  Button,
  ButtonBase,
  TextField,
  Typography,
} from "@mui/material";
import classes from "./SellerShopsPage.module.scss";
import { useAppDispatch } from "app/store/hooks";
import { useCallback, useState } from "react";
import { ReactComponent as Logoload } from "../../../../shared/images/icons/logoload.svg";

const SellerShopsPage = () => {
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
    <div className={`${classes.SellerShopsPage} rightWrapper`}>
      <Typography
        variant="h5"
        sx={{
          marginBottom: "40px",
          fontFamily: "Manrope, sans-serif",
          fontSize: 36,
        }}
      >
        Список магазинов
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
      <TextField
        className={classes.field}
        size="small"
        placeholder="Введите название"
      />
      <Typography
        sx={{
          fontFamily: "Manrope, sans-serif",
          fontSize: 22,
          marginTop: "20px",
          marginBottom: "30px",
        }}
      >
        Категория / Тип
      </Typography>
      <TextField
        className={classes.field}
        size="small"
        placeholder="Введите категорию"
      />
      <TextField
        className={classes.field}
        size="small"
        placeholder="Введите тип"
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
        Создать новый магазин
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
      <TextField
        className={classes.field}
        size="small"
        placeholder="Введите название"
      />
      <Typography
        sx={{
          fontFamily: "Manrope, sans-serif",
          fontSize: 22,
          marginTop: "20px",
          marginBottom: "30px",
        }}
      >
        Адрес склада
      </Typography>
      <TextField
        className={classes.field}
        size="small"
        placeholder="Введите адрес"
      />
      <Typography
        sx={{
          fontFamily: "Manrope, sans-serif",
          fontSize: 22,
          marginTop: "20px",
          marginBottom: "30px",
        }}
      >
        Лого
      </Typography>
      <Button
        className={classes.button_small}
        variant="outlined"
        onClick={onCancelEdit}
      >
        <Logoload />
      </Button>
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
              Удалить
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default SellerShopsPage;
