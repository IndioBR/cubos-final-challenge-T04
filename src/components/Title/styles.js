import styled, { css } from 'styled-components';

export const Container = styled.h1`
  ${({ theme, color, weight, font }) => css`
    color: ${color};
    font-weight: ${weight};
  `}
`;
