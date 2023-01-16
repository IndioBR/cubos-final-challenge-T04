import P from 'prop-types';
import * as Styled from './styles';

export const Title = ({ children, as = 'h1', weight = '900', color = '#000000' }) => {
  return <Styled.Container as={as} weight={weight} color={color}>
    {children}
  </Styled.Container>;
};

Title.propTypes = {
  children: P.node.isRequired,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  weight: P.number.isRequired,
  color: P.string.isRequired,
};
