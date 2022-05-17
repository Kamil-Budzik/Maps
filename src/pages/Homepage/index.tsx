import React from 'react';

import Title from 'components/Title';
import Input from 'components/Input';

import { ContentWrapper, FormWrapper, Wrapper } from './Homepage.styles';

const Homepage = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title />
        <FormWrapper>
          <Input isBig placeholder="Początkowa lokacja" />
        </FormWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Homepage;