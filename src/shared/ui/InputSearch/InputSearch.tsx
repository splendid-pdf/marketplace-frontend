import styles from "./InputSearch.module.scss";
import { FC } from "react";
import { ReactComponent as SearchIcon } from "../../../shared/images/icons/search.svg";
import { InputBase, IconButton, Paper } from "@mui/material";
import classNames from "classnames";

interface IInputSearchProps {
    value: string;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    // eslint-disable-next-line no-unused-vars
    onSearch: (value: string) => void;
    placeholder: string;
    iconColor?: string;
    className?: string;
}

const InputSearch: FC<IInputSearchProps> = ({
  value,
  onChange,
  onSearch,
  placeholder,
  iconColor = "#343136",
  className,
}) => {
  return (
    <>
      <Paper
        component="form"
        className={classNames(styles.inputSearch, className)}
      >
        <InputBase
          className={styles.inputSearch__input}
          placeholder={placeholder}
          inputProps={{ "aria-label": "search" }}
          value={value}
          onChange={onChange}
        />
        <IconButton
          type="submit"
          className={styles.inputSearch__iconButton}
          aria-label="search"
          onClick={() => onSearch(value)}
        >
          <SearchIcon fill={iconColor} />
        </IconButton>
      </Paper>
    </>
  );
};

export default InputSearch;
