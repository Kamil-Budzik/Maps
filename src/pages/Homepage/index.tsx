import React from 'react';

import Title from 'components/Title';
import DebouncedInput from 'components/Input/debouncedInput';

import { ContentWrapper, FormWrapper, Wrapper } from './Homepage.styles';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

const Homepage = () => {
  const location = useSelector((state: RootState) => state.location);
  console.log(location);
  return (
    <Wrapper>
      <ContentWrapper>
        <Title />
        <FormWrapper>
          <DebouncedInput placeholder="Początkowa lokalizacja" />
        </FormWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Homepage;