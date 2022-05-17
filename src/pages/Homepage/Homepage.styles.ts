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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
+`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
`;