import classNames from "classnames";
import classes from "./SellerCreateNewProductPage.module.scss";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import {Button, TextField } from "@mui/material";
import { materialArray } from "shared/constants/ materialsCreateNewProduct";
import { colorArray } from "shared/constants/colorCreateNewProduct";
import InputDropdownMenu from "shared/ui/InputDropdownMenu/InputDropdownMenu";
import { TextFieldMarketPlace, TextFieldVariant } from "shared/ui/TextField/TextFieldMarketPlace";
import { SizeInputVarianDropMenu } from "shared/ui/InputDropdownMenu/InputDropdownMenu";
// import { ButtonMarketPlace } from "shared/ui/Button/ButtonMarketPlace";
import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";

export interface Prod {
 nameProduct?: string;
 nameBrand?: string;
 productWidth?:number;
 productHeight?:number;
 productDepth?:number;
 productWeight?:number;
 productColor?:string;
 productMaterial?:string;
 productCode?:number;
 productText?: string;
}

export const SellerCreateNewProductPage = () => {

  const [searchParams] = useSearchParams();
  const [wordCount, setWordCount] = useState(0);

  const type = searchParams.get('type');
  const category = searchParams.get('category');

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const text= event.target.value;
    if (text.trim() === '') {
      setWordCount(0);
    } else {
      const words= text.trim().split(/\s+/);
      setWordCount(words.length);
    }
  };

  const {
    resetField,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nameProduct: "",
      nameBrand: "",
      productWidth: 0,
      productHeight:0,
      productDepth: 0,
      productWeight:0,
      productColor:"",
      productMaterial:"",
      productCode:0,
      productText: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = (obj:Prod) => {
    console.log(obj)
  }

  return (
    <>
      <h1 className={classes.title}>Характеристики</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        
        <div className={classes.mainContainer}>
          <h2 className={classes.titleInput}>Наименование*</h2>
          <TextFieldMarketPlace
            text="Введите наименование товара"
            variant={TextFieldVariant.bigTextField}
             // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            resetField={resetField}
            register={register("nameProduct", {
              required: "Обязательное поле для ввода!",
            })}
            error={Boolean(errors.nameProduct?.message)}
            helperText={errors.nameProduct?.message}
          />
        </div>
       
        <div className={classes.mainContainer}>
          <h2 className={classes.titleInput}>Название бренда</h2>
          <TextFieldMarketPlace
            text="Введите название бренда"
            variant={TextFieldVariant.bigTextField}
            error={Boolean(errors.nameBrand?.message)}
            helperText={errors.nameBrand?.message}
             // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            resetField={resetField}
            register={register("nameBrand", {
                required: "Обязательное поле для ввода!",
              })}
            />
        </div>

        <div className={classes.mainContainer}>
          <h2 className={classNames(classes.titleInput, classes.titleInputBottom)}>
            Размер товара
          </h2>
          <div className={classes.containerCharacteristicsInput}>
            <div>
              <div className={classes.containerInputMiniTitle}>Ширина, см</div>
              <TextFieldMarketPlace
                text="0"
                variant={TextFieldVariant.smallTextField}
                 // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                resetField={resetField}
                register={register("productWidth", {
                required: "Обязательное поле для ввода!",
              })}
              />
            </div>
            <div>
              <div className={classes.containerInputMiniTitle}>Высота, см</div>
              <TextFieldMarketPlace
                text="0"
                variant={TextFieldVariant.smallTextField}
                 // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                 //@ts-ignore
                resetField={resetField}
                register={register("productHeight", {
                required: "Обязательное поле для ввода!",
              })}/>
            </div>
            <div> 
              <div className={classes.containerInputMiniTitle}>Глубина, см</div>
              <TextFieldMarketPlace
                text="0"
                variant={TextFieldVariant.smallTextField}
                 // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                 //@ts-ignore
                resetField={resetField}
                register={register("productDepth", {
                required: "Обязательное поле для ввода!",
              })}/>
            </div>
          </div>
        </div>
      
        <div className={classes.mainContainer}>
          <h2 className={classNames(classes.titleInput, classes.titleInputBottom)}>
            Вес товара
          </h2>
          <div> 
            <div className={classes.containerInputMiniTitle}>Глубина, см</div>
            <TextFieldMarketPlace
              text="0"
              variant={TextFieldVariant.smallTextField}
               // eslint-disable-next-line @typescript-eslint/ban-ts-comment
               //@ts-ignore
              resetField={resetField}
              register={register("productWeight", {
            required: "Обязательное поле для ввода!",
          })}
              />
          </div>
        </div>
     
        <div className={classes.mainContainer}>
          <h2 className={classNames(classes.titleInput, classes.titleInputBottom)}>
            Цвет
          </h2>
          <div> 
            <div className={classes.containerInputMiniTitle}>
              Если в товаре присутствует много цветов, выберете цвет «мультиколор»
            </div>
            <InputDropdownMenu
              values={colorArray}
              width={SizeInputVarianDropMenu.inputBigMain}
        //          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //          //@ts-ignore
        //       resetField={resetField}
        //       register={register("productColor", {
        //   required: "Обязательное поле для ввода!",
        // })}
              />
          </div>
        </div>
      
        {/* <div className={classes.mainContainer}>
          <h2 className={classes.titleInput}>Материалы</h2>
          <div>
            <InputDropdownMenu
              values={materialArray}
              width={SizeInputVarianDropMenu.inputBigMain}
          />
          </div>
        </div> */}

        {/* <div className={classes.mainContainer}>
          <h2 className={classes.titleInput}>Описание</h2>
          <TextField
            multiline
            rows={13}
            InputProps={{ sx: { height: 298 } }}
            placeholder="Опишите ваш товар"
            sx={{
            width: "630px",
            '& textarea': {
              height: 298,
              paddingRight:'40px',
              marginLeft:"10px",
              fontSize:"16px",
              fontFamily:"Montserrat, sans-serif",
            }
          }}
            onChange={handleTextChange}
            {...register("productText", {
                required: "Обязательное поле для ввода!",
              })}
        />
          <div className={classes.textUnderInput}>Количество слов: {wordCount}/2000</div>
        </div> */}

        <div className={classes.mainContainer}>
          <h2 className={classNames(classes.titleInput, classes.titleInputBottom)}>
            Фото
          </h2>
          <div> 
            <div className={classes.containerInputMiniTitle}>
              Фото не более 5 шт, минимум 450х450 px
            </div>
            <div className={classes.photo}></div>
          </div>
        </div>

        <div className={classes.mainContainer}>
          <h2 className={classNames(classes.titleInput, classes.titleInputBottom)}>
            Артикул
          </h2>
          <div> 
            <div className={classes.containerInputMiniTitle}>
              Придумайте артикул товара 8 знаков (цифры, буквы латиница)
            </div>
            <TextFieldMarketPlace
              text="00000000"
              variant={TextFieldVariant.smallTextField}
              error={Boolean(errors.productCode?.message)}
              helperText={errors.productCode?.message}
                 // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                 //@ts-ignore
              resetField={resetField}
              register={register("productCode", {
            required: "Обязательное поле для ввода!",
            minLength: {
              value: 8,
              message: "Минимальная длина артикула 8 чисел",
            },
            maxLength: {
              value: 8,
              message: "Максимальная длина артикула 8 чисел",
            },
            pattern: {
              value: /^[0-9]{8}$/,
              message: "Введите ровно восемь чисел!",
            }
          })}
              />
          </div>
        </div>

        <div className={classes.boxBtn}>
          <Button
            type="submit"
            size="large"
            variant="contained"
        >
            Добавить товар
          </Button>
        </div>
      </form>
    </>
  );
};
