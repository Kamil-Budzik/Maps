import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/Title';
import StartingLocationDropdown from 'components/DropdownCombobox/StartingLocationDropdown';
import DestinationDropdown from 'components/DropdownCombobox/DestinationDropdown';
import Button from 'components/Button';

import { ContentWrapper, FormWrapper, Wrapper } from './Homepage.styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { clearError } from '../../features/error/errorSlice';

const Homepage = () => {
  const { stage } = useSelector((state: RootState) => state.location);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  return (
    <Wrapper>
      <div className="container">
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
        <Link to="/history">
          <Button isPdf className="history-button">
            Historia tras
          </Button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Homepage;