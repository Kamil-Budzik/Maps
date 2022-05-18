import React from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/Title';
import StartingLocationDropdown from 'components/DropdownCombobox/StartingLocationDropdown';
import DestinationDropdown from 'components/DropdownCombobox/DestinationDropdown';
import Button from 'components/Button';

import { ContentWrapper, FormWrapper, Wrapper } from './Homepage.styles';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

const Homepage = () => {
  const { stage } = useSelector((state: RootState) => state.location);
  return (
    <Wrapper>
      <ContentWrapper>
        <Title />
        <FormWrapper stage={stage}>
          <StartingLocationDropdown />
          {stage !== 'start' && <DestinationDropdown />}
          {stage === 'completed' && (
            <Link to="/map">
              <Button>Wyznacz drogę</Button>
            </Link>
          )}
        </FormWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Homepage;