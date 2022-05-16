import styled from 'styled-components';

export const Wrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.primary};

  @media (min-width: 800px) {
    display: flex;
  }
`;