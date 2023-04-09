import { Spinner } from 'shared/ui/Spinner/Spinner';
import classes from './BuyerProfileCard.module.scss';
import { BuyerProfile, Gender } from '../../model/buyerProfile.types';
import { 
  Avatar, 
  Button, 
  ButtonBase, 
  FormControlLabel, 
  MenuItem, 
  Radio, 
  RadioGroup, 
  Select, 
  TextField, 
  Typography 
} from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { useForm } from 'react-hook-form';
import {
  updateBuyerProfileData 
} from '../../model/services/updateBuyerProfileData/updateBuyerProfileData';
import { useCallback, useEffect, useState } from 'react';
import { LS_KEY_BUYER_ACCESS_TOKEN, LS_KEY_BUYER_ID } from 'shared/constants/localStorage';
import { 
  fetchBuyerProfileData 
} from '../../model/services/fetchBuyerProfileData/fetchBuyerProfileData';
import { getBuyerProfileData } from '../../model/selectors/getBuyerProfileData';
import { buyerProfileActions } from '../../model/slice/buyerProfileSlice';
import { getBuyerProfileIsLoading } from '../../model/selectors/getBuyerProfileIsLoading';
import { getBuyerProfileError } from '../../model/selectors/getBuyerProfileError';
import { axiosInstance } from 'shared/api/axiosInstance';

export const BuyerProfileCard = () => {
  const isLoading = useAppSelector(getBuyerProfileIsLoading);
  const data = useAppSelector(getBuyerProfileData) || {};
  const error = useAppSelector(getBuyerProfileError);
  
  const id = localStorage.getItem(LS_KEY_BUYER_ID) || '';

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
      deliveryAddress: data?.location?.deliveryAddress,
      sex: data?.sex,
      photoUrl: data?.photoUrl,
    },
    mode: "onChange",
  });

  const [image, setImage] = useState(data?.photoUrl || '');

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setImage(URL.createObjectURL(img));
      console.log(`image is ${image}`);
      addPhoto();
    }
    try {
      dispatch(buyerProfileActions.setPhotoUrl(image));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
      dispatch(fetchBuyerProfileData(id));
      console.log(`city is ${data?.location?.city}`);
      console.log(`image is ${data?.photoUrl}`);
      console.log(`firstName is ${data?.firstName}`);
  }, [dispatch, id]);

  const onEdit = () => {
    setReadonly(false);
    dispatch(buyerProfileActions.setReadonly(false));
  };

  const addPhoto = async () => {
    const url = `http://51.250.102.12:9001/public/api/v1/files?fileType=PHOTO`;
    // eslint-disable-next-line max-len
    // const url = `https://d5dgfhb917mq6267t8v5.apigw.yandexcloud.net/public/api/v1/uploads?fileId=photo&fileType=PHOTO`;
    try {
      const response = await axiosInstance.post(url, image, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem(LS_KEY_BUYER_ACCESS_TOKEN)}`,
        },
      });

      if (!response.data) {
        throw new Error();
      }
      console.log(`response.data is ${response.data}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const onCancelEdit = () => {
    setReadonly(true);
  };

  const onSubmit = async (newData: 
    { city: string | undefined; 
      deliveryAddress: string | undefined; 
      firstName: string | undefined; 
      lastName: string | undefined; 
      email:  string | undefined; 
      phone: string | undefined; 
      sex: Gender | undefined; 
      photoUrl: string | undefined; 
    }) => {
    const location = {
      city: newData.city,
      deliveryAddress: newData.deliveryAddress,
    }
    const { firstName, lastName, email, phone, sex, photoUrl } = newData;
    console.dir(location);
    const updatedProfile: BuyerProfile = {
      ...newData,
      location,
    }
    try {
      console.log(
        `Новые данные пользователя: 
        ${firstName}, ${lastName}, ${email}, ${phone}, 
        ${sex}, ${location.city}, ${location.deliveryAddress}`
      );
      dispatch(updateBuyerProfileData({externalId: id, buyer: updatedProfile}));
    } catch (error) {
      console.error(error);
    }   
  };

  if (isLoading) {
    return (
      <div className={`${classes.BuyerProfileCard}`}>
        <Spinner />
      </div>
    );
  }

  else return (
    <div className={`${classes.BuyerProfileCard}`}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        {/* <Avatar>
          <label htmlFor="avatar">Upload avatar</label>
          <input
            {...register('photoUrl')}
            className="file-upload-field"
            type="file"
            src={data?.photoUrl}
            onChange={onImageChange}
            />
          <img src={image || ''} width="200px" height="200px" />
        </Avatar> */}
        {/* <ButtonBase 
          sx={{
            width: '160px',
            alignSelf: 'left',
            textAlign: 'left',
            marginTop: 0.5,
            fontSize: '16px',
          }}
          onClick={addPhoto}
        >
          Изменить фото
        </ButtonBase>  */}
        <div>
          <Avatar
            sx={{
              width: '200px',
              height: '200px',
              alignSelf: 'left',
            }}
          >
            <img src={image || ''} width="200px" height="200px"/>
          </Avatar>  
          <label htmlFor="photoUrl">Изменить фото</label>
          <input
            {...register('photoUrl')}
            type="file"
            onChange={onImageChange}           
          />     
          
        </div>
        <Typography
          sx={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 22,
            marginTop: '40px', 
            marginBottom: '20px',
          }}
        >
          Имя
        </Typography>
        <TextField
          className={classes.field}
          placeholder="Имя"
          defaultValue={data?.firstName}
          aria-invalid={errors.firstName ? "true" : "false"}
          error={Boolean(errors.firstName?.message)}
          helperText={errors.firstName?.message}
          size="small"
          disabled={readonly}
          {...register("firstName", {
            // required: "Укажите имя",
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
          aria-invalid={errors.lastName ? "true" : "false"}
          error={Boolean(errors.lastName?.message)}
          helperText={errors.lastName?.message}
          size="small"
          disabled={readonly}
          {...register("lastName", {
            // required: "Укажите фамилию",
            minLength: {
              value: 2,
              message: "Минимальная длина фамилии 2 символа",
            },
          })}
        />
        <Typography
          sx={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 22,
            marginTop: '40px',
            marginBottom: '20px',
          }}
        >
          Контакты
        </Typography> 
        <TextField
          className={classes.field}
          placeholder="Адрес электронной почты"
          defaultValue={data?.email}
          aria-invalid={errors.email ? "true" : "false"}
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          size="small"
          disabled={readonly}
          {...register("email", {
            // required: "Укажите e-mail",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Неверный e-mail",
            },
          })}
        /> 
        <TextField
          className={classes.field}
          placeholder="+71234567890"
          defaultValue={data?.phone}
          aria-invalid={errors.phone ? "true" : "false"}
          error={Boolean(errors.phone?.message)}
          helperText={errors.phone?.message}
          size="small"
          disabled={readonly}
          {...register("phone", {
            // required: "Укажите телефон",
            pattern: {
              value: /(?:\(?\+\d{2}\)?\s*)?\d+(?:[ -]*\d+)*$/i,
              message: "Неверный номер телефона",
            },
          })}
        />
        <RadioGroup
          aria-labelledby="gender-radio-buttons-group-label"
          defaultValue={data?.sex}
          {...register("sex")}
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <FormControlLabel value="MALE" control={<Radio />} label="Мужской" />
          <FormControlLabel value="FEMALE" control={<Radio />} label="Женский" />
          <FormControlLabel value="NONE" control={<Radio />} label="Не указан" />
        </RadioGroup>
        <Typography
          sx={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 22,
            marginTop: '40px',
            marginBottom: '30px',
          }}
        >
          Город / Адрес доставки
        </Typography>
        <Select
          className={classes.field}
          labelId="city-select-label"
          id="city-select"
          defaultValue={data?.location?.city}
          aria-invalid={errors.city ? "true" : "false"}
          error={Boolean(errors.city?.message)}
          label="Город"
          disabled={readonly}
          {...register("city")}
        >
          <MenuItem value="Saint-Petersburg">Saint-Petersburg</MenuItem>
          <MenuItem value="Vyborg">Vyborg</MenuItem>
          <MenuItem value="Petrozavodsk">Petrozavodsk</MenuItem>
        </Select>
        <TextField
          className={classes.field}
          placeholder="Адрес"
          defaultValue={data?.location?.deliveryAddress}
          aria-invalid={errors.deliveryAddress ? "true" : "false"}
          error={Boolean(errors.deliveryAddress?.message)}
          helperText={errors.deliveryAddress?.message}
          size="small"
          disabled={readonly}
          {...register("deliveryAddress", {
            // required: "Укажите адрес",
            minLength: {
              value: 5,
              message: "Слишком короткий адрес",
            },
          })}
        />
        <div className={`${classes.BuyerProfileButtons}`}>
          { readonly ? (
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
      {error && (<div className="error">{error}</div>)}
    </div>
  );
};
