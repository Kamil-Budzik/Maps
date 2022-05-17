import React, { useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux';

import {
  setDestinationCities,
  setDestinationCity,
  setStartingCities,
  setStartingCity,
} from 'features/location/locationSlice';
import { RootState } from 'store';

import Input from './index';

interface Props {
  placeholder: string;
  len?: number;
  type: 'destination' | 'starting-location';
}

const DebouncedInput = ({ placeholder, len, type }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { startingCity, destinationCity } = useSelector(
    (state: RootState) => state.location
  );
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);

    if (type === 'starting-location') {
      dispatch(setStartingCity(event.target.value));
    }
    if (type === 'destination') {
      dispatch(setDestinationCity(event.target.value));
    }
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 300),
    [changeHandler]
  );

  // Set input value after list click
  useEffect(() => {
    if (inputRef.current) {
      if (type === 'starting-location') {
        inputRef.current.value = startingCity;
      }
      if (type === 'destination') {
        inputRef.current.value = destinationCity;
      }
    }
  }, [startingCity, destinationCity, type]);

  useEffect(() => {
    if (query) {
      (async () => {
        const { data } = await axios.get(
          `https://geocode.search.hereapi.com/v1/geocode?q=${query}&apiKey=${process.env.REACT_APP_API_KEY}`
        );

        if (inputRef.current) {
          if (type === 'starting-location') {
            dispatch(setStartingCities(data.items));
          }
          if (type === 'destination') {
            dispatch(setDestinationCities(data.items));
          }
        }
      })();
    }
  }, [query, dispatch, type]);

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