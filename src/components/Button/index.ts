import styled from 'styled-components';

const Button = styled.button`
  border: none;
  border-radius: 43px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 2rem;
  padding: 0.5em 1em;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export default Button;