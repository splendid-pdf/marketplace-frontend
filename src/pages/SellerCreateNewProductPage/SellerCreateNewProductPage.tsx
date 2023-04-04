import classNames from "classnames";
import { useSearchParams } from "react-router-dom";
import { Control, Controller, useForm, useWatch } from "react-hook-form";
import classes from "./SellerCreateNewProductPage.module.scss";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { colorArray } from "shared/constants/colorCreateNewProduct";
import { materialArray } from "shared/constants/materialsCreateNewProduct";
import { TextFieldMarketPlace, TextFieldVariant } from "shared/ui/TextField/TextFieldMarketPlace";

export interface Prod {
  nameProduct: string;
  nameBrand: string;
  productWidth: number;
  productHeight: number;
  productDepth: number;
  productWeight: number;
  productColor: string;
  productMaterial: string;
  productCode: number;
  productText: string;
}

function WordCount({ control }: { control: Control<Prod> }) {
  const description = useWatch({
    control,
    name: "productText",
  });

  const wordCounter = () => {
    if (description.trim() === "") {
      return 0;
    } else {
      const words = description.trim().split(/\s+/);
      return words.length;
    }
  };
  return <div className={classes.textUnderInput}>Количество слов: {wordCounter()}/2000</div>;
}

export const SellerCreateNewProductPage = () => {
  const [searchParams] = useSearchParams();

  const type = searchParams.get("type");
  const category = searchParams.get("category");

  const MenuProps = {
    PaperProps: {
      style: {
        borderRadius: "20px",
        boxShadow: "none",
        border: "1px solid #A3A3A3",
        marginTop: "10px",
      },
    },
  };

  const {
    control,
    resetField,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nameProduct: "",
      nameBrand: "",
      productWidth: 0,
      productHeight: 0,
      productDepth: 0,
      productWeight: 0,
      productColor: "",
      productMaterial: "",
      productCode: 0,
      productText: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = (obj: Prod) => {
    console.log(obj);
  };

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
                })}
              />
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
                })}
              />
            </div>
          </div>
        </div>

        <div className={classes.mainContainer}>
          <h2 className={classNames(classes.titleInput, classes.titleInputBottom)}>Вес товара</h2>
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
          <h2 className={classNames(classes.titleInput, classes.titleInputBottom)}>Цвет</h2>
          <div>
            <div className={classes.containerInputMiniTitle}>
              Если в товаре присутствует много цветов, выберете цвет «мультиколор»
            </div>
            <Controller
              name="productColor"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  className={classes.inputBigMain}
                  MenuProps={MenuProps}
                  sx={{
                    "& .MuiSelect-select .notranslate::after": {
                      content: `"Выберите цвет"`,
                      opacity: 0.42,
                    },
                  }}
                >
                  {colorArray.map((item) => (
                    <MenuItem className={classes.dropdownMenu} key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </div>
        </div>

        <div className={classes.mainContainer}>
          <h2 className={classes.titleInput}>Материалы</h2>

          <Controller
            name="productMaterial"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                className={classes.inputBigMain}
                MenuProps={MenuProps}
                sx={{
                  "& .MuiSelect-select .notranslate::after": {
                    content: `"Выберите материал"`,
                    opacity: 0.42,
                  },
                }}
              >
                {materialArray.map((item) => (
                  <MenuItem className={classes.dropdownMenu} key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </div>

        <div className={classes.mainContainer}>
          <h2 className={classes.titleInput}>Описание</h2>

          <TextField
            multiline
            rows={13}
            InputProps={{ sx: { height: 298 } }}
            placeholder="Опишите ваш товар"
            sx={{
              width: "630px",
              "& textarea": {
                height: 298,
                paddingRight: "40px",
                marginLeft: "10px",
                fontSize: "16px",
                fontFamily: "Montserrat, sans-serif",
              },
            }}
            {...register("productText", {
              required: "Обязательное поле для ввода!",
            })}
          />
          <WordCount control={control} />
        </div>

        <div className={classes.mainContainer}>
          <h2 className={classNames(classes.titleInput, classes.titleInputBottom)}>Фото</h2>
          <div>
            <div className={classes.containerInputMiniTitle}>
              Фото не более 5 шт, минимум 450х450 px
            </div>
            <div className={classes.photo}></div>
          </div>
        </div>

        <div className={classes.mainContainer}>
          <h2 className={classNames(classes.titleInput, classes.titleInputBottom)}>Артикул</h2>
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
                },
              })}
            />
          </div>
        </div>

        <div className={classes.boxBtn}>
          <Button type="submit" size="large" variant="contained">
            Добавить товар
          </Button>
        </div>
      </form>
    </>
  );
};
