import styled, { css } from 'styled-components';
import { useLocation } from 'react-router-dom';

export const Container = styled.a`
  ${({ theme }) => css`
    > img {
      color: ${theme.colors.grays.gray3}
    }
  `}
`;


export const Image = styled.img`
  ${({ selected }) => css``}
`;
