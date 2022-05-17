import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';

import { setNewCities } from 'features/location/locationSlice';
import Input from './index';

interface Props {
  placeholder: string;
}

const DebouncedInput = ({ placeholder }: Props) => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

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
        dispatch(setNewCities(data.items));
      })();
    }
  }, [query, dispatch]);

  return (
    <Input isBig placeholder={placeholder} onChange={debouncedChangeHandler} />
  );
};

export default DebouncedInput;