import { useState, useEffect } from "react";
import styles from "./searchBar.module.scss";
import { fetchUsersTest } from "shared/api/fetchUsersTest";
import InputSearch from "shared/ui/InputSearch/InputSearch";

interface SearchItemProps {
    name: string;
}

const SearchBar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchUsersTest().then((data) => setData(data));
  }, []);

  const [value, setValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (event.target.value.length === 0) {
      setShowDropdown(false);
    } else {
      setShowDropdown(true);
    }
  };

  const onSearch = (searchTerm: string) => {
    console.log("search", searchTerm);
  };

  return (
    <div className={styles.Container}>
      <InputSearch
        value={value}
        onChange={onChange}
        onSearch={onSearch}
        className={styles.input}
        placeholder="Искать товары"
      />

      {showDropdown && (
        <div className={styles.Dropdown}>
          {data
            .filter((item: SearchItemProps) =>
              item.name
                .toLowerCase()
                .includes(value.toLowerCase())
            )
            .slice(0, 10)
            .map((item: SearchItemProps) => (
              <div key={item.name} className={styles.DropdownRow}>
                <a href="#" className={styles.ProductLink}>
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
