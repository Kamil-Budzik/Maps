import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';

import Input from './index';

const DebouncedInput = () => {
  const [query, setQuery] = useState('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 300),
    []
  );

  useEffect(() => {
    if (query) {
      (async () => {
        const { data } = await axios.get(
          `https://geocode.search.hereapi.com/v1/geocode?q=${query}&apiKey=${process.env.REACT_APP_API_KEY}`
        );
        console.log(data.items);
      })();
    }
  }, [query]);

  return (
    <Input
      isBig
      placeholder="Początkowa lokacja"
      onChange={debouncedChangeHandler}
    />
  );
};

export default DebouncedInput;