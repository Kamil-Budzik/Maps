import styled from 'styled-components';

const Wrapper = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin: 1em 0;
  text-transform: uppercase;
`;

const Title = () => <Wrapper>Maps</Wrapper>;

export default Title;