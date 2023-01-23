import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 37rem;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    padding-top: 1rem;
    box-shadow: 0.5rem 0.5rem 1rem ${theme.colors.grays.gray5};
  `}
`;
