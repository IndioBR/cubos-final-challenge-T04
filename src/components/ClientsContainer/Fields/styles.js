import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    text-align: start;
    max-height: 2rem;
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem 1.5rem 2rem;
    color: ${theme.colors.grays.gray2};
    border-bottom: 1px solid ${theme.colors.grays.gray4};

    > span {
      width: 10%;
    }

    > .charge_img {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: flex-start;
      color: ${theme.colors.defaults.pink};
      font-size: 0.7rem;
      > img {
        margin: 0 0.4rem;
        width: 2rem;
      }
    }
  `}
`;
