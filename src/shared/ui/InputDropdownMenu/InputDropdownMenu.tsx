import { Box, FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { FC, useState } from "react";
import classes from "./InputDropdownMenu.module.scss";
import "./InputDropdownMenu.css"// создала для изменения стиля рамки выпад. меню, так как нужно лезть внутрь компонентра муи

const ITEM_HEIGHT = 45;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      borderRadius: "20px",
      boxShadow: "none",
      border: "1px solid #A3A3A3",
      marginTop: "10px",
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,// добавляю для появления scroll
      width: 250,
    }
  }
};

export enum SizeInputVarianDropMenu {
  // eslint-disable-next-line no-unused-vars
  inputSmallMain = "inputSmallMain",
  // eslint-disable-next-line no-unused-vars
  inputBigMain = "inputBigMain",
}

type TInputDropdownMenuProps = {
  values: string[];
  onSave?: (name: string) => void;
  width?:SizeInputVarianDropMenu;
}
const InputDropdownMenu: FC<TInputDropdownMenuProps> = ({
  values,
  onSave,
  width = SizeInputVarianDropMenu.inputSmallMain
}) => {
  const [name, setName] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setName(event.target.value as string);
    if(onSave){
      onSave(event.target.value as string)
    }
  };
        
  return(
    <Box sx={{ minWidth: 120 }}>
      <FormControl 
        fullWidth
        className={
          width === SizeInputVarianDropMenu.inputSmallMain
            ?
            classes.inputSmallMain
            :
            classes.inputBigMain}>
        <Select className={classes.inputMain}
          value={name}
          onChange={handleChange}
          MenuProps={MenuProps}
        >
          {values.map((item) => (
            <MenuItem
              className={classes.dropdownMenu}
              key={item}
              value={item}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
};

export default InputDropdownMenu;