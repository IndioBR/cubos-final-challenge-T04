import styled, { css } from 'styled-components';

export const Container = styled.input`
  ${({ theme }) => css`
    all: unset;
    cursor: initial;
    width: 100%;
    border-radius: 0.6rem;
    display: flex;
    flex-direction: column;
    margin-top: 0.3rem;
    border: 0.1rem solid ${theme.colors.grays.gray4};
    padding: 0.7rem;

    :focus {
      border: 0.1rem solid ${theme.colors.grays.gray1};
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    > span {
      font-weight: 400;
      color: ${theme.colors.grays.gray2};
    }
  `}
`;
