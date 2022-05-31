import React from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/Title';
import Button from 'components/Button';
import HistoryList from 'components/HistoryList';

import { ContentWrapper, Wrapper } from './History.styles';

const History = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title />
        <section>
          <h2>Trips history</h2>
          <HistoryList />
          <Link to="/">
            <Button>Select a route</Button>
          </Link>
        </section>
      </ContentWrapper>
    </Wrapper>
  );
};

export default History;