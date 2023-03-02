import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1.4rem;
    border-bottom: 0.1rem solid ${theme.colors.defaults.lightGreen};
    max-height: 6rem;
  `}
`;

export const PageTitle = styled.span`
  ${({ theme }) => css`
    font-weight: 900;
    font-size: 2.4rem;
  `}
`;
