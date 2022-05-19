import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

export const ContentWrapper = styled.main`
  border-radius: 25px;
  padding: 1em 4em 6em;
  background: white;
  max-width: 750px;
  height: 600px;
  text-align: center;
  overflow-y: auto;

  h2 {
    font-size: 2rem;
    margin-bottom: 1em;
  }

+`;
