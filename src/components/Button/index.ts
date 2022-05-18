import styled from 'styled-components';

interface Props {
  isPdf?: boolean;
}

const Button = styled.button<Props>`
  border: none;
  border-radius: 43px;
  background: ${({ theme, isPdf }) =>
    isPdf ? theme.colors.red : theme.colors.primary};
  color: white;
  font-size: 2rem;
  padding: 0.5em 1em;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${({ theme, isPdf }) =>
      isPdf ? theme.colors.redHover : theme.colors.primaryHover};
  }
`;

export default Button;