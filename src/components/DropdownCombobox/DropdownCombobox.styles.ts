import styled from 'styled-components';

export const List = styled.ul`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-top: none;
  border-bottom-left-radius: 43px;
  border-bottom-right-radius: 43px;
  max-height: 200px;
  overflow-y: auto;
`;

export const Item = styled.li`
  padding: 0.7em 0.2em;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;