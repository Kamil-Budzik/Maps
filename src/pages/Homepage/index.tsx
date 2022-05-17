import React from 'react';

import Title from 'components/Title';
import StartingLocationDropdown from 'components/DropdownCombobox/StartingLocationDropdown';

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
          {/*<DebouncedInput placeholder="Początkowa lokalizacja" />*/}
          <StartingLocationDropdown />
          {/*<DestinationDropdown />*/}
        </FormWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Homepage;