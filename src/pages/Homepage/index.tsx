import React from 'react';

import Title from 'components/Title';
import DebouncedInput from 'components/Input/debouncedInput';

import { ContentWrapper, FormWrapper, Wrapper } from './Homepage.styles';

const Homepage = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title />
        <FormWrapper>
          <DebouncedInput />
        </FormWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Homepage;