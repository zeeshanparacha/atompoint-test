import React, { useState } from "react";
import { ReactComponent as DropdownIcon } from "../../images/dropdown.svg";
import styles from "./styles.module.css";

const Dropdown = ({ list, value, placeholder, onSelect }) => {
  const [toggle, setToggle] = useState(false);
  const _handleValues = (value) => {
    onSelect && onSelect(value);
    setToggle(!toggle);
  };
  return (
    <div className={styles.container}>
      <div className={styles.dropdown} onClick={() => setToggle(!toggle)}>
        {value ? (
          <p className={styles.values}>{value}</p>
        ) : (
          <p className={styles.placeholder}>{placeholder}</p>
        )}
        <div className={styles.icon}>
          <DropdownIcon />
        </div>
      </div>
      <div className={`${styles.modal} ${toggle && styles.toggle}`}>
        <div className={styles.dropdownContent}>
          {!!list?.length ? (
            list.map(({ label, value }) => (
              <div
                className={styles.items}
                onClick={() => _handleValues({ label, value })}
              >
                <p key={`item-${label}`} className={styles.list}>
                  {label}
                </p>
              </div>
            ))
          ) : (
            <p className={styles.list}>No content.</p>
          )}
        </div>
      </div>
    </div>
  );
};
Dropdown.defaultProps = {
  placeholder: "Please select items.",
};
export default Dropdown;
