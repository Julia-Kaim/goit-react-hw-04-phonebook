import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <div className={styles.filter}>
      <label className={styles.labelFilter}>
        Filter
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={styles.filterInput}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;

