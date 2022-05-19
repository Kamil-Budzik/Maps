import React from 'react';
import { Link } from 'react-router-dom';

import Title from 'components/Title';
import Button from 'components/Button';

import { ContentWrapper, Item, List, Wrapper } from './History.styles';

const History = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title />
        <section>
          <h2>Historia tras</h2>
          <List>
            <Item>
              <div>Paris, France {'->'} Brzeg, Opolskie</div>
              <div>500km</div>
            </Item>
            <Item>
              <div>Paris, France {'->'} Brzeg, Opolskie</div>
              <div>500km</div>
            </Item>
          </List>
          <Link to="/">
            <Button>Powrót</Button>
          </Link>
        </section>
      </ContentWrapper>
    </Wrapper>
  );
};

export default History;