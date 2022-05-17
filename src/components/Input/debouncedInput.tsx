import React, { useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux';

import { setNewCities, setStartingCity } from 'features/location/locationSlice';
import { RootState } from 'store';

import Input from './index';

interface Props {
  placeholder: string;
  len?: number;
}

const DebouncedInput = ({ placeholder, len }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { startingCity } = useSelector((state: RootState) => state.location);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    dispatch(setStartingCity(event.target.value));
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 300),
    []
  );

  // Set input value after list click
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = startingCity;
    }
  }, [startingCity]);

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
    <Input
      ref={inputRef}
      isBig
      placeholder={placeholder}
      onChange={debouncedChangeHandler}
      len={len || 0}
    />
  );
};

export default DebouncedInput;