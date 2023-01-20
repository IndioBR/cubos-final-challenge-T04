import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    width: 100%;
    text-decoration: underline;
    color: ${theme.colors.defaults.pink};
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
  `}
`;
