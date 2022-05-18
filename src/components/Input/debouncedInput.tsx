import React, { useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux';

import {
  handleDestinationCity,
  handleStartingCity,
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
      dispatch(
        handleStartingCity({ ...startingCity, title: event.target.value })
      );
    }
    if (type === 'destination') {
      dispatch(
        handleDestinationCity({ ...destinationCity, title: event.target.value })
      );
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
        inputRef.current.value = startingCity.title;
      }
      if (type === 'destination') {
        inputRef.current.value = destinationCity.title;
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
            dispatch(
              handleStartingCity({
                ...startingCity,
                title: inputRef.current.value,
                cities: data.items,
              })
            );
          }
          if (type === 'destination') {
            dispatch(
              handleDestinationCity({
                ...destinationCity,
                title: inputRef.current.value,
                cities: data.items,
              })
            );
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