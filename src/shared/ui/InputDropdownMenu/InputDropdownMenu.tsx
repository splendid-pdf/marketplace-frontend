import { Box, FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import classes from "./InputDropdownMenu.module.scss"

const categoryNewProduct = [
  'Кухня',
  'Гостиная',
  'Санузел',
  'Детская',
  'Спальня',
  'Рабочий кабинет',
];

const InputDropdownMenu = () => {

  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
        
  return(
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          value={age}
          onChange={handleChange}
        >
          {categoryNewProduct.map((item) => (
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