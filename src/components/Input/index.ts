import styled from 'styled-components';

const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 43px;
  padding: 1em;
  outline: none;
`;

export default Input;