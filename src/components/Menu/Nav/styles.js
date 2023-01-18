import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    width: 10%;
    align-items: center;
    background-color: ${theme.colors.grays.gray7};
    padding-top: 1.5rem;
  `}
`;
