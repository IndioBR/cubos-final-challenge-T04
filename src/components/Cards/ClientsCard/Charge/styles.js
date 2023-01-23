import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.1rem solid ${theme.colors.grays.gray5};
    padding: 0 1rem 0.5rem 1rem;
    margin-top: 1.5rem;
  `}
`;

export const Info = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.grays.gray3};
  `}
`;
