import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Title from 'components/Title';
import StartingLocationDropdown from 'components/DropdownCombobox/StartingLocationDropdown';
import DestinationDropdown from 'components/DropdownCombobox/DestinationDropdown';
import Button from 'components/Button';

import { clearError } from 'features/error/errorSlice';
import { RootState } from 'store';

import { ContentWrapper, FormWrapper, Wrapper } from './Homepage.styles';

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
                <Button>Generate the way</Button>
              </Link>
            )}
          </FormWrapper>
        </ContentWrapper>
        <Link to="/history">
          <Button isPdf className="history-button">
            Trips history
          </Button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Homepage;