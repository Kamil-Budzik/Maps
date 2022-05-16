import styled from 'styled-components';

export const Wrapper = styled.div`
  background: white;
  padding: 0 2em 3em;
  min-height: 100vh;

  .container {
    max-width: 400px;
    margin: 0 auto;
  }

  section {
    margin-bottom: 7em;
  }

  .inputWrapper:first-child {
    margin-bottom: 2em;
  }

  @media (min-width: 800px) {
    width: 350px;
  }
`;

export const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 1em;
`;

export const Subtitle = styled.h2`
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 1em;
`;

export const List = styled.ul`
  li {
    margin: 0.5em 0;
  }
`;