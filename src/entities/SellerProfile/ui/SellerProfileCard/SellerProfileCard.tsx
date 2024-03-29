import classes from "./SellerProfileCard.module.scss";
import {
  Avatar,
  Button,
  ButtonBase,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { useAppDispatch } from "app/store/hooks";
import { useCallback, useState } from "react";
import { BASE_URL } from "shared/constants/base_url";
import { NavLink } from "react-router-dom";

export const SellerProfileCard = () => {

  const [image, setImage] = useState<string | ArrayBuffer | null>('');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    // когда пользователь выбирает файл в диалоговом окне, браузер сохраняет список выбранных файлов в свойстве files (хранит коллекцию)
    const file = event.target.files?.[0]; // список выбранных файлов из инпута( для получения первого выбранного файла)
    if (!file) return;//Если файл не выбран, мы выходим из обработчика
    const reader = new FileReader();//создаем объект FileReader и исп-ем его для чтения содержимого файла
    reader.readAsDataURL(file);// используется для чтения содержимого файла  и считывает файл и преобраз его содержимое в строку в формате base64
    reader.onload = () => { //Событие onload вызывается, когда чтение файла завершено и содержимое файла готово для использования.
      setImage(reader.result);
    };
  };

  const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? classes.activeLink : classes.baseLink;

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
    <div className={`${classes.SellerProfileCard}`}>
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
      {/* <Avatar
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
      </ButtonBase> */}

      <div>
        <input
          style={{ display: 'none' }}
          id="upload-photo"
          name="upload-photo"
          type="file" // говорим , что input принимает файлы
          accept="image/*"
          onChange={handleImageUpload}
      />
        <Avatar
          alt="uploaded"
          src={image?.toString()}
          sx={{
            alignSelf: "left",
            width: "160px",
            height: "160px",
          }} />
        <label htmlFor="upload-photo">
          <ButtonBase
            sx={{
          width: "160px",
          alignSelf: "left",
          textAlign: "left",
          marginTop: "10px",
          fontSize: "16px",
        }}
            component="span"
      >
            Изменить фото
          </ButtonBase>
        </label>
      </div>

      <Typography
        sx={{
          fontFamily: "Manrope, sans-serif",
          fontSize: 22,
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        Имя
      </Typography>
      <TextField className={classes.field} placeholder="Введите имя" size="small" />
      <TextField
        className={classes.field}
        placeholder="Введите фамилию"
        size="small"
        disabled={readonly}
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
        placeholder="Введите номер телефона"
        size="small"
        disabled={readonly}
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
        size="small"
        disabled={readonly}
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
        size="small"
        disabled={readonly}
      />
      <TextField
        className={classes.field}
        placeholder="Введите  12 цифр"
        size="small"
        disabled={readonly}
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
        }}
      >
        Расчетный счет
      </Typography>
      <TextField
        className={classes.field}
        placeholder="Введите 12 цифр"
        size="small"
        disabled={readonly}
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
        size="small"
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
        size="small"
        disabled={readonly}
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
              Удалить
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
