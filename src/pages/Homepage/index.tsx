import React from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/Title';
import StartingLocationDropdown from 'components/DropdownCombobox/StartingLocationDropdown';
import DestinationDropdown from 'components/DropdownCombobox/DestinationDropdown';
import Button from 'components/Button';

import { ContentWrapper, FormWrapper, Wrapper } from './Homepage.styles';

const Homepage = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title />
        <FormWrapper>
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