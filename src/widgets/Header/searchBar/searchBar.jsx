import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import {useState, useEffect} from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import classes from './SearchBar.module.scss';
import { fetchUsersTest } from "shared/api/fetchUsersTest";


const SearchBar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchUsersTest()
      .then(data => setData(data));
  }, []);

  const [value, setValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const onChange = event => {
    setValue(event.target.value);
    if (event.target.value.length === 0) {
      setShowDropdown(false);
    } else {
      setShowDropdown(true);
    }
  };

  const onSearch = searchTerm => {
    console.log("search", searchTerm);
  };

  return (
    <div className={classes.Container}>
      <Paper
        component="form"
        style={{
          padding: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 600,
          flexGrow: 2
        }}
      >
        <InputBase
          style={{
            marginLeft: 1,
            flex: 1
          }}
          placeholder="Search product by name"
          value={value}
          onChange={onChange}
        />
        <IconButton
          type="button"
          style={{ padding: "10px" }}
          aria-label="search"
          onClick={() => onSearch(value)}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      {showDropdown && (
        <div className={classes.Dropdown}>
          {data
            .filter(item =>
              item.name.toLowerCase().includes(value.toLowerCase())
            )
            .slice(0, 10)
            .map(item => (
              <div key={item.name} className={classes.DropdownRow}>
                <a href="#" className={classes.ProductLink}>
                  {item.name}
                </a>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;