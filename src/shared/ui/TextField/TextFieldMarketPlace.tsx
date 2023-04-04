import ClearIcon from '@mui/icons-material/Clear';
import { Box, IconButton, TextField } from '@mui/material';
import { FC} from 'react';
import { ChangeHandler } from 'react-hook-form';
import classes from "./TextFieldMarketPlace.module.scss";

export enum TextFieldVariant {
        // eslint-disable-next-line no-unused-vars
        bigTextField = "bigTextField",
        // eslint-disable-next-line no-unused-vars
        smallTextField = "smallTextField",
      }

      type TRegister = {
        onChange: ChangeHandler;
        onBlur: ChangeHandler;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref: React.Ref<any>;
        name: string;
      };

interface ITextFieldMarketPlaceProps {
        text: string;
        variant:TextFieldVariant;
        register:TRegister;
        error?:boolean,
        helperText?:string,
        resetField: (name:string) => void
      }

export const TextFieldMarketPlace: FC<ITextFieldMarketPlaceProps> = ({
  text,
  variant = TextFieldVariant.bigTextField,
  register,
  error,
  helperText,
  resetField,
}) => {

  // const [value, setValue] = useState("");
  // const handleClearClick = () => {
  //   setValue("");
  // };

  return (
    <Box className={
      variant === TextFieldVariant.bigTextField? classes.bigTextField : classes. smallTextField
    }>
      <TextField
        // onChange={(newValue) => {setValue(newValue.target.value)}}
        variant="outlined"
        placeholder={text}
        // value={value}
        fullWidth // для нужней ширины
        error={error}
        helperText={helperText}
        InputProps={{
          endAdornment: (
            // <IconButton onClick={handleClearClick}>
            <IconButton edge="end" onClick={() => resetField(register.name)}>
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