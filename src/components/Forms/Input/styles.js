import styled, { css } from 'styled-components';

export const Container = styled.input`
  ${({ theme, type }) => css`
    all: unset;
    cursor: initial;
    min-height: 2.4rem;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
  margin-top: 1rem;
  > div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 0.7rem;
    > a {
      text-decoration: underline;
      color: ${theme.colors.defaults.pink}
    }
  }

  > span {
    font-weight: 400;
    color: ${theme.colors.grays.gray2};
  }

  .input {
    cursor: text;
    width: 100%;
    border-radius: 0.6rem;
    margin-top: 0.3rem;
    border: 0.1rem solid ${theme.colors.grays.gray4};
    padding: 0.7rem;

    > img {
      cursor: pointer;
      width: 2.4rem;
    }

    :focus {
      border: 0.1rem solid ${theme.colors.grays.gray1};
    }
  }
  `}
`;
