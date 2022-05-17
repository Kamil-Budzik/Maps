import styled from 'styled-components';

interface InputProps {
  isBig?: boolean;
}

const Input = styled.input<InputProps>`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 43px;
  padding: ${({ isBig }) => (isBig ? '1em 2em' : '1em')};
  font-size: ${({ isBig }) => (isBig ? '1.25rem' : '1rem')};
  outline: none;

  &::placeholder {
    color: #e5d4d4;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primaryHover};
  }
`;

export default Input;