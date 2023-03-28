import ClearIcon from '@mui/icons-material/Clear';
import { Box, IconButton, TextField } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import classes from "./TextFieldMarketPlace.module.scss";

export enum TextFieldVariant {
        // eslint-disable-next-line no-unused-vars
        bigTextField = "bigTextField",
        // eslint-disable-next-line no-unused-vars
        smallTextField = "smallTextField",
      }

interface ITextFieldMarketPlaceProps {
        text: string;
        variant:TextFieldVariant;
        register?: UseFormRegisterReturn;
        error?:boolean,
        helperText?:string,
      }

export const TextFieldMarketPlace: FC<ITextFieldMarketPlaceProps> = ({
  text,
  variant = TextFieldVariant.bigTextField,
  register,
  error,
  helperText,
}) => {

  const [value, setValue] = useState("");
  const handleClearClick = () => {
    setValue("");
  };

  return (
    <Box className={
      variant === TextFieldVariant.bigTextField? classes.bigTextField : classes. smallTextField
    }>
      <TextField
        onChange={(newValue) => {setValue(newValue.target.value)}}
        variant="outlined"
        placeholder={text}
        value={value}
        fullWidth // для нужней ширины
        error={error}
        helperText={helperText}
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleClearClick}>
              <ClearIcon />
            </IconButton>
          ),
          autoComplete: "off"// для удаления подсказки предыдущих введенных слов и синего фокуса
        }}
        sx={{"& .Mui-focused .MuiIconButton-root": { color: "#343136" }}}
        {...register}
      />    
    </Box>
  );
};