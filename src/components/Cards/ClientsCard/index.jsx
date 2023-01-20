import P from 'prop-types';
import * as Styled from './styles';

export const ClientsCard = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

ClientsCard.propTypes = {
  children: P.node.isRequired,
};
