/* eslint-disable no-unused-vars */
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import classes from './MySelect.module.scss';
const numbers = [
  10,
  20,
  30,
  40,
  50
];

interface MySelectProps {
  onChange: (count: number) => void;
}

export const MySelect: React.FC<MySelectProps> = ({ onChange }) => {

  const [count, setCount] = React.useState<number>(10);

  const handleChange = (event: SelectChangeEvent<typeof count>) => {
    const {
      target: { value },
    } = event;
    setCount(value as number);
    onChange(value as number);
  };

  return (
    <div className={classes.ContainerSelect}>
      <div>
        Показать товаров
      </div>
      <Select
        value={count}
        onChange={handleChange}
      >
        {numbers.map((number) => (
          <MenuItem key={number} value={number}>
            {number}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default MySelect;