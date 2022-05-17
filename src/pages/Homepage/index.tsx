import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

import Title from 'components/Title';
import StartingLocationDropdown from 'components/DropdownCombobox/StartingLocationDropdown';
import DestinationDropdown from 'components/DropdownCombobox/DestinationDropdown';

import { ContentWrapper, FormWrapper, Wrapper } from './Homepage.styles';
import Button from 'components/Button';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const location = useSelector((state: RootState) => state.location);

  return (
    <Wrapper>
      <ContentWrapper>
        <Title />
        <FormWrapper>
          {/*<DebouncedInput placeholder="Początkowa lokalizacja" />*/}
          <StartingLocationDropdown />
          <DestinationDropdown />
          <Link to="/map">
            <Button>Wyznacz drogę</Button>
          </Link>
        </FormWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Homepage;