import styled, { css } from 'styled-components';

interface InputProps {
  isBig?: boolean;
  len?: number;
}

const Input = styled.input<InputProps>`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 43px;
  padding: ${({ isBig }) => (isBig ? '1em 2em' : '1em')};
  font-size: ${({ isBig }) => (isBig ? '1.25rem' : '1rem')};
  outline: none;
  width: ${({ isBig }) => (isBig ? '100%' : 'auto')};

  ${({ len }) =>
    len &&
    css`
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      outline: none;
    `}
  &::placeholder {
    color: #e5d4d4;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primaryHover};
    ${({ len }) =>
      len &&
      css`
        outline: none;
      `}
  }
`;

export default Input;