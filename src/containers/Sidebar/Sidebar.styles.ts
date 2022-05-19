import styled from 'styled-components';

export const Wrapper = styled.main`
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

  .return-btn {
    align-self: center;
  }

  @media (min-width: 800px) {
    width: 400px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
  }
`;
export const Arrow = styled.span`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.primary};
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }
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